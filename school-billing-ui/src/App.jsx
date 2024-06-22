import Home from "./pages/home/Home";
import Student from "./pages/student/Student";
import Inactive from "./pages/student/inactive/Inactive";
import Single from "./pages/single/Single";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/student",
        element: <Student />,
        index: { element: <Student /> },
        children: [
            {
                path: "inactive",
                element: <Inactive />,
            },
            // {
            //     path: "/student/create",
            //     element: <Create />,
            // },
        ],
    },
    {
        path: "/student/:studentID",
        element: <Single />,
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
