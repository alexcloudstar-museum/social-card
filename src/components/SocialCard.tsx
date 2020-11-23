import React, { useState, useEffect } from 'react';
import { Avatar } from './Avatar';
import { Body } from './Body';
import API from '../api';
import { UserProps, PostProps } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getUser, setLoading } from 'store/actions/userAction';

type SocialCardProps = {
  id: number;
  secondEndPoint: string;
};

const SocialCard: React.FC<SocialCardProps> = ({ id, secondEndPoint }) => {
  const [post, setPost] = useState<PostProps>();

  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user.data);
  const loading = useSelector((state: RootState) => state.user.loading);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getUser(id));
  }, [id, dispatch]);

  const getPost = (secondEndPoint: string, id: number) => {
    API.get(`${secondEndPoint}/${id}`).then(res => {
      setPost(res.data);
    });
  };

  return (
    <>
      {loading ? (
        <div>loading....</div>
      ) : (
        <div className='SocialCard mb-3 row'>
          <Avatar width={70} height={70} shortUsername={'AC'} />
          {console.log(userData)}
          {userData ? (
            <Body
              name={userData.name}
              username={userData.username}
              website={userData.website}
              title={'Hello world'}
              body={'sajdahsdhdsahsadh'}
            />
          ) : null}
        </div>
      )}
    </>
  );
};

export default SocialCard;
