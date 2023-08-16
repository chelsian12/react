import React from 'react'

const Contact = () => {
  return (
    <div className=' grid grid-cols-2  md:grid-cols-1'>
      <div className='h-[400px]'>
        <lottie-player src="https://lottie.host/681479d6-4638-4fd0-81ae-7caca18206a3/GoiPliBDFa.json" background="#ffffff" speed="1" loop autoplay direction="1" mode="normal"></lottie-player>
      </div>

      <div className='p-5'>
        <h1 className='text-center text-2xl font-semibold mb-4'>Contact Us</h1>
        <form className='space-y-4'>
          <div>
            <label className='block'>Name:</label>
            <input type='text' className='w-full border p-2' placeholder='Please Type Your Name' required />
          </div>
          <div>
            <label className='block'>Email:</label>
            <input type='email' className='w-full border p-2' placeholder='Please Type Your Email' required />
          </div>
          <div>
            <label className='block'>Message:</label>
            <textarea className='w-full border p-2' placeholder='Please Type your Message' required></textarea>
          </div>
          <div className='flex justify-center'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:border-blue-600 hover:animate-bounce'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact