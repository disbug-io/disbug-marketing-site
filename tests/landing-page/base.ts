import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../..',
);

export function readProjectFile(relativePath: string): string {
  return readFileSync(path.join(repoRoot, relativePath), 'utf-8');
}

export async function loadWidgetModule() {
  return import('../../src/lib/widget.ts');
}
