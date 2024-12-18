import { Outlet } from "react-router-dom";
import Header from "./components/globals/Header";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
}

export default App;
