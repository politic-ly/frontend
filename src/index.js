import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home/Home-Page';
import Explore from './explore/Explore-Page';
import Account from './account/Account';
import News from './news/News-Page';
import Favorites from './favorites/Favorites-Page';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} >
              <Route path="/" element={<Home/>}/>
              <Route path="/explore" element={<Explore/>}/>
              <Route path="/account" element={<Account/>}/>
              <Route path="/news" element={<News/>}/>
              <Route path="/favorites" element={<Favorites/>}/>
            </Route>
          </Routes>
        </BrowserRouter> 
      </React.StrictMode>
    </GoogleOAuthProvider>,
  // <React.StrictMode>
  //    <BrowserRouter>
  //   <Routes>
  //       <Route path="/" element={<App />} >
  //           <Route path="/" element={<Home/>}/>
  //           <Route path="/explore" element={<Explore/>}/>
  //           <Route path="/account" element={<Account/>}/>
  //           <Route path="/news" element={<News/>}/>
  //           <Route path="/favorites" element={<Favorites/>}/>
  //       </Route>
  //   </Routes>
  // </BrowserRouter> 
  // <App/>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
