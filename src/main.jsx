import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx'
import TrueFalseContext from './components/context/TrueFalseContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <TrueFalseContext>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </BrowserRouter>
  </TrueFalseContext>
)
