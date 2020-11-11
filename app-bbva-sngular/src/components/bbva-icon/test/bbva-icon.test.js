import { html, fixture, expect } from '@open-wc/testing';

import '../bbva-icon.js';

describe('BbvaIcon', () => {
  xit('should render the icon if attibute is set', async () => {
    const el = await fixture(html`
      <bbva-icon icon="padlock"></bbva-icon>
    `);

    expect(el.shadowRoot.querySelector('svg')).to.exist;
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <bbva-icon></bbva-icon>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
