
import { useCounterStore } from '../../model/stores/counterStore'

const CounterButton = () => {
    const increase= useCounterStore(state => state.increasePopulation)
  return (
      <button onClick={increase}>Add</button>
  )
}

export default CounterButton