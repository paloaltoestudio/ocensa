import React from 'react';
import ReactDOM from 'react-dom/client';
import { HistoryProvider } from './HistoryProvider';
import './index.css';
import App from './App';
import History from './History';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


import { 
  BrowserRouter,
  Routes,
  Route 
} from 'react-router-dom';
import Correct from './correct';
import Incorrect from './incorrect';
import Final from './final';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <HistoryProvider>
    <BrowserRouter basename="/">
      <Routes>
          <Route path='/' element={<App />} />
          <Route path='/historia' element={<History />} />
          <Route path='/correcto' element={<Correct />} />
          <Route path='/incorrecto' element={<Incorrect />} />
          <Route path='/final' element={<Final />} />
      </Routes>
    </BrowserRouter>
    </HistoryProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
