```js script
import { html } from '@open-wc/demoing-storybook';
import '../bbva-countdown.js';

export default {
  title: 'BbvaCountdown',
  component: 'bbva-countdown',
  options: { selectedPanel: 'storybookjs/knobs/panel' },
};
```

# BbvaCountdown

A countdown component for app-bbva-application

## How to use

### Installation

```bash
yarn add bbva-countdown
```

```js
import 'bbva-countdown/bbva-countdown.js';
```

```js preview-story
export const Simple = () => html` <bbva-countdown></bbva-countdown> `;
```
