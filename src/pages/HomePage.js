import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div className="grid grid-cols-2 items-center px-10">
        <div className="h-[400px]">
          <lottie-player src="https://lottie.host/4369b74f-4e3b-495b-a185-70fe407c04b4/6H5sHPpYL6.json" background="#FFFFFF" speed="1" loop autoplay direction="1" mode="normal"></lottie-player>
        </div>
        <div id="hero-text">
          <h1 className="text-2xl font-semibold"> Hi, I am Dilip Sahu</h1>
          <h3 className="text-red-500 text-lg"> Mern Stack Developer</h3>
          <h3> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius perspiciatis ea quos, dolores perferendis in mollitia ab velit illum eligendi exercitationem totam vero iure nulla architecto dolorum? Provident enim autem consectetur? Voluptatibus quisquam similique quaerat ratione vel inventore dolore vero.</h3>
        </div>
      </div>

      <h1 className="text-center text-2xl font-semibold p-5"> Technologies I use</h1>

      <div id="icons" className="text-9xl flex justify-evenly">
        <i className="fa-brands fa-html5"></i>
        <i className="fa-brands fa-css3-alt"></i>
        <i className="fa-brands fa-square-js"></i>
        <i className="fa-brands fa-react"></i>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-2xl font-semibold p-5"> Who am I</h1>
        <div className="h-[400px] w-[400px] border-4 border-green-300 bg-black rounded-full text-white relative">
          <div className='absolute bottom-36 left-16'>
            <h1>Name: Dilip Sahu</h1>
            <h1>Email: dilip.sau2052@gmail.com</h1>
            <h1>Tel: 977-9860349123</h1>
            <h1>Age: 28</h1>
            <h1>Experience: HTML, JavaScript, CSS</h1>
          </div>
        </div>
      </div>
      <div className="relative">
        <svg width="100%" height="100%">
          <rect x="0%" y="20" width="100%" height="300" fill="black" />

        </svg>


        <div className="absolute bottom-11 left-2/4 text-white">
          <h1>Developed By</h1>
          <h1>Dilip Sahu</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
