import { useState } from "react";
import { useJoke } from "./JokeVM";
import style from './Joke.module.scss';
import JokeModal from "./JokeModal";

const RandomJokes = () => {
  const { jokes, loading, error, handleGetRandomJoke, handleJoke } = useJoke();
  const [newJoke, setNewJoke] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedJoke, setSelectedJoke] = useState<{ joke: string; jokeId: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewJoke(e.target.value);
  };

  const handleAddJoke = () => {
    if (!newJoke.trim()) return;
    handleJoke('add-joke', 'POST', { joke: newJoke });
    setNewJoke('');
  };

  const handleUpdateJokeModal = (joke: string, jokeId: string) => {
    setSelectedJoke({ joke, jokeId });
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedJoke(null);
  };

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
              onClick={() => handleUpdateJokeModal(joke.joke, joke._id)}
              className={`${style.buttons} ${style.buttons__update}`}
            >
              Update
            </button>
          </div>
        ))}
      </div>

      {modalVisible && selectedJoke && (
        <JokeModal
          joke={selectedJoke.joke}
          jokeId={selectedJoke.jokeId}
          onClose={closeModal}
          handleJoke={handleJoke}
        />
      )}
    </div>
  );
};

export default RandomJokes;
