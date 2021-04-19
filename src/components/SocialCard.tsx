import React, { useEffect } from 'react';
import { Avatar } from './Avatar';
import { Body } from './Body';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getUser, setLoading } from 'store/actions/userAction';
import { getPost } from 'store/actions/postAction';
import { Loader } from './Loader';

type SocialCardProps = {
  id: number;
};

const SocialCard: React.FC<SocialCardProps> = ({ id }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user.data);
  const postData = useSelector((state: RootState) => state.post.data);
  const loading = useSelector((state: RootState) => state.user.loading);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getUser(id));
    dispatch(getPost(id));
  }, [id, dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='SocialCard mb-3 row'>
          <Avatar width={70} height={70} shortUsername={'AC'} />
          {userData && postData ? (
            <Body
              name={userData.name}
              username={userData.username}
              website={userData.website}
              title={postData.title}
              body={postData.body}
            />
          ) : null}
        </div>
      )}
    </>
  );
};

export default SocialCard;
