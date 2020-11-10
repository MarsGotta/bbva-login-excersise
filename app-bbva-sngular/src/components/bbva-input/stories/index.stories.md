```js script
import { html } from '@open-wc/demoing-storybook';
import '../bbva-input.js';

export default {
  title: 'BbvaInput',
  component: 'bbva-input',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# BbvaInput

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add bbva-input
```

```js
import 'bbva-input/bbva-input.js';
```

```js preview-story
export const Simple = () => html`
  <bbva-input></bbva-input>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <bbva-input title="Hello World"></bbva-input>
`;
```
