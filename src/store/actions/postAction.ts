import api from 'api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';

import { Actions, GET_POST, SET_LOADING, Post } from 'store/types';

export const getPost = (
  id: number
): ThunkAction<void, RootState, null, Actions> => {
  return async dispatch => {
    try {
      const res = await api.get(`posts/${id}`);

      const resData: Post = await res.data;

      dispatch({
        type: GET_POST,
        payload: resData,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const setLoading = (): Actions => {
  return {
    type: SET_LOADING,
  };
};
