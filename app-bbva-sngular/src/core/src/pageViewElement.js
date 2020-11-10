import { LitElement } from 'lit-element';
import { ScopedElementsMixin } from '../index';

export class PageViewElement extends ScopedElementsMixin(LitElement) {
  // Only render this page if it's actually visible.
  shouldUpdate() {
    return this.active;
  }

  static get properties() {
    return {
      active: {
        type: Boolean,
      },
    };
  }
}
