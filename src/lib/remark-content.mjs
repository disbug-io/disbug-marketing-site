function textContent(node) {
  if (node.type === 'text') return node.value;
  return (node.children || []).map(textContent).join('');
}

function normalize(value) {
  return value
    .toLowerCase()
    .replace(/\.\.\./g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function isImageOnlyParagraph(node) {
  return (
    node?.type === 'paragraph' &&
    node.children?.length === 1 &&
    node.children[0].type === 'image'
  );
}

export function remarkDisbugContent() {
  return (tree, file) => {
    const isPseo = String(file.path || '').includes('/content/pseo/');
    const title = file.data?.astro?.frontmatter?.title || '';

    if (isPseo) {
      if (isImageOnlyParagraph(tree.children[0])) tree.children.shift();
    }
    while (
      tree.children[0]?.type === 'heading' &&
      (normalize(textContent(tree.children[0])) === normalize(title) || isPseo)
    ) {
      tree.children.shift();
    }

    const ancestors = [];
    for (const node of tree.children) {
      if (node.type !== 'heading') continue;
      const source = node.depth;
      while (ancestors.length && ancestors.at(-1).source >= source) {
        ancestors.pop();
      }
      const rendered = ancestors.length
        ? Math.min(ancestors.at(-1).rendered + 1, 6)
        : 2;
      ancestors.push({ source, rendered });
      node.depth = rendered;
    }
  };
}

export function rehypeDisbugFigures() {
  return (tree) => {
    const visit = (node) => {
      if (!node.children) return;

      for (let index = 0; index < node.children.length; index += 1) {
        const imageParagraph = node.children[index];
        if (
          imageParagraph?.type !== 'element' ||
          imageParagraph.tagName !== 'p' ||
          imageParagraph.children?.length !== 1 ||
          imageParagraph.children[0].tagName !== 'img'
        ) {
          continue;
        }

        let captionIndex = index + 1;
        while (
          node.children[captionIndex]?.type === 'text' &&
          !node.children[captionIndex].value.trim()
        ) {
          captionIndex += 1;
        }
        const caption = node.children[captionIndex];
        const alt = imageParagraph.children[0].properties?.alt || '';
        if (
          caption?.type !== 'element' ||
          caption.tagName !== 'p' ||
          !alt ||
          normalize(alt) !== normalize(textContent(caption))
        ) {
          continue;
        }

        node.children.splice(index, captionIndex - index + 1, {
          type: 'element',
          tagName: 'figure',
          properties: { className: ['content-figure'] },
          children: [
            imageParagraph.children[0],
            {
              type: 'element',
              tagName: 'figcaption',
              properties: {},
              children: caption.children,
            },
          ],
        });
      }

      for (const child of node.children) visit(child);
    };

    visit(tree);
  };
}
