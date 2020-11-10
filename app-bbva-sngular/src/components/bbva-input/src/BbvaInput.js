import { html, css, LitElement } from 'lit-element';
import { prop } from '../../../core';

export class BbvaInput extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        margin: 5px;
      }
      :host input {
        border: none;
        border-bottom: 2px solid #aaaaaa;
        padding: 5px;
        width: 100%;
      }
      :host input:hover {
        border: none;
        border-bottom: 2px solid #aaaaaa;
      }
    `;
  }

  static get properties() {
    return {
      value: { type: String },
      placeholder: { type: String },
      type: { type: String },
    };
  }

  constructor() {
    super();
    this.type = '';
    this.value = '';
    this.placeholder = '';
  }

  handlerInput({ target }) {
    this.dispatchEvent(
      new CustomEvent('on-input', {
        detail: {
          value: prop('value', target),
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <input
        tab-index="0"
        .type=${prop('type', this)}
        .placeholder=${prop('placeholder', this)}
        .value=${prop('value', this)}
        @input=${this.handlerInput}
      />
    `;
  }
}
