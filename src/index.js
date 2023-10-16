import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import store from './app/store.js';
import { App } from './app/App.js';
import './index.css';


const root = createRoot(document.getElementById('root'));
// Import the store here.
// Pass state and dispatch props to the <App /> component.
const render = () => {

  root.render(
    <StrictMode>
    <App 
      state={store.getState()}
      dispatch={store.dispatch}
    />
    </StrictMode>
    )
  
};

render();

// Subscribe render to the store.
store.subscribe(render);
