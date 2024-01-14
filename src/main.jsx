import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import Router from './components/Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>Cargando...</div>}>
      <Router />
    </Suspense>
  </React.StrictMode>
);
