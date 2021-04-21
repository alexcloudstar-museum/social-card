import { ActionType } from '../action-types';
import { Actions, PostState } from 'store/types';

const initialState: PostState = {
  data: null,
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: Actions): PostState => {
  switch (action.type) {
    case ActionType.GET_POST:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ActionType.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
