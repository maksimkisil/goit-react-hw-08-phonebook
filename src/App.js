import React, { useEffect } from 'react';

import AppBar from './Components/Navigation/AppBar';
import HomeView from './Components/views/Homeview';
import LoginView from './Components/views/Loginview';
import RegisterView from './Components/views/Registerview';
import UserView from './Components/views/Usersview';

import s from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import PublicRoute from './Components/Routes/PublicRoute';
import PrivateRoute from './Components/Routes/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, authSelectors } from './redux/auth';

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authActions.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && <div className={s.app}>
      <AppBar />
      
      <Routes>
        <Route exact path="/" element={
              <PublicRoute>
                <HomeView />
              </PublicRoute>
            } />
        <Route exact path="/login" element={
              <PublicRoute restricted redirectTo="/contacts">
                <LoginView />
              </PublicRoute>
            }/>
        <Route exact path="/register" element={
              <PublicRoute restricted>
                <RegisterView />
              </PublicRoute>
            }/>
        <Route exact path="/contacts" element={
              <PrivateRoute redirectTo="/login">
                <UserView />
              </PrivateRoute>
            }/>
      </Routes>
    </div>);    
};
   