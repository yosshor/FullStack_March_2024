import { useState } from "react";
import { useJoke } from "./JokeVM";
import style from './Joke.module.scss'


const RandomJokes = () => {
  const { joke, loading, error, handleGetJoke, handleJoke } = useJoke()
  const [addJoke, setAddJoke] = useState<any>()
  const [input, setInput] = useState<string>('')
  if (joke.joke === null || joke === null) {
    joke.joke = 'Joke Not Found';
  }
  function handleAddJokeNew(e: React.ChangeEvent<HTMLInputElement>) {
    const joke = e.target.value;
    if (!joke || joke.length === 0) return
    setAddJoke(joke);
    setInput(joke)
  }

  function handleAddJoke() {
    console.log(addJoke.length, addJoke)
    if (!addJoke || addJoke.length === 0) return
    handleJoke('add-joke', 'POST', { joke: addJoke })
    setInput('')
    setAddJoke('');

  }
  return (
    <div>

      <h1 className={style.title}>Jokes</h1>
      <div className={style.addJoke}>
        <input type="text" name='joke'
          className={style.addJoke__input}
          placeholder='Insert New Joke'
          onChange={(e) => handleAddJokeNew(e)}
          value={input} />
        <button
          onClick={handleAddJoke}
          className={`${style.buttons} ${style.buttons__add}`}>Add</button>
        <button onClick={handleGetJoke}
          className={`${style.buttons} ${style.buttons__new}`}>New</button>
      </div>
      <div className={style.jokeWrapper}>
        {loading ? <p>Loading...</p> : <p className={style.joke}>{joke.joke !== null ? joke.joke : 'Joke Not Found'}</p>}

        <p>{error && <span>{error}</span>}</p>
        <button id={joke._id}
          onClick={() => handleJoke('delete-joke', 'DELETE', { _id: joke._id })}
          className={`${style.buttons} ${style.buttons__delete}`}>Delete</button>
      </div>
    </div>
  )
}

export default RandomJokes