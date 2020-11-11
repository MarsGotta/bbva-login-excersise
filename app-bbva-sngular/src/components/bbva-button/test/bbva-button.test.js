import { html, fixture, expect } from '@open-wc/testing';

import '../bbva-button.js';

describe('BbvaButton', () => {
  it('has a default text "Button"', async () => {
    const el = await fixture(html`
      <bbva-button></bbva-button>
    `);

    expect(el.text).to.equal('Button');
  });

  xit('dispatch an event on button click', async () => {
    const el = await fixture(html`
      <bbva-button></bbva-button>
    `);
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the text via attribute', async () => {
    const el = await fixture(html`
      <bbva-button text="attribute text"></bbva-button>
    `);

    expect(el.text).to.equal('attribute text');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <bbva-button></bbva-button>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
