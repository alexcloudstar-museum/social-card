import { ActionType } from './action-types';

export interface User {
  name: string;
  username: string;
  website: string;
}
export interface Post {
  title: string;
  body: string;
}
export interface UserState {
  data: User | null;
  loading: boolean;
}
interface GetUserAction {
  type: typeof ActionType.GET_USER;
  payload: User;
}
export interface PostState {
  data: Post | null;
  loading: boolean;
}
interface GetPostAction {
  type: typeof ActionType.GET_POST;
  payload: Post;
}
interface SetLoadingAction {
  type: typeof ActionType.SET_LOADING;
}

export type Actions = GetUserAction | GetPostAction | SetLoadingAction;
