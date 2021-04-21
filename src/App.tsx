import React, { FC } from 'react';

import SocialCard from 'components/SocialCard/View/Container';
import GlobalStyle from 'globalStyles';

const randomizeId = (): number => Math.floor(Math.random() * 10) + 1;

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <SocialCard id={randomizeId()} />
    </>
  );
};

export default App;
