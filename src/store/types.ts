export const GET_USER = 'GET_USER';
export const GET_POST = 'GET_POST';
export const SET_LOADING = 'SET_LOADING';

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
  type: typeof GET_USER;
  payload: User;
}
export interface PostState {
  data: Post | null;
  loading: boolean;
}
interface GetPostAction {
  type: typeof GET_POST;
  payload: Post;
}
interface SetLoadingAction {
  type: typeof SET_LOADING;
}

export type Actions = GetUserAction | GetPostAction | SetLoadingAction;
