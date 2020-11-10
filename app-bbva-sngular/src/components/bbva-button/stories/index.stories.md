```js script
import { html } from '@open-wc/demoing-storybook';
import '../bbva-button.js';

export default {
  title: 'BbvaButton',
  component: 'bbva-button',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# BbvaButton

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add bbva-button
```

```js
import 'bbva-button/bbva-button.js';
```

```js preview-story
export const Simple = () => html`
  <bbva-button></bbva-button>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <bbva-button title="Hello World"></bbva-button>
`;
```
