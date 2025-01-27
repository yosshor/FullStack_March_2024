
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../../model/slices/counterSlice';
import { FC } from 'react';


interface Props {
    type: "increment" | "decrement"
}

const CounterButton: FC<Props> = ({ type }) => {
    const dispatch = useDispatch();
    //abstraction --> harder to maintain
    //Easy API

    if (type === "increment") {
        function handelAdd() {
            dispatch(increment());
        }


        return (
            <button onClick={handelAdd}>Increment</button>
        )
    } else if (type === "decrement") {
        function handelAdd() {
            dispatch(decrement());
        }

        return (
            <button onClick={handelAdd}>Decrement</button>
        )
    }

    return null;
}

export default CounterButton