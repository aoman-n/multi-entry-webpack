import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  const token = localStorage.getItem('enfee');

  return (
    <div>
      <div>login時のtoken: {token}</div>
      <div><a href="/login">login page!</a></div>
      <div><Link to="/counter">counter page</Link></div>
    </div>
  );
};

export default App;