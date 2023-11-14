
import { createBrowserRouter } from "react-router-dom"
import Register from "../pages/Register"


export const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Register/>,
    },
])
