import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import userReducer from 'store/reducers/userReducer';
// import postReducer from 'store/reducers/postReducer';

const rootReducer = combineReducers({
  user: userReducer,
  // post: postReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
