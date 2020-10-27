import React from 'react';
import SocialCard from './SocialCard';
import GlobalStyles from '../globalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <div className='App container text-center mt-4'>
        <SocialCard />
      </div>
    </>
  );
};

export default App;
