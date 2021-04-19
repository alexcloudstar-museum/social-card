import React from 'react';

import CaretProps from 'shared/Author/Data/types/CaretType';

const Caret: React.FC<CaretProps> = ({ icon }) => (
  <span className='Caret text-grey ml-2'>
    <i className={icon}></i>
  </span>
);

export default Caret;
