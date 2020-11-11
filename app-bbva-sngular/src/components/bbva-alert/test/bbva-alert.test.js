import { html, fixture, expect } from '@open-wc/testing';

import '../bbva-alert.js';

describe('BbvaAlert', () => {

  it('can override the message via attribute', async () => {
    const el = await fixture(html`
      <bbva-alert message="attribute message"></bbva-alert>
    `);

    expect(el.message).to.equal('attribute message');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <bbva-alert></bbva-alert>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
