import { useState } from "react";
import { useJoke } from "./JokeVM";
import style from './Joke.module.scss';
import ModalJoke from "../../components/modalJoke/ModalJoke";
import { get } from "http";

const RandomJokes = () => {
  const { joke, jokes, loading, error, handleGetRandomJoke, handleGetAllJokes, handleJoke } = useJoke();
  const [newJoke, setNewJoke] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalJoke, setModalJoke] = useState<JSX.Element | null>(null);

  const handleAddJoke = () => {
    if (!newJoke.trim()) return;
    handleJoke('add-joke', 'POST', { joke: newJoke });
    setNewJoke('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewJoke(e.target.value);
  };

  const handleModalClose = () => setModalVisible(false);

  const handleUpdateJoke = (joke: string, jokeId: string) => {
    setModalVisible(true);
    console.log(`Update joke with ID: ${jokeId} ${joke}`);
    setModalJoke(getModal(joke));
  };

  const getModal = (joke:string) => <ModalJoke onClose={handleModalClose}>
    <div>
      <h2>{joke}</h2>

    </div>
  </ModalJoke>;


  return (
    <div>
      <h1 className={style.title}>Jokes</h1>

      <div className={style.addJoke}>
        <input
          type="text"
          className={style.addJoke__input}
          placeholder="Insert New Joke"
          value={newJoke}
          onChange={handleInputChange}
        />
        <button
          onClick={handleAddJoke}
          className={`${style.buttons} ${style.buttons__add}`}
        >
          Add
        </button>
        <button
          onClick={handleGetRandomJoke}
          className={`${style.buttons} ${style.buttons__new}`}
        >
          New
        </button>
      </div>

      {error && <p className={style.error}>{error}</p>}

      <div className={style.jokeList}>
        {jokes?.map((joke: any) => (
          <div key={joke._id} className={style.jokeWrapper}>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <p className={style.joke}>
                {joke.joke || 'Joke Not Found'}
              </p>
            )}
            <button
              onClick={() => handleUpdateJoke(joke.joke, joke._id)}
              className={`${style.buttons} ${style.buttons__update}`}
            >
              Update
            </button>
          </div>
        ))}
      </div>

      {modalVisible && modalJoke}
    </div>
  );
};

export default RandomJokes;
