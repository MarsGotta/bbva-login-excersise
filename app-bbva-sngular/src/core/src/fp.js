import { html } from 'lit-element';
import { cond, T, prop, equals } from 'ramda';

export function renderIf(isRender, component) {
  const fn = cond([
    [equals(true), () => component],
    [T, () => html``],
  ]);
  return fn(isRender);
}

export { cond, T, prop, equals };
