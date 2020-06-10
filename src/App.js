import React from 'react';
import './App.css';
import UserCard from './components/UserCard';
import GetUser from './components/GetUser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random User Card</h1>
      </header>
      <main>
        <UserCard />
      </main>
    </div>
  );
}

export default App;
