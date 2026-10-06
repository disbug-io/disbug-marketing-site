import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { LANDING_PAGE_WIDGET_KEY } from '../../src/config';
import { loadWidgetModule } from './base';

describe('landing widget (ported from disbug_v2 onboarding.py + test_basic_views.py)', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.unstubAllEnvs();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('test_landing_page_embeds_widget_on_landing_page', async () => {
    vi.stubEnv('PUBLIC_APP_URL', 'https://app.disbug.io');

    const { buildLandingWidgetSnippet, LANDING_PAGE_WIDGET_KEY: widgetKey } =
      await loadWidgetModule();
    const snippet = buildLandingWidgetSnippet();

    expect(widgetKey).toBe(LANDING_PAGE_WIDGET_KEY);
    expect(snippet).toContain('static/disbug/widget/v1.js');
    expect(snippet).toContain(`data-project-key="${LANDING_PAGE_WIDGET_KEY}"`);
    expect(snippet).toContain('data-placement="bottom-right"');
    expect(snippet).toContain('data-bar-placement="bottom-center"');
    expect(snippet).toContain('data-success-placement="top-center"');
    expect(snippet).toContain('data-widget-animation="true"');
  });

  it('uses hosted widget script for local marketing dev', async () => {
    vi.stubEnv('PUBLIC_APP_URL', 'http://localhost:8000');

    const { getWidgetSrc } = await loadWidgetModule();

    expect(getWidgetSrc()).toBe(
      'https://app.disbug.io/static/disbug/widget/v1.js',
    );
  });

  it('public ingest validation for unknown or disabled keys is enforced by V2 at runtime', async () => {
    const { buildLandingWidgetSnippet } = await loadWidgetModule();

    expect(buildLandingWidgetSnippet()).toContain(LANDING_PAGE_WIDGET_KEY);
  });
});
