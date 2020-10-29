import React from 'react';
import SocialCard from './SocialCard';
import GlobalStyles from '../globalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <div className='App container text-center mt-4'>
        <SocialCard endPoint={'users'} id={1} />
      </div>
    </>
  );
};

export default App;
