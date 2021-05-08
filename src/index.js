import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import {myReducer} from "./reducer/myReducer";
import thunk from "redux-thunk";
import {reactReduxFirebase, getFirebase} from "react-redux-firebase";
import {reduxFirestore, getFirestore} from "redux-firestore";
import firebaseApp from './firebase/firebaseConfig';



const store = createStore(
  myReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    window.devToolsExtension? window.devToolsExtension():(f)=>f,
    reactReduxFirebase(firebaseApp),
    reduxFirestore(firebaseApp)
    )
  );



ReactDOM.render(
  <Provider store = {store}>
    <React.Fragment>
      <App />
    </React.Fragment>
  </Provider>
  ,
  document.getElementById('root')
);
