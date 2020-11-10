import { html, css, LitElement } from 'lit-element';
import { ScopedElementsMixin, prop } from '../../../core';
import { BbvaCountdownItem } from './BbvaCountdownItem';

function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

export class BbvaCountdown extends ScopedElementsMixin(LitElement) {
  static get styles() {
    return css`
      :host {
        display: flex;
        justify-content: center;
      }
    `;
  }

  static get scopedElements() {
    return {
      'bbva-countdown-item': BbvaCountdownItem,
    };
  }

  constructor() {
    super();
    this.deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
    this.configText = {
      days: 'days',
      hours: 'hours',
      minutes: 'minutes',
      seconds: 'seconds',
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.updateClock();
    this.timeInterval = setInterval(this.updateClock.bind(this), 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.timeInterval);
  }

  updateClock() {
    const t = getTimeRemaining(this.deadline);

    this.days = t.days;
    this.hours = ('0' + t.hours).slice(-2);
    this.minutes = ('0' + t.minutes).slice(-2);
    this.seconds = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(this.timeInterval);
    }

    this.requestUpdate();
  }

  render() {
    return html`
      <bbva-countdown-item
        .text=${prop('days', this.configText)}
        .item=${prop('days', this)}
        .className=${prop('days', this.configText)}
      ></bbva-countdown-item>
      <bbva-countdown-item
        .text=${prop('hours', this.configText)}
        .item=${prop('hours', this)}
        .className=${prop('hours', this.configText)}
      ></bbva-countdown-item>
      <bbva-countdown-item
        .text=${prop('minutes', this.configText)}
        .item=${prop('minutes', this)}
        .className=${prop('minutes', this.configText)}
      ></bbva-countdown-item>
      <bbva-countdown-item
        .text=${prop('seconds', this.configText)}
        .item=${prop('seconds', this)}
        .className=${prop('seconds', this.configText)}
      ></bbva-countdown-item>
    `;
  }
}
