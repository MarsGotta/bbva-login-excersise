export const UPDATE_PAGE = 'UPDATE_PAGE';
export const UPDATE_OFFLINE = 'UPDATE_OFFLINE';

export function navigate(location) {
  return dispatch => {
    const pathname = location.pathname;
    const parts = pathname.slice(1).split('/');
    const page = parts[0] || 'dashboard';

    dispatch(updatePage(page));
  };
}

export function refreshPage() {
  return (dispatch, getState) => {
    const state = getState();
    // load page using the current state
    dispatch(updatePage(state.app.page));
  };
}

function updatePage(page) {
  return {
    type: UPDATE_PAGE,
    page,
  };
}

export function updateOffline(offline) {
  return (dispatch, getState) => {
    const prev = getState().app.offline;
    dispatch({
      type: UPDATE_OFFLINE,
      offline,
    });
    if (prev !== undefined) {
      dispatch(showSnackbar());
    }
    //  automatically refresh when you come back online (offline was true and now is false)
    if (prev === true && offline === false) {
      dispatch(refreshPage());
    }
  };
}

export function updateLocationURL(url) {
  return dispatch => {
    window.history.pushState({}, '', url);
    dispatch(navigate(window.location));
  };
}
