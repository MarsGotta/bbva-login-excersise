import { html, fixture, expect } from '@open-wc/testing';

import '../bbva-countdown.js';

describe('BbvaCountdown', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <bbva-countdown></bbva-countdown>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
