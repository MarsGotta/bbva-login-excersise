```js script
import { html } from '@open-wc/demoing-storybook';
import '../bbva-dashboard.js';

export default {
  title: 'BbvaDashboard',
  component: 'bbva-dashboard',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# BbvaDashboard

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add bbva-dashboard
```

```js
import 'bbva-dashboard/bbva-dashboard.js';
```

```js preview-story
export const Simple = () => html`
  <bbva-dashboard></bbva-dashboard>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <bbva-dashboard title="Hello World"></bbva-dashboard>
`;
```
