import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import AllNews from "../pages/allNews/AllNews";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                children: [

                    {
                        path: "/",
                        element: <AllNews></AllNews>
                    }

                ]
            }

        ]
    },
]);

export default router;