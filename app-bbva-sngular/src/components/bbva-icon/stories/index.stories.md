```js script
import { html } from '@open-wc/demoing-storybook';
import '../bbva-icon.js';

export default {
  title: 'BbvaIcon',
  component: 'bbva-icon',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# BbvaIcon

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add bbva-icon
```

```js
import 'bbva-icon/bbva-icon.js';
```

```js preview-story
export const Simple = () => html`
  <bbva-icon></bbva-icon>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <bbva-icon title="Hello World"></bbva-icon>
`;
```
