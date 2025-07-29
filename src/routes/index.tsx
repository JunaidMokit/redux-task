
import App from "@/App";
import Task from "@/pages/Task";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {

                path: "user",
                element: <User></User>
            },
            {
                path: "task",
                element: <Task></Task>
            }
        ]
    },
]);

export default router;