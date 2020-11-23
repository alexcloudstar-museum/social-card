import { Actions, GET_POST, SET_LOADING, PostState } from 'store/types';

const initialState: PostState = {
  data: null,
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: Actions): PostState => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
