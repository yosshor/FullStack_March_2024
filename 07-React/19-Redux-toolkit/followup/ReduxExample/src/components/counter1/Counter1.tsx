import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, selectCounterValue } from '../../model/slices/counter/counterSlice'

const Counter1 = () => {
  const dispatch = useDispatch();
  const [inputNum, setInputNum] = useState(0)


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(parseInt(e.target.value))
    setInputNum(e.target.value === undefined || e.target.value === '' ? parseInt('0') : parseInt(e.target.value))
  }

  return (
    <>

      <div style={{ padding: '20px' }}>Counter1</div>
      <div className="counter-wrapper">
        <div className="counter">
          <input type="number" onChange={handleInputChange} />
          <button style={{ backgroundColor: 'lightgreen', color: 'black', fontSize: '20px', }}
            onClick={() => dispatch(decrement())}>-</button>
          <span style={{ padding: '10px' }}>{useSelector(selectCounterValue)}</span>
          <button style={{ backgroundColor: 'lightblue', color: 'black', fontSize: '20px', }}
            onClick={() => dispatch(increment())}> +</button>

          <button style={{ backgroundColor: 'lightblue', color: 'black', fontSize: '20px', }}
            onClick={() => dispatch(incrementByAmount(inputNum))}> +{inputNum}</button>
        </div>
      </div>
    </>
  )
}

export default Counter1