import { useState } from 'react';
import './App.css';
import Food from './view/components/FoodApi/Food';
import GithubUserProfile from './view/components/GithubUserProfile/GithubUserProfile';

function App() {
  const [view, setView] = useState('github');

  return (
    <div>
      <div>
        <button onClick={() => setView('github')}>Github User Profile</button>
        <button onClick={() => setView('food')}>Food</button>
      </div>
      {view === 'github' && <GithubUserProfile />}
      {view === 'food' && <Food />}
    </div>
  );
}

export default App;