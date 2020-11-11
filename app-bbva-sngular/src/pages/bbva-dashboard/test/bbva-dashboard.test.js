import { html, fixture, expect } from '@open-wc/testing';

import '../bbva-dashboard.js';

describe('BbvaDashboard', () => {

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <bbva-dashboard></bbva-dashboard>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
