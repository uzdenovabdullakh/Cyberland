import React from 'react'
import {Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage';
import SignInUp from './pages/SignInUp';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    //здесь роутинг
    //
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signinup" element={<SignInUp />} />
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </>
  );
}

export default App;
