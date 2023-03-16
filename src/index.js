import './index.css';
import React from 'react';
import Album from './Album';
import Albums from './Albums';
import Wrapper from './Wrapper';
import Store from './store/store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Footer from './Components/Footer';
import reportWebVitals from './reportWebVitals';
import ToastMessage from './Components/ToastMessage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Header />
      <Wrapper>
        <Routes>
          <Route path='/' element={<Albums />} />
          <Route path='/album' element={<Album />} />
        </Routes>
      </Wrapper>
      <Footer />
      <ToastMessage />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
