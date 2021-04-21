import { FC } from 'react';

import { LoaderWrapper } from './style';

export const Loader: FC = () => {
  return (
    <LoaderWrapper>
      <div className='loader'>
        <div className='father'>
          <div className='one'></div>
        </div>

        <div className='two'></div>
        <div className='three'></div>

        <div className='mother'>
          <div className='num-for'></div>
        </div>
      </div>
    </LoaderWrapper>
  );
};
