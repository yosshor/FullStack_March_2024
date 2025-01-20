import React from 'react';
import { BrowserRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom';
import router from './router';

const App: React.FC = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default App;
