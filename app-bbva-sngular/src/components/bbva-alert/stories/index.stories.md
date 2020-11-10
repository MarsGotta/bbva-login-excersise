```js script
import { html } from '@open-wc/demoing-storybook';
import '../bbva-alert.js';

export default {
  title: 'BbvaAlert',
  component: 'bbva-alert',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# BbvaAlert

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add bbva-alert
```

```js
import 'bbva-alert/bbva-alert.js';
```

```js preview-story
export const Simple = () => html`
  <bbva-alert></bbva-alert>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <bbva-alert title="Hello World"></bbva-alert>
`;
```
