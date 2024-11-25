import { createBrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./view/components/home/Home";
import ErrorPage from "./view/components/error-page/ErrorPage";
import MorningMenu from "./view/components/morning/MorningMenu";
import BrunchMenu from "./view/components/brunch/BrunchMenu";
import EveningMenu from "./view/components/evening/EveningMenu";
import Steak from "./view/components/food/evening/steak/Steak";
import Pasta from "./view/components/food/evening/pasta/Pasta";
import Salmon from "./view/components/food/evening/salmon/Salmon";
import Chicken from "./view/components/food/evening/chicken/Chicken";
import Soup from "./view/components/food/evening/soup/Soup";
import Dessert from "./view/components/food/evening/dessert/Dessert";
import AvocadoToast from "./view/components/food/brunch/avocado-toast/AvocadoToast";
import FrenchToast from "./view/components/food/brunch/french-toast/FrenchToast";
import Salad from "./view/components/food/brunch/salad/Salad";
import Shawarma from "./view/components/food/brunch/shawarma/Shawarma";
import SmokedMeat from "./view/components/food/brunch/smoked-meat/SmokedMeat";
import BeefAsado from "./view/components/food/brunch/beef-asado/BeefAsado";
import Pancakes from "./view/components/food/morning/pancakes/Pancakes";
import Omelette from "./view/components/food/morning/omelette/Omelette";
import Yogurt from "./view/components/food/morning/yogurt/Yogurt";
import FruitSalad from "./view/components/food/morning/fruit-salad/FruitSalad";
import PotatoSalad from "./view/components/food/morning/potato-salad/PotatoSalad";
import RoastedEggplant from "./view/components/food/morning/roasted-eggplant/RoastedEggplant";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "morning-menu",
        element: <MorningMenu />,
        children: [
          {
            path: "Pancakes",
            element: <Pancakes food="Pancakes" />,
          },
          {
            path: "Omelette",
            element: <Omelette food="Omelette" />,
          },
          {
            path: "Yogurt",
            element: <Yogurt food="Yogurt" />,
          }, 
          {
            path: "FruitSalad",
            element: <FruitSalad food="Fruit" />,
          }, 
          {
            path: "PotatoSalad",
            element: <PotatoSalad food="Salad" />,
          },
          {
            path: "RoastedEggplant",
            element: <RoastedEggplant food="Roasted Eggplant" />,
          },

          

        ],
      },
      {
        path: "brunch-menu",
        element: <BrunchMenu />,
        children: [
          {
            path: "AvocadoToast",
            element: <AvocadoToast food="Avocado" />,
          },
          {
            path: "FrenchToast",
            element: <FrenchToast food="French" />,
          },
          {
            path: "Shawarma",
            element: <Shawarma food="Shawarma" />,
          },
          {
            path: "SmokedMeat",
            element: <SmokedMeat food="Smoked Meat" />,
          },
          {
            path: "Salad",
            element: <Salad food="Salad" />,
          },
          {
            path: "BeefAsado",
            element: <BeefAsado food="Beef Asado" />,
          },

        ],
      },
      {
        path: "evening-menu",
        element: <EveningMenu />,
        children: [
          {
            path: "Steak",
            element: <Steak food="Steak" />,
          },
          {
            path: "Pasta",
            element: <Pasta food="Pasta" />,
          },
          {
            path: "Salmon",
            element: <Salmon food="Salmon" />,
          },
          {
            path: "Chicken",
            element: <Chicken food="Chicken" />,
          },
          {
            path: "Soup",
            element: <Soup food="Soup" />,
          },
          {
            path: "Dessert",
            element: <Dessert food="Chocolate Gateau" />,
          },

        ],
      },
    ],
  },
]);