import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './components/counter';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Counter />
    </React.StrictMode>
);