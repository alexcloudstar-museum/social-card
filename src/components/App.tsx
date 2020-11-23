import React from 'react';
import SocialCard from './SocialCard';
import GlobalStyles from '../globalStyles';

const randomizeId = (): number => {
  // returns a random integer from 1 to 10
  return Math.floor(Math.random() * 10) + 1;
};

const App = () => {
  return (
    <>
      <GlobalStyles />
      <div className='App container text-center mt-4'>
        <SocialCard secondEndPoint={'posts'} id={randomizeId()} />
      </div>
    </>
  );
};

export default App;
