import React from 'react'
import { Outlet } from 'react-router'

export const RootLayout = () => {
  return (
    <>

<header className="flex justify-between bg-red-600 h-[50px] w-full items-center">
  <div className="logo capitalize text-white">
    <h1>dilip sahu</h1>
  </div>
  <nav className="capitalize   flex  gap-[100px]  p-10 m-10">
    <a href="">about</a>
    <a href="">about</a>
    <a href="">about</a>
    <a href="">about</a>
  </nav>
</header>
<Outlet/>
    
    </>
  )
}
