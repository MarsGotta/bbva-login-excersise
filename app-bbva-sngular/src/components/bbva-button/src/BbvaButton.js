import { html, css, LitElement } from 'lit-element';
import { prop } from '../../../core';

export class BbvaButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        color: var(--bbva-button-text-color, #000);
      }
      button {
        background-color: #214a80;
        border: none;
        color: #fff;
        cursor: pointer;
        padding: 10px;
        width: 100%;
        border-radius: 5%;
      }
      button:hover {
        background-color: #306bdc;
      }
    `;
  }

  static get properties() {
    return {
      text: { type: String },
    };
  }

  constructor() {
    super();
    this.text = 'Button';
  }

  __click({ target }) {
    this.dispatchEvent(
      new CustomEvent('on-click', {
        detail: { target },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <button @click=${prop('__click', this)}>${prop('text', this)}</button>
    `;
  }
}
