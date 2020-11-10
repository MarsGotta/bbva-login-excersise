import { UPDATE_PAGE, UPDATE_OFFLINE } from '../actions/app';

export function app(state = {}, action) {
  switch (action.type) {
    case UPDATE_PAGE:
      const p = action.page;
      return {
        ...state,
        page: p,
      };
    case UPDATE_OFFLINE:
      return {
        ...state,
        offline: action.offline,
      };
    default:
      return state;
  }
}
