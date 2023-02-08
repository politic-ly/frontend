import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './home/Home-Page';
import Explore from './explore/Explore-Page';
import Account from './account/Account';
import News from './news/News-Page';
import Favorites from './favorites/Favorites-Page';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} >
            <Route path="/" element={<Home/>}/>
            <Route path="/explore" element={<Explore/>}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            {/* <Route path="/" element={user?.email ? <Navigate to="/home" /> : <Landing />} />*/}
        </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
