```js script
import { html } from '@open-wc/demoing-storybook';
import '../bbva-login.js';

export default {
  title: 'BbvaLogin',
  component: 'bbva-login',
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
yarn add bbva-login
```

```js
import 'bbva-login/bbva-login.js';
```

```js preview-story
export const Simple = () => html`
  <bbva-login></bbva-login>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <bbva-login title="Hello World"></bbva-login>
`;
```
