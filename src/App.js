import { Route, Routes } from "react-router"
import Sample from "./pages/Sample"
import NotFound from "./pages/NotFound"
import { RootLayout } from "./components/RootLayout"
import HomePage from "./pages/HomePage"

const App = () => {




  return (
    <Routes>
      <Route path="/" element={<RootLayout />} >
        <Route index element={<HomePage/>}/>
      <Route path="sample_page" element={<Sample />} />
    
      </Route>
      <Route path="*" element={<NotFound />} />


    </Routes>
  )
}
export default App