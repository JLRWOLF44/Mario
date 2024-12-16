import { Outlet } from "react-router-dom"
import Header from "./components/globals/Header"


function App() {
  

  return (
    <>
      <Header />

      <Outlet />
     
    </>
  )
}

export default App
