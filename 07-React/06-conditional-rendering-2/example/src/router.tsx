import { createBrowserRouter } from "react-router-dom";
import Page1 from "./view/page1/Page1";
import Page2 from "./view/page2/Page2";
import ErrorPage from "./view/errorPage/ErrorPage";
import ElementA from "./view/components/elementA/ElementA";
import ElementB from "./view/components/elementB/ElementB";
import Burgers from "./view/pages/burgers/Burgers";
import PresentBurger from "./view/pages/burgers/presentBurger/PresentBurger";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1 />,
    errorElement:<ErrorPage />
  },
  {
    path: "/page2",
    element:<Page2 />,
    errorElement:<ErrorPage />,
    children:[
        {
            element:<div>Start</div>,
            index:true
        },
        {
            element:<ElementA />,
            path:"element-a"
        },
        {
            element:<ElementB />,
            path:"element-b"
        }

    ]
  },
  {
    path:"/burgers", // /burgers/3
    element:<Burgers />,
    errorElement:<ErrorPage />,
    children:[
        {
            element:<div>Start</div>,
            index:true
        },
        {
            element:<PresentBurger />,
            path:":burgerId"
        }
    ]
  }
]);
