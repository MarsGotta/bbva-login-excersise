import { userConstants } from '../constants';
import { userService } from '../../services';
import { alertActions } from './alert';
import { updateLocationURL } from './app';

export const userActions = {
  login,
  logout,
  register,
};

function login(username, password) {
  return dispatch => {
    userService.login(username, password).then(
      user => {
        dispatch(success(user, userConstants.LOGIN_SUCCESS));
        dispatch(updateLocationURL('/dashboard'));
        dispatch(alertActions.success('Login successful'));
      },
      error => {
        dispatch(failure(error, userConstants.LOGIN_FAILURE));
        dispatch(alertActions.error(error));
      }
    );
  };
}

function logout() {
  userService.logout();

  return dispatch => {
    dispatch(updateLocationURL('/login'));
    dispatch(alertActions.success('Logout successful'));
    dispatch(finishLogout());
  };
}

function finishLogout() {
  return { type: userConstants.LOGOUT };
}

function register(user) {
  return dispatch => {
    dispatch(request(user, userConstants.REGISTER_REQUEST));

    userService.register(user).then(
      user => {
        dispatch(success(user, userConstants.REGISTER_SUCCESS));
        dispatch(updateLocationURL('/login'));
        dispatch(alertActions.success('Registration successful'));
      },
      error => {
        dispatch(failure(error, userConstants.REGISTER_FAILURE));
        dispatch(alertActions.error(error));
      }
    );
  };
}

function request(user, userConstant) {
  return { type: userConstant, user };
}
function success(user, userConstant) {
  return { type: userConstant, user };
}
function failure(error, userConstant) {
  return { type: userConstant, error };
}
