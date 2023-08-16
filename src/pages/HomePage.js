import React from 'react';
import Display from './dash/Display';
import Tech from './dash/Tech';
import { Info } from './dash/Info';

const HomePage = () => {
  return (
    <div>

      <Display />
      <Tech />
      <Info />

    </div>
  );
};

export default HomePage;
