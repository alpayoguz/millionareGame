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


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <App />
  <Provider store={store}>
    <Main>
      <Home/>
    </Main>
  </Provider>


);

