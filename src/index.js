// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// We only need to define 'root' once
const root = ReactDOM.createRoot(document.getElementById('root'));

// We only call render once
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
