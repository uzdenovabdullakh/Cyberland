import React from 'react'
import {Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage';
import SignInUp from './pages/SignInUp';
import Help from './pages/Help';
import NotFoundPage from './pages/NotFoundPage';
import SearchAds from './pages/SearchAds';
import Account from './pages/Account';
import PrivateRoute from './utils/router/privateRoute';
import ChooseRole from './pages/ChooseRole';
import { Provider } from 'react-redux';
import store from "./utils/store"



function App() {

  return (
    <>
    <Provider store={store}>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/account" element={<Account />} />
            {/*только тут после регистрации чтобы только после регистрации можно было переходить на него */}
            <Route path="/chooseyourdestiny" element={<ChooseRole />} /> 
          </Route>
          <Route path="/" element={<MainPage />} />
          <Route path="/signinup" element={<SignInUp />} />
          <Route path="/help" element={<Help />} />
          <Route path="/search" element={<SearchAds />} />
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
