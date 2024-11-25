import { createBrowserRouter } from "react-router-dom";
import Page1 from "./view/page1/Page1";
import Page2 from "./view/page2/Page2";
import './App.css'
import Page3 from "./view/page3/Page3";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Page1 />,
      },
      {
        path: "/2",
        element: <Page2 />,
      },
      {
        path: "/3",
        element: <Page3 />,
      }
  ]);