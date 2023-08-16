import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

export const RootLayout = () => {
  return (
    <>
      <Header />

      <Outlet />
      <Footer />
    </>
  )
}
