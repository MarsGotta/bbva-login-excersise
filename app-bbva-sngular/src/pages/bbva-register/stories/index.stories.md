```js script
import { html } from '@open-wc/demoing-storybook';
import '../bbva-register.js';

export default {
  title: 'BbvaLogin',
  component: 'bbva-register',
  options: { selectedPanel: 'storybookjs/knobs/panel' },
};
```

# BbvaLogin

A login page for app-bbva-sngular application

## How to use

### Installation

```bash
yarn add bbva-register
```

```js
import 'bbva-register/bbva-register.js';
```

```js preview-story
export const Simple = () => html` <bbva-register></bbva-register> `;
```
