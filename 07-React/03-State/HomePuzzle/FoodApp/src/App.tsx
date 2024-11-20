import { useState } from 'react'
import './App.css'
import Food from './view/components/FoodApi/Food'
import GithubUserProfile from './view/components/GithubUserProfile/GithubUserProfile'

function App() {
  return (
    <>
      <GithubUserProfile />
      <Food />
    </>
  )
}

export default App
