import React from 'react';
import Users from './Components/Users/Users';
import './App.css'

const userPromise = fetch("http://localhost:3000/users").then(res => res.json());

const App = () => {
   return (
      <div>
         <h1>Client side</h1>
         <Users userPromise = {userPromise}></Users>
      </div>
   );
};

export default App;