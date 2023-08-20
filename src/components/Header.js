import { useState } from "react"
import { NavLink } from "react-router-dom"
import { BiMenu } from "react-icons/bi";

const Header = () => {

  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };
  const closeMenu = () => {
    setShow(false);
  };

  return (
    <header className="bg-black text-white flex justify-between px-5 py-2 items-baseline">

      <div>
        <NavLink to='/' onClick={closeMenu}>
          <h1>Dilip Sahu</h1> </NavLink>

        {show && <nav className=" flex-col space-y-1 mt-3  items-center hidden sm:flex">
          <NavLink to='/about-us' onClick={closeMenu} >About</NavLink>
          <NavLink to='/contact-us' onClick={closeMenu}>Contact</NavLink>
        </nav>
        }

      </div>
      {show ? <button onClick={toggle} className="hidden sm:flex"><BiMenu /> </button> : <button onClick={toggle} className="hidden sm:flex"><i className="fa-solid fa-bars fa-lg"></i></button>}


      <nav className="space-x-5 flex sm:hidden">
        <NavLink to='/about-us' onClick={closeMenu} className=" p-2 hover:bg-white hover:text-black transition duration-300 ease-in-out">About</NavLink>
        <NavLink to='/contact-us' onClick={closeMenu} className=" p-2 hover:bg-white hover:text-black transition duration-300 ease-in-out">Contact</NavLink>
      </nav>
    </header>
  )
}
export default Header