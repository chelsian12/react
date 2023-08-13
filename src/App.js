import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import Sample from "./pages/Sample"
import NotFound from "./pages/NotFound"
import { RootLayout } from "./components/RootLayout"

const App = () => {




  return (
    <Routes>
      <Route path="/" element={<RootLayout />} >
      <Route path="sample_page" element={<Sample />} />
    
      </Route>
      <Route path="*" element={<NotFound />} />


    </Routes>
  )
}
export default App