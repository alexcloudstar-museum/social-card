import api from 'api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';
import { ActionType } from '../action-types';
import { Actions, User } from 'store/types';

export const getUser = (
  id: number
): ThunkAction<void, RootState, null, Actions> => {
  return async dispatch => {
    try {
      const res = await api.get(`users/${id}`);

      const resData: User = await res.data;

      dispatch({
        type: ActionType.GET_USER,
        payload: resData,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const setLoading = (): Actions => {
  return {
    type: ActionType.SET_LOADING,
  };
};
