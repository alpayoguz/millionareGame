import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import Question from './Components/Question';
import Main from './Layouts/Main/Main';
import App from './App';
import InGameContent from './pages/Home/InGameContent';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <App />
  <Main>
     <InGameContent/>
  </Main>
 
);

