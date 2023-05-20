import React from 'react'
import {Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage';
import SignInUp from './pages/SignInUp';
import Help from './pages/Help';
import NotFoundPage from './pages/NotFoundPage';
import SearchAds from './pages/SearchAds';
import Account from './pages/Account';
import UserAcc from './pages/UserAcc'
import UserExecAcc from './pages/UserExecAcc'
import AddTask from './pages/AddTask'
import PrivateRoute from './utils/router/privateRoute';
import ChooseRole from './pages/ChooseRole';
import { Provider } from 'react-redux';
import store from "./utils/store"
import PrivateRouteForReg from './utils/router/privateRouteForReg';
import PrivateCustomer from './utils/router/privateCustomer';



function App() {

  return (
    <>
    <Provider store={store}>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/account" element={<Account />} />
          </Route>
          <Route element={<PrivateRouteForReg />}>
            <Route path="/chooseyourdestiny" element={<ChooseRole />} /> 
          </Route>
          <Route element={<PrivateCustomer />}>
            <Route path="/addtask" element={<AddTask />} />
          </Route>
          <Route path="/" element={<MainPage />} />
          <Route path="/signinup" element={<SignInUp />} />
          <Route path="/help" element={<Help />} />
          <Route path="/search" element={<SearchAds />} />
          <Route path='id=' element={<UserAcc />} />
          <Route path='/id=exec' element={<UserExecAcc />} />
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
