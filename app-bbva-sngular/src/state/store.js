import {
  createStore,
  compose as origCompose,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { lazyReducerEnhancer } from 'pwa-helpers/lazy-reducer-enhancer.js';
import { authentication, registration, users, alert, app } from './reducers';

export { actions } from './actions';

export { connect } from 'pwa-helpers';

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || origCompose;

export const store = createStore(
  (state, action) => state,
  compose(lazyReducerEnhancer(combineReducers), applyMiddleware(thunk))
);

// Initially loaded reducers.
store.addReducers({
  authentication,
  registration,
  users,
  alert,
  app,
});
