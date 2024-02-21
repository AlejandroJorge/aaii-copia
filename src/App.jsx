import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import { Layout } from 'components/layouts';

import {
  HomePage,
  ConocenosPage,
  LogInPage,
  SignUpPage,
  CreateProfilePage,
} from './components/pages';

import './App.scss';
import 'swiper/css';

const App = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/conocenos" element={<ConocenosPage />} />
          <Route path="/auth/login" element={<LogInPage/>}/>
          <Route path="/auth/signup" element={<SignUpPage/>}/>
          <Route path="/auth/createProfile" element={<CreateProfilePage/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
