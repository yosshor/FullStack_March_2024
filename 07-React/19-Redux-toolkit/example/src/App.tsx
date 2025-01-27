
import './App.css'
import Component1 from './view/components/component1/Component1'
import Component2 from './view/components/component2/Component2'
import CounterButton from './view/components/addButton/CounterButton';
import Dog from './view/components/dog/Dog';

function App() {


  return (
    <>
      <div>
       <Component1 />
       <Component2 />
       <CounterButton type={"increment"} />
       </div>
       <Dog />
    </>
  )
}

export default App
