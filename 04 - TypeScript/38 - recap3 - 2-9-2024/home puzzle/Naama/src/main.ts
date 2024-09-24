import { heros } from "./model/superHero";
import { renderHeros } from "./view/renderHeroes";
import './style.scss';
import { renderAddBtn } from "./view/renderAdding";

renderAddBtn();
renderHeros(heros);