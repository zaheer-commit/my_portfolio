
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Getintouch from "./pages/Getintouch/Getintouch";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "getintouch",
          element: <Getintouch />,
        },
      ],
    },
  ],
  {
    basename: "/my_portfolio",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;