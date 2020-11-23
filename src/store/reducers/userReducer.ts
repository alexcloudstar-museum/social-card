import { Actions, GET_USER, SET_LOADING, UserState } from 'store/types';

const initialState: UserState = {
  data: null,
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: Actions): UserState => {
  switch (action.type) {
    case GET_USER:
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
