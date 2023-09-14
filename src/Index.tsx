import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import './Custom.scss';
//import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import intialReducer from './reducer';
import proposalSaga from './sagas';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/tooltip';
const proposalMiddleWare = createSagaMiddleware();
const rootReducer = combineReducers({ intialReducer });
const store = createStore(rootReducer, applyMiddleware(proposalMiddleWare));
proposalMiddleWare.run(proposalSaga);
const rootNode = document.getElementById('root');
if (rootNode)
  ReactDOM.createRoot(rootNode).render(<Provider store={store}>
    <App />
  </Provider>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
