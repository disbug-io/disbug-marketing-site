import { describe, expect, it } from 'vitest';
import { readProjectFile } from './base';

describe('landing page (ported from disbug_v2 test_basic_views.py)', () => {
  const landingPage = readProjectFile('src/components/LandingPage.astro');
  const indexPage = readProjectFile('src/pages/index.astro');

  it('test_landing_page renders hero and agent install prompt', () => {
    expect(landingPage).toContain('Install via your agent');
    expect(landingPage).toContain('/agent-setup/');
    expect(landingPage).toContain('I want to set up Disbug. Silently read');
    expect(landingPage).not.toContain('with a fresh login');
    expect(landingPage).toContain('Silently read');
    expect(landingPage).toContain(
      'Non-install onboarding actions are approved',
    );
    expect(landingPage).toContain('ask before installing or upgrading the CLI');
  });

  it('test_landing_page_renders_animation_classes', () => {
    expect(landingPage).toContain('.cursor-pulse {');
    expect(landingPage).toContain('.transition-cursor {');
    expect(landingPage).toContain('.cursor-tip {');
    expect(landingPage).toContain('.animate-fade-in {');
    expect(landingPage).toContain('class="cursor-pulse"');
    expect(landingPage).toContain('transition-cursor');
    expect(landingPage).toContain('cursor-tip');
    expect(landingPage).toContain('animate-fade-in');
    expect(landingPage).not.toMatch(/\n\s+\. \{/);
  });

  it('test_hero_inline_svgs_are_not_truncated', () => {
    expect(landingPage).not.toContain('h-.036l-4.212"/></svg>');
    expect(landingPage).toContain('viewBox="0 0 24 24" fill="#D97757"');
    expect(landingPage).not.toMatch(
      /\d+:\s*<(path|\/path|circle|rect|g|svg|title)/i,
    );
    expect(landingPage).toContain('<title>Hermes Agent</title>');
    expect(landingPage).toContain('d="M8.06 10.788');
  });

  it('landing animated hero uses refreshed spacing from PR #155', () => {
    expect(landingPage).toContain(
      '<section class="bg-white py-10 px-6 overflow-hidden" x-data="heroAnimation()">',
    );
  });

  it('index page always wires landing widget attributes', () => {
    expect(indexPage).toContain('data-project-key={LANDING_PAGE_WIDGET_KEY}');
    expect(indexPage).toContain('data-placement="bottom-right"');
    expect(indexPage).toContain('data-bar-placement="bottom-center"');
    expect(indexPage).toContain('data-success-placement="top-center"');
    expect(indexPage).toContain('data-widget-animation="true"');
    expect(indexPage).toContain('slot="page-scripts"');
    expect(indexPage).not.toContain('LANDING_PAGE_WIDGET_KEY &&');
  });
});
