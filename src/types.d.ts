export type UserProps = {
  name?: string;
  username?: string;
  website?: string;
};

export type PostProps = {
  title?: string;
  body?: string;
};

export type UserAndPostProps = UserProps & PostProps;
