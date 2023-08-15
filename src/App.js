import { Route, Routes } from "react-router"
import NotFound from "./pages/NotFound"
import { RootLayout } from "./components/RootLayout"
import HomePage from "./pages/HomePage"
import About from "./pages/web_info/About"
import Contact from "./pages/web_info/Contact"

const App = () => {




  return (
    <Routes>
      <Route path="/" element={<RootLayout />} >
        <Route index element={<HomePage />} />
        <Route path="about-us" element={<About />} />
        <Route path="contact-us" element={<Contact />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />


    </Routes>
  )
}
export default App