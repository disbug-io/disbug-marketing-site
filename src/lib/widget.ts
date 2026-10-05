import { APP_URL, LANDING_PAGE_WIDGET_KEY } from '../config';

const DEFAULT_WIDGET_SRC = 'https://app.disbug.io/static/disbug/widget/v1.js';

export { LANDING_PAGE_WIDGET_KEY };

function isLocalAppUrl(url: string): boolean {
  try {
    const hostname = new URL(url).hostname;
    return hostname === 'localhost' || hostname === '127.0.0.1';
  } catch {
    return false;
  }
}

export function getWidgetSrc(): string {
  const custom = import.meta.env.PUBLIC_DISBUG_WIDGET_SRC;
  if (custom) {
    return custom;
  }
  if (isLocalAppUrl(APP_URL)) {
    // Local marketing dev usually runs without Django on :8000.
    return DEFAULT_WIDGET_SRC;
  }
  return `${APP_URL}/static/disbug/widget/v1.js`;
}

export function buildLandingWidgetSnippet(): string {
  const src = getWidgetSrc();
  return (
    `<script type="module" src="${src}" ` +
    `data-project-key="${LANDING_PAGE_WIDGET_KEY}" data-placement="bottom-right" ` +
    `data-bar-placement="bottom-center" data-success-placement="top-center" ` +
    `data-widget-animation="true"></script>`
  );
}
