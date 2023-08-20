import React from 'react';
import Display from './dash/Display';
import Tech from './dash/Tech';
import { Info } from './dash/Info';
import axios from 'axios';

axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
  .then(meal => {
    console.log(meal.data);
  })
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
