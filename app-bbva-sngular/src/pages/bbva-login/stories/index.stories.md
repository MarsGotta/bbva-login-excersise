```js script
import { html } from '@open-wc/demoing-storybook';
import '../bbva-login.js';

export default {
  title: 'BbvaLogin',
  component: 'bbva-login',
  options: { selectedPanel: 'storybookjs/knobs/panel' },
};
```

# BbvaLogin

A login page for app-bbva-sngular application

## How to use

### Installation

```bash
yarn add bbva-login
```

```js
import 'bbva-login/bbva-login.js';
```

```js preview-story
export const Simple = () => html` <bbva-login></bbva-login> `;
```
