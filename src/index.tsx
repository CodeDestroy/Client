import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';

interface IStore {
  store: Store,
}

const store = new Store();

export const Context = createContext<IStore>({
  store,
})



ReactDOM.render(
    <Context.Provider value={{ store }}>
      <App />
    </Context.Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

