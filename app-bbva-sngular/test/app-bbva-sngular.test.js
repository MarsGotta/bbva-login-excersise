import { html, fixture, expect } from '@open-wc/testing';
import '../src/main.js';

import '../src/app-bbva-sngular.js';

describe('AppBbvaSngular', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <app-bbva-sngular></app-bbva-sngular>
    `);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
