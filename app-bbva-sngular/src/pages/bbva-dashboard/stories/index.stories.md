```js script
import { html } from '@open-wc/demoing-storybook';
import '../bbva-dashboard.js';

export default {
  title: 'BbvaDashboard',
  component: 'bbva-dashboard',
  options: { selectedPanel: 'storybookjs/knobs/panel' },
};
```

# BbvaDashboard

A dashboard page for app-bbva-sngular application

## How to use

### Installation

```bash
yarn add bbva-dashboard
```

```js
import 'bbva-dashboard/bbva-dashboard.js';
```

```js preview-story
export const Simple = () => html` <bbva-dashboard></bbva-dashboard> `;
```
