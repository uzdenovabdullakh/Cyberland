import React from 'react'
import {Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage';
import SignInUp from './pages/SignInUp';
import Help from './pages/Help';
import NotFoundPage from './pages/NotFoundPage';
import SearchAds from './pages/SearchAds';
import Account from './pages/Account';
import Context from './utils/js/Context';
import PrivateRoute from './utils/router/privateRoute';




function App() {

  const [buttons, setButtons]=React.useState([])

  function removeFilter(id){
    setButtons(buttons.filter(button=>button.id!==id))
  }
  
  return (
    <>
    <Context.Provider value={{removeFilter}}>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/account" element={<Account />} />
        </Route>
        <Route path="/" element={<MainPage />} />
        <Route path="/signinup" element={<SignInUp />} />
        <Route path="/help" element={<Help />} />
        <Route path="/search" element={<SearchAds />} />
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
      </Context.Provider>
    </>
  );
}

export default App;
