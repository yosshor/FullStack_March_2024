import { useSelector } from 'react-redux'
import { selectCount } from '../../../model/slices/counterSlice'

const Component1 = () => {
    const count = useSelector(selectCount);
  return (
    <div>
        <h1>Component 1: {count}</h1>
    </div>
  )
}

export default Component1