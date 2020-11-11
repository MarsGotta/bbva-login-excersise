```js script
import { html } from '@open-wc/demoing-storybook';
import '../bbva-input.js';

export default {
  title: 'BbvaInput',
  component: 'bbva-input',
  options: { selectedPanel: 'storybookjs/knobs/panel' },
};
```

# BbvaInput

A input component for app-bbva-sngular application

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
  <bbva-input
    value="Este es el value"
    type="text"
    placeholder="Un placeholder"
  ></bbva-input>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <bbva-input title="Hello World"></bbva-input>
`;
```
