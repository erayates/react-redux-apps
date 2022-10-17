import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import { Provider } from 'react-redux';
import {store} from './redux/store'

import Home from './pages/Home';
import Detail from './pages/Detail';
import Quotes from './pages/Quotes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Characters</Link>
            </li>
            <li>
              <Link to="/quotes">Quotes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/char/:char_id' element={<Detail/>} />
          <Route path='/quotes' element={<Quotes/>} />
        </Routes>
      </Router>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
