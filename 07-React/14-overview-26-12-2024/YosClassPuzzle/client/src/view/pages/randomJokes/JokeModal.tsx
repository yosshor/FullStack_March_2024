import React, { useState } from "react";
import style from './Joke.module.scss';
import ModalJoke from "../../components/modalJoke/ModalJoke";

interface JokeModalProps {
  joke: string;
  jokeId: string;
  onClose: () => void;
  handleJoke: (action: string, method: string, data: any) => void;
}

const JokeModal: React.FC<JokeModalProps> = ({ joke, jokeId, onClose, handleJoke }) => {
  const [updateJoke, setUpdateJoke] = useState<string>(joke);

  const handleModalInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUpdateJoke(e.target.value);
  };

  const handleUpdateJoke = () => {
    if (!updateJoke.trim()) return;
    handleJoke('update-joke', 'PUT', { joke: updateJoke, id: jokeId });
    onClose();
  };

  const handleDeleteJoke = () => {
    handleJoke('delete-joke', 'DELETE', { _id: jokeId });
    onClose();
  };

  return (
    <ModalJoke onClose={onClose} title="Update Joke">
      <div>
        <textarea
          value={updateJoke}
          className={style.modalInput}
          onChange={handleModalInputChange}
        />
      </div>
      <div className={style.wrapperButtons}>
        <button
          className={style.updateButton}
          onClick={handleUpdateJoke}
        >
          Update
        </button>
        <button
          className={style.deleteButton}
          onClick={handleDeleteJoke}
        >
          Delete
        </button>
      </div>
    </ModalJoke>
  );
};

export default JokeModal;
