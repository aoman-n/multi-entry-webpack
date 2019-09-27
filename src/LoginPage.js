import React from 'react';

const LoginPage = () => {
  const login = () => {
    localStorage.removeItem('enfee');
    localStorage.setItem('enfee', 'login_token');

    location.href = '/';
  }

  return (
    <div>
      <button type="button" onClick={login}>loginする🐬</button>
    </div>
  );
};

export default LoginPage;