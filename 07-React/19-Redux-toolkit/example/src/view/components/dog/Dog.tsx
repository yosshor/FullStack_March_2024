import { useSelector } from 'react-redux'
import { selectDog } from '../../../model/slices/dogSlice'
import { useEffect } from 'react';
import { fetchDogToStore } from './DogVM';

const Dog = () => {

    useEffect(() => {
        fetchDogToStore();
    }, []);

    const dog = useSelector(selectDog);

    return (
        <div>
            <h1>Dog</h1>
            {dog && <img src={dog.message} alt="dog" />}
            <button onClick={fetchDogToStore}>Get New Dog</button>
        </div>
    )
}

export default Dog