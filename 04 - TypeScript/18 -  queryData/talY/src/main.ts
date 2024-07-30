import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { actors } from './model/actorsModel.ts'
import { getActorMovies } from './controllers/actorsCont.ts'
import { movies } from './model/movieModel.ts'
import { getMovieActors } from './controllers/movieCont.ts'



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

const brad = actors.find(actor => actor.id === "2")
if (brad)
  console.log(getActorMovies(brad, movies));

//show the actors playing in the movie mission impossible

const missionImpossible = movies.find(movie => movie.id === "1")
if (missionImpossible)
 console.log(getMovieActors(missionImpossible, actors));

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
