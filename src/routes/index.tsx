

import App from "@/App";
import Check from "@/pages/Check";
import Task from "@/pages/Task";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {

                path: "user",
                element: <User></User>
            },
            {
                path: "task",
                element: <Task></Task>
            },
            {
                path: "check",
                element: <Check></Check>
            }
        ]
    },
]);

export default router;