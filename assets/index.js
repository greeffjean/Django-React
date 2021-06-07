import React from 'react';
import ReactDOM from "react-dom";
import App from './App.js'

ReactDOM.render(
    // Our main React application component, which we've imported from another file
  <App />,
  // Gets rendered to the <div> we defined in our Django template using the shared id,
  document.getElementById('root')
);
