import React from 'react';
import logo from './logo.svg';
import './App.css';
import Application from './components/Application';
import  { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { createStore } from 'redux';

const store = createStore(rootReducer);

let unsubscribe = store.subscribe(() => 
console.log(store.getState())
);


function App() {
  return (
    <Provider store={store}>
      <Application/>
    </Provider>
  );
}

export default App;
