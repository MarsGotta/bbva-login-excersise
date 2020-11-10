// setup fake backend
import { configureFakeBackend } from './fake-server';
import './core/src/customElementsDedupe';

configureFakeBackend();

window.process = {
  env: {
    NODE_ENV: 'production',
  },
};
