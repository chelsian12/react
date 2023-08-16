import React from 'react';
import Display from './dash/Display';

const HomePage = () => {
  return (
    <div>

      <Display />

      <h1 className="text-center text-2xl font-semibold p-5"> Technologies I use</h1>

      <div id="icons" className="text-9xl flex justify-evenly">
        <i className="fa-brands fa-html5"></i>
        <i className="fa-brands fa-css3-alt"></i>
        <i className="fa-brands fa-square-js"></i>
        <i className="fa-brands fa-react"></i>
      </div>
      <div className="  flex flex-col justify-center items-center">
        <h1 className="text-center text-2xl font-semibold p-5"> Who am I</h1>
        <div className="h-[400px] w-[400px] border-4 border-green-300 bg-black rounded-full text-white relative">
          <div className=' absolute bottom-36 left-16'>
            <h1>Name: Dilip Sahu</h1>
            <h1>Email: dilip.sau2052@gmail.com</h1>
            <h1>Tel: 977-9860349123</h1>
            <h1>Age: 28</h1>
            <h1>Experience: HTML, JavaScript, CSS</h1>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
