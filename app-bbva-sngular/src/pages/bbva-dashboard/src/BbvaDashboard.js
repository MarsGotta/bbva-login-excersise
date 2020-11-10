import { html, css } from 'lit-element';
import { PageViewElement, prop } from '../../../core';
import { BbvaCountdown } from '../../../components/bbva-countdown';
import { BbvaButton } from '../../../components/bbva-button';

export class BbvaDashboard extends PageViewElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--bbva-dashboard-text-color, #000);
      }
    `;
  }

  static get scopedElements() {
    return {
      'bbva-countdown': BbvaCountdown,
      'bbva-button': BbvaButton,
    };
  }

  constructor() {
    super();
    this.configText = {
      logout: 'Logout',
    };

    this.deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
  }

  logoutClick({ target }) {
    this.dispatchEvent(
      new CustomEvent('on-logout', {
        detail: { target },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <h1>Welcome!</h1>
      <p>The last time you accessed was</p>
      <bbva-countdown .deadline=${prop('deadline', this)}></bbva-countdown>
      <bbva-button
        class="bbva-logout-button"
        .text=${prop('logout', this.configText)}
        @click=${this.logoutClick}
      ></bbva-button>
    `;
  }
}
