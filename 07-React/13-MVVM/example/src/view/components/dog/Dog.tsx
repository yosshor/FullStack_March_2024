import styles from './Dog.module.scss';
import { useDog } from './DogVM';

const Dog = () => {

    const { dog, error, loading, handleGetDog } = useDog(); //hook

    return (
        <div className={styles.dog}>Dog
            {loading?<span>Loading...</span>:<img src={dog?.message} alt="" />}
            {error && <div>{error}</div>}
            <button onClick={handleGetDog}>Reload image</button>
        </div>
    )
}

export default Dog