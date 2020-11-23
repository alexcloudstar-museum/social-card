import React, { useState, useEffect } from 'react';
import { Avatar } from './Avatar';
import { Body } from './Body';
import API from '../api';
import { UserProps, PostProps } from '../types';

type SocialCardProps = {
  id: number;
  endPoint: string;
  secondEndPoint: string;
};

const SocialCard: React.FC<SocialCardProps> = ({
  id,
  endPoint,
  secondEndPoint,
}) => {
  const [user, setUser] = useState<UserProps>();
  const [post, setPost] = useState<PostProps>();
  const [loading, setLoading] = useState(true);

  const getUser = (endPoint: string, id: number) => {
    API.get(`${endPoint}/${id}`).then(res => {
      setUser(res.data);
    });
  };

  const getPost = (secondEndPoint: string, id: number) => {
    API.get(`${secondEndPoint}/${id}`).then(res => {
      setPost(res.data);
    });
  };

  useEffect(() => {
    getUser(endPoint, id);
    getPost(secondEndPoint, id);
    setLoading(false);
  }, [id, endPoint, secondEndPoint]);

  return (
    <>
      {loading ? (
        <div>loading....</div>
      ) : (
        <div className='SocialCard mb-3 row'>
          <Avatar width={70} height={70} shortUsername={'AC'} />
          {user && post ? (
            <Body
              name={user.name}
              username={user.username}
              website={user.website}
              title={post.title}
              body={post.body}
            />
          ) : null}
        </div>
      )}
    </>
  );
};

export default SocialCard;
