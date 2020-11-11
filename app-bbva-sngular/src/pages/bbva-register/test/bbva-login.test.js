import { html, fixture, expect } from '@open-wc/testing';

import '../bbva-register.js';

describe('BbvaLogin', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture(html` <bbva-register></bbva-register> `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
