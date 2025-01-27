import { useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../../model/slices/counterSlice';
import { useState } from 'react';
import CounterButton from '../addButton/CounterButton';

const Component2 = () => {
    const [number, setNumber] = useState(0);
    const dispatch = useDispatch();

    function handleChange(event: any) {
        setNumber(event.target.valueAsNumber);
    }

    function handleAddByNumber() {
        dispatch(incrementByAmount(number));
    }

    return (
        <div>
            <h1>Component 2</h1>
            <CounterButton type={"increment"} />
            <CounterButton type={"decrement"} />
            <input type="number" onChange={handleChange} />
            <button onClick={handleAddByNumber}>Add By Number</button>
            <p>{number}</p>
        </div>
    )
}

export default Component2