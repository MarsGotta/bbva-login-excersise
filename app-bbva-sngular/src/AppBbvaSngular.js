import { LitElement, html } from 'lit-element';
import { ScopedElementsMixin, installRouter, prop, renderIf } from './core';
import { store, actions, connect } from './state/store';
import { style } from './AppBbvaSngular.style';

import { BbvaLogin } from './pages/bbva-login';
import { BbvaRegister } from './pages/bbva-register';
import { BbvaDashboard } from './pages/bbva-dashboard';
import { BbvaAlert } from './components/bbva-alert';

function checkAuthPage(loggedIn, page) {
  if (loggedIn) {
    return 'dashboard';
  }
  if (!loggedIn && page === 'dashboard') {
    return 'login';
  }
  return page;
}

export class AppBbvaSngular extends connect(store)(
  ScopedElementsMixin(LitElement)
) {
  static get properties() {
    return {
      appTitle: { type: String },
      _page: { type: String },
      _message: { type: String },
    };
  }

  static get scopedElements() {
    return {
      'bbva-login': BbvaLogin,
      'bbva-register': BbvaRegister,
      'bbva-dashboard': BbvaDashboard,
      'bbva-alert': BbvaAlert,
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.config = {
      isLogin: false,
      isDashboard: false,
      isRegister: true,
    };
  }

  firstUpdated() {
    const { navigate } = actions;
    installRouter(location => store.dispatch(navigate(location)));
    this._page = checkAuthPage(prop('_loggedIn', this), prop('_page', this));
  }

  stateChanged({ app = {}, authentication, alert }) {
    this._message = prop('message', alert);
    this._loggedIn = prop('loggedIn', authentication);
    this._page = checkAuthPage(prop('_loggedIn', this), prop('page', app));
    this._user = prop('user', authentication);
  }

  onLogout({ detail }) {
    const { logout } = prop('userActions', actions);
    store.dispatch(logout(detail));
  }

  onLogin({ detail }) {
    const { email, password } = detail;
    const { login } = prop('userActions', actions);
    store.dispatch(login(email, password));
  }

  onRegister({ detail }) {
    const { firstName, lastName, username, password } = detail;
    const { register } = prop('userActions', actions);

    store.dispatch(register({ firstName, lastName, username, password }));
  }

  navigationTo({ detail }) {
    const { updateLocationURL } = actions;
    store.dispatch(updateLocationURL(prop('path', detail)));
  }

  closeAlert() {
    const { alertActions } = actions;
    const { clear } = alertActions;
    this._message = undefined;
    store.dispatch(clear());
  }

  render() {
    const pageType = prop('_page', this);
    const isLogin = pageType === 'login';
    const isDashboard = pageType === 'dashboard';
    const isRegister = pageType === 'register';
    return html`
      <div class="AppBbva"></div>
      ${renderIf(
        isLogin,
        html`<bbva-login
          ?active=${isLogin}
          @on-login=${this.onLogin}
          @navigation-to=${this.navigationTo}
        ></bbva-login>`
      )}
      ${renderIf(
        isRegister,
        html`<bbva-register
          ?active=${isRegister}
          @on-register=${this.onRegister}
        ></bbva-register>`
      )}
      ${renderIf(
        isDashboard,
        html`<bbva-dashboard
          ?active=${isDashboard}
          @on-logout=${this.onLogout}
        ></bbva-dashboard>`
      )}
      ${renderIf(
        Boolean(this._message),
        html`<bbva-alert
          .message=${this._message}
          @on-close=${this.closeAlert}
        ></bbva-alert>`
      )}
      <p class="app-footer">🚽 Made with love by Mars Gotta</p>
    `;
  }
}
