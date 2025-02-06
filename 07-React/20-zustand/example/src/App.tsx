
import './App.css'
import { useCounterStore } from './model/stores/counterStore'
import CounterButton from './components/counterButton/CounterButton'

function App() {
  const counter = useCounterStore(state => state.count);

  return (
    <>
      <h1>Hi {counter}</h1>
      <CounterButton />
    </>
  )
}

export default App
