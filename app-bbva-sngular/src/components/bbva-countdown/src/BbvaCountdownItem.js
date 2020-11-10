import { html, css, LitElement } from 'lit-element';

export class BbvaCountdownItem extends LitElement {
  static get styles() {
    return css`
      :host {
        padding: 15px;
      }
    `;
  }

  static get properties() {
    return {
      item: { type: String },
      text: { type: Number },
      className: { type: String },
    };
  }

  render() {
    return html`
      <div id="bbva-item">
        <span class=${this.className}>${this.item}</span>
        <div class="smalltext">${this.text}</div>
      </div>
    `;
  }
}
