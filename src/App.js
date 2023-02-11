import React from 'react'
import {Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage';
import SignInUp from './pages/SignInUp';

function App() {
  return (
    //здесь роутинг
    //
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signinup" element={<SignInUp />} />
        {/*<Route path="*" element={<NotFound404 />}/> */}
      </Routes>
    </>
  );
}

export default App;
