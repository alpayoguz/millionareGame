import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import Question from './Components/Question';
import Main from './Layouts/Main/Main';
import App from './App';
import InGameContent from './pages/InGameContent/index';
import store from './app/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <App />
  <Provider store={store}>
    <Main>
      <InGameContent />
    </Main>
  </Provider>


);

