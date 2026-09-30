export const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://disbug.io';
export const APP_URL = (
  import.meta.env.PUBLIC_APP_URL || 'https://app.disbug.io'
).replace(/\/$/, '');

export const appHref = (path = '/') =>
  `${APP_URL}${path.startsWith('/') ? path : `/${path}`}`;

export const loginUrl = appHref('/accounts/login/');
export const signupUrl = appHref('/accounts/signup/');
export const dashboardUrl = appHref('/');
