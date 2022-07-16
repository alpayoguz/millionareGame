import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import Question from './components/Question';
import Main from './layouts/main/Main';
import App from './App';
import InGameContent from './pages/ınGameContent/index';
import store from './app/store';
import { Provider } from 'react-redux';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <App />
  <BrowserRouter>
    <Provider store={store}>

      <Main>
        <Routes>
          <Route path='' element={<Home />}/>
          <Route path='inGameContent' element={<InGameContent/>}/>
        </Routes>

      </Main>
    </Provider>
  </BrowserRouter>



);

