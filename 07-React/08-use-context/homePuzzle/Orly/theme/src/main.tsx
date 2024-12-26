import React from 'react';
import { createRoot } from 'react-dom/client';
import SetTheme from './component/SetTheme';

import './component/SetTheme.scss';
const App = () => (
  <div>
    <SetTheme />
  </div>
);

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
