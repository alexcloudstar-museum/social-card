import React, { useState, useEffect } from 'react';
import { Avatar } from './Avatar';
import { Body } from './Body';
import API from '../api';
import axios from 'axios';

type SocialCardProps = {
  id: number;
  endPoint: string;
  secondEndPoint?: string;
};

const SocialCard: React.FC<SocialCardProps> = ({ id, endPoint }) => {
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/1`).then(res => {
      setUser(res.data);
    });
    console.log(user);
    setLoading(false);
  }, []);

  console.log(user);

  return (
    <>
      {loading ? (
        <div>loading....</div>
      ) : (
        <div className='SocialCard mb-3 row'>
          <Avatar width={70} height={70} shortUsername={'AC'} />
          {user ? <Body name={user.name} /> : null}
        </div>
      )}
    </>
  );
};

export default SocialCard;
