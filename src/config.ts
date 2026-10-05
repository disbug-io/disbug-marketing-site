export const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://disbug.io';
export const APP_URL = (
  import.meta.env.PUBLIC_APP_URL || 'https://app.disbug.io'
).replace(/\/$/, '');

export const appHref = (path = '/') =>
  `${APP_URL}${path.startsWith('/') ? path : `/${path}`}`;

export const loginUrl = appHref('/accounts/login/');
export const signupUrl = appHref('/accounts/signup/');
export const dashboardUrl = appHref('/');

/** Public ingest key for the landing-page demo widget on `/` only. */
export const LANDING_PAGE_WIDGET_KEY = 'pk_live_IJSUFZM62AF6ZLVX7SCVJ5NH';
