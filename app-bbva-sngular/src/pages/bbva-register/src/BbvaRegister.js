import { html } from 'lit-element';
import { PageViewElement, prop } from '../../../core';
import styles from './BbvaRegister.style';

import { BbvaButton } from '../../../components/bbva-button';
import { BbvaIcon } from '../../../components/bbva-icon';
import { BbvaInput } from '../../../components/bbva-input';

export class BbvaRegister extends PageViewElement {
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
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      password: 'Password',
      register: 'Registration',
    };
    this.configUser = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
  }

  registerClick() {
    this.dispatchEvent(
      new CustomEvent('on-register', {
        detail: {
          firstName: prop('firstName', this),
          lastName: prop('lastName', this),
          username: prop('email', this),
          password: prop('password', this),
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  inputChange(detail, name) {
    this[name] = prop('value', detail);
  }

  render() {
    return html`
      <main class="bbva-register">
        <bbva-icon
          class="bbva-register-icon"
          .icon=${prop('icon', this.configUI)}
        ></bbva-icon>
        <bbva-input
          class="bbva-register-input"
          type="text"
          .placeholder=${prop('firstName', this.configText)}
          .value=${prop('firstName', this.configUser)}
          @on-input=${({ detail }) => this.inputChange(detail, 'firstName')}
        ></bbva-input>
        <bbva-input
          class="bbva-register-input"
          type="text"
          .placeholder=${prop('lastName', this.configText)}
          .value=${prop('lastName', this.configUser)}
          @on-input=${({ detail }) => this.inputChange(detail, 'lastName')}
        ></bbva-input>
        <bbva-input
          class="bbva-register-input"
          type="email"
          .placeholder=${prop('email', this.configText)}
          .value=${prop('email', this.configUser)}
          @on-input=${({ detail }) => this.inputChange(detail, 'email')}
        ></bbva-input>
        <bbva-input
          class="bbva-register-input"
          type="password"
          .placeholder=${prop('password', this.configText)}
          .value=${prop('password', this.configUser)}
          @on-input=${({ detail }) => this.inputChange(detail, 'password')}
        ></bbva-input>
        <bbva-button
          class="bbva-register-button"
          .text=${prop('register', this.configText)}
          @click=${this.registerClick}
        ></bbva-button>
      </main>
    `;
  }
}
