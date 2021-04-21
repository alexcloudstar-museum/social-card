import { FC, useEffect } from 'react';

import { SocialCardWrapper } from '../style';
import { SocialCardType } from 'components/SocialCard/Data/types';
import { Body } from 'shared/Body/View/Container';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getUser, setLoading } from 'store/actions/userAction';
import { getPost } from 'store/actions/postAction';
import { Loader } from 'components/Loader';

const SocialCard: FC<SocialCardType> = ({ className, id }) => {
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
        <SocialCardWrapper className='SocialCard mb-3 row m-0'>
          <Body
            name={userData?.name}
            username={userData?.username}
            website={userData?.website}
            title={postData?.title}
            body={postData?.body}
          />
        </SocialCardWrapper>
      )}
    </>
  );
};

export default SocialCard;
