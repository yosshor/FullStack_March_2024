import { useState } from 'react';
import './App.css';
import Food from './view/components/FoodApi/Food';
import GithubUserProfile from './view/components/GithubUserProfile/GithubUserProfile';
import GenerateImages from './view/components/GenerateImages/GenerateImages';

function App() {
  const [view, setView] = useState('github');

  return (
    <div>
      <div>
        <button onClick={() => setView('github')}>Github User Profile</button>
        <button onClick={() => setView('food')}>Food</button>
        <button onClick={() => setView('generateImages')}>Generate Images</button>
      </div>
      {view === 'github' && <GithubUserProfile />}
      {view === 'food' && <Food />}
      {view === 'generateImages' && <GenerateImages />}

    </div>
  );
}

export default App;