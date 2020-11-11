import { html, fixture, expect } from '@open-wc/testing';

import '../bbva-login.js';

describe('BbvaLogin', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <bbva-login></bbva-login>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
