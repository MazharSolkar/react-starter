import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
