import { html, fixture, expect } from '@open-wc/testing';

import '../bbva-input.js';

describe('BbvaInput', () => {
  it('has a default element is render', async () => {
    const el = await fixture(html`
      <bbva-input></bbva-input>
    `);

    expect(el).to.exist;
  });

  it('can override the type via attribute', async () => {
    const el = await fixture(html`
      <bbva-input type="attribute type"></bbva-input>
    `);

    expect(el.type).to.equal('attribute type');
  });

  it('can override the placeholder via attribute', async () => {
    const el = await fixture(html`
      <bbva-input placeholder="attribute placeholder"></bbva-input>
    `);

    expect(el.placeholder).to.equal('attribute placeholder');
  });

  it('can override the value via attribute', async () => {
    const el = await fixture(html`
      <bbva-input value="attribute value"></bbva-input>
    `);

    expect(el.value).to.equal('attribute value');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <bbva-input ariaLabel="aria label"></bbva-input>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
