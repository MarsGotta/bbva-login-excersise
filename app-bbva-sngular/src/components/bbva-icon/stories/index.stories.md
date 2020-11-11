```js script
import { html } from '@open-wc/demoing-storybook';
import '../bbva-icon.js';

export default {
  title: 'BbvaIcon',
  component: 'bbva-icon',
  options: { selectedPanel: 'storybookjs/knobs/panel' },
};
```

# BbvaIcon

A icon component for app-bbva-sngular application

## How to use

### Installation

```bash
yarn add bbva-icon
```

```js
import 'bbva-icon/bbva-icon.js';
```

```js preview-story
export const Simple = () => html` <bbva-icon icon="caplock"></bbva-icon> `;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html` <bbva-icon icon="caplock"></bbva-icon> `;
```
