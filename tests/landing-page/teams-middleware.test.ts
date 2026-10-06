import { describe, expect, it } from 'vitest';
import { LANDING_PAGE_WIDGET_KEY } from '../../src/config';
import { readProjectFile } from './base';

/**
 * Ported from disbug_v2 `test_teams_middleware.py` landing-widget override.
 * The marketing site always embeds the public landing widget key on `/`.
 */
describe('landing page without auth (ported from test_teams_middleware.py)', () => {
  it('test_unauthenticated_view always embeds the landing widget on /', () => {
    const indexPage = readProjectFile('src/pages/index.astro');

    expect(LANDING_PAGE_WIDGET_KEY).toBeTruthy();
    expect(indexPage).toContain('data-project-key={LANDING_PAGE_WIDGET_KEY}');
    expect(indexPage).not.toContain('LANDING_PAGE_WIDGET_KEY &&');
  });
});
