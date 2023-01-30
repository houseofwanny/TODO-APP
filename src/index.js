import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/Store/store';


ReactDOM.render(
  <React.StrictMode>
    {newFunction()}
  </React.StrictMode>,
  document.getElementById('root')
);

function newFunction() {
  return <Provider store={store}> {/* the component Provider needs a props store  */}
    <App />
  </Provider>;
}
