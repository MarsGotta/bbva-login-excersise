import { css } from 'lit-element';

export const style = css`
  :host {
    font-family: 'Open Sans', sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #1a2b42;
    margin: 0 auto;
    text-align: center;
  }

  main {
    flex-grow: 1;
  }

  .app-footer {
    font-size: calc(12px + 0.5vmin);
    align-items: center;
  }

  .app-footer a {
    margin-left: 5px;
  }
`;
