import React from 'react';

import DateType from 'shared/Author/Data/types/DateType';

const Date: React.FC<DateType> = ({ date }) => (
  <h3 className='Date'>
    <span className='text-grey'>&nbsp;{date}&nbsp;</span>
  </h3>
);

export default Date;
