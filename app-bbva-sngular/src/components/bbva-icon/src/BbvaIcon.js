import { svg, LitElement } from 'lit-element';
import { findIcons } from './icons';

export class BbvaIcon extends LitElement {
  static get properties() {
    return {
      icon: { type: String },
    };
  }

  constructor() {
    super();
    this.icon = '';
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return svg`${findIcons(this.icon)}`;
  }
}
