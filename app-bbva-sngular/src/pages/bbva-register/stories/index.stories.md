```js script
import { html } from '@open-wc/demoing-storybook';
import '../bbva-register.js';

export default {
  title: 'BbvaLogin',
  component: 'bbva-register',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# BbvaLogin

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add bbva-register
```

```js
import 'bbva-register/bbva-register.js';
```

```js preview-story
export const Simple = () => html`
  <bbva-register></bbva-register>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <bbva-register title="Hello World"></bbva-register>
`;
```
