import api from 'api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';

import { Actions, GET_USER, SET_LOADING, User } from 'store/types';

export const getUser = (
  id: number
): ThunkAction<void, RootState, null, Actions> => {
  return async dispatch => {
    try {
      const res = await api.get(`users/${id}`);

      const resData: User = await res.data;

      dispatch({
        type: GET_USER,
        payload: resData,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const setLoading = (): Actions => {
  return {
    type: SET_LOADING,
  };
};
