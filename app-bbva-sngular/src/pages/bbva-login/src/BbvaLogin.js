import { html } from 'lit-element';
import { PageViewElement, prop } from '../../../core';
import styles from './BbvaLogin.style';

import { BbvaButton } from '../../../components/bbva-button';
import { BbvaIcon } from '../../../components/bbva-icon';
import { BbvaInput } from '../../../components/bbva-input';

export class BbvaLogin extends PageViewElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  static get scopedElements() {
    return {
      'bbva-input': BbvaInput,
      'bbva-icon': BbvaIcon,
      'bbva-button': BbvaButton,
    };
  }

  constructor() {
    super();
    this.configUI = {
      icon: 'padlock',
    };
    this.configText = {
      email: 'Email',
      password: 'Password',
      login: 'Login In',
    };
    this.configUser = {
      email: '',
      password: '',
    };
  }

  loginClick() {
    this.dispatchEvent(
      new CustomEvent('on-login', {
        detail: {
          email: prop('email', this),
          password: prop('password', this),
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  emailChange({ detail }) {
    this.email = prop('value', detail);
  }

  passwordChange({ detail }) {
    this.password = prop('value', detail);
  }

  handleRegister(path) {
    this.dispatchEvent(
      new CustomEvent('navigation-to', {
        detail: {
          path,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <main class="bbva-login">
        <bbva-icon
          class="bbva-login-icon"
          .icon=${prop('icon', this.configUI)}
        ></bbva-icon>
        <bbva-input
          class="bbva-login-input"
          type="email"
          .placeholder=${prop('email', this.configText)}
          .value=${prop('email', this.configUser)}
          @on-input=${this.emailChange}
        ></bbva-input>
        <bbva-input
          class="bbva-login-input"
          type="password"
          .placeholder=${prop('password', this.configText)}
          .value=${prop('password', this.configUser)}
          @on-input=${this.passwordChange}
        ></bbva-input>
        <bbva-button
          class="bbva-login-button"
          .text=${prop('login', this.configText)}
          @click=${this.loginClick}
        ></bbva-button>
        <p>
          Puedes registrarte
          <a
            class="register-link"
            @click=${() => this.handleRegister('/register')}
            >aquí</a
          >
        </p>
      </main>
    `;
  }
}
