import React from 'react'
import { FC } from 'react';

interface Props{
    setNumber:(number :any)=>void
}


const Input:FC<Props> = ({setNumber}) => {
    function handleChange(e :any){
        const {valueAsNumber} = e.target;
        setNumber(valueAsNumber);
    }
    
  return (
    <div><input type="number" name='input'  onChange={handleChange}/></div>
  )
}

export default Input