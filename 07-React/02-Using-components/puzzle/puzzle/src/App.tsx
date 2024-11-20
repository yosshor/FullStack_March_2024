import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './view/components/header/Header'
import ChessBoard from './view/components/chessBoard/ChessBoard'

function App() {

  return (
    <>
    <Header />
    <ChessBoard />
    </>
  )
}

export default App
