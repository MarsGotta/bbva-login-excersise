import { html, css, LitElement } from 'lit-element';
import { ScopedElementsMixin } from '../../../core';
import { BbvaIcon } from '../../bbva-icon';

export class BbvaAlert extends ScopedElementsMixin(LitElement) {
  static get styles() {
    return css`
      :host {
        display: block;
        background-color: rgb(62, 129, 221);
        color: rgb(255, 255, 255);
        padding: 10px;
        position: absolute;
        top: 0px;
      }

      .bbva-close-icon svg {
        width: 15px;
        cursor: pointer;
        fill: #fff;
      }
    `;
  }

  static get properties() {
    return {
      message: { type: String },
    };
  }

  static get scopedElements() {
    return {
      'bbva-icon': BbvaIcon,
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  handleClose() {
    this.dispatchEvent(
      new CustomEvent('on-close', {
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div>
        ${this.message}
        <bbva-icon
          class="bbva-close-icon"
          @click=${this.handleClose}
          icon="close"
        ></bbva-icon>
      </div>
    `;
  }
}
