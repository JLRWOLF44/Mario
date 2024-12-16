import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path:"",
                element: <Home />,

            },
            {
                path:"About",
                element: <About />,
            },
        ]
    }
]);

export default router;
