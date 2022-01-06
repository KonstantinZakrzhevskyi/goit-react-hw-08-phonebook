import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// import Section from 'components/Section';
// import ContactForm from 'components/ContactForm';
// import Filter from 'components/Filter';
// import ContactList from 'components/ContactList';
// import { getLoading } from 'redux/contacts/contacts-selectors';

import Container from 'components/Container';
import AppBar from 'components/AppBar';
import Loader from 'components/Loader';
import { authOperations } from 'redux/auth';
import './App.css';

const HomePage = lazy(() => import('./views/HomePage'));

const RegisterPage = lazy(() => import('./views/RegisterPage'));

const LoginPage = lazy(() => import('./views/LoginPage'));

const ContactsPage = lazy(() => import('./views/ContactsPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>

      <Toaster position="top-right" />
    </Container>
  );
}

export default App;
