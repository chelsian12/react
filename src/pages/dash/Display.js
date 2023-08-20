const Display = () => {
  return (
    <div className="grid grid-cols-2 items-center px-10 md:grid-cols-1">
      <div className="h-[400px]">
        <lottie-player src="https://lottie.host/4369b74f-4e3b-495b-a185-70fe407c04b4/6H5sHPpYL6.json" background="#FFFFFF" speed="1" loop autoplay direction="1" mode="normal"></lottie-player>
      </div>
      <div id="hero-text " className='space-y-3'>
        <h1 className="text-2xl font-semibold"> Hi, I am Dilip Sahu</h1>
        <h3 className="text-red-500 text-lg"> Mern Stack Developer</h3>
        <h3> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius perspiciatis ea quos, dolores perferendis in mollitia ab velit illum eligendi exercitationem totam vero iure nulla architecto dolorum? Provident enim autem consectetur? Voluptatibus quisquam similique quaerat ratione vel inventore dolore vero.</h3>
      </div>
    </div>
  )
}
export default Display