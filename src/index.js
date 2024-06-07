import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import { Provider } from "react-redux";


let initialStore = {
  actors: [],
  politicians: [],
  cricketers: [],
}
let reducer = (updatedStore = initialStore, dispatchedObj) => {
  console.log("Inside Reducer");
  console.log(dispatchedObj);
  if (dispatchedObj.type === "addPolitician") {
    return { ...updatedStore, politicians: updatedStore.politicians.concat([dispatchedObj.data]) };
  } else if (dispatchedObj.type === "addActor") {
    return { ...updatedStore, actors: updatedStore.actors.concat([dispatchedObj.data]) }
  }
  else if (dispatchedObj.type === "addCricketer") {
    return { ...updatedStore, cricketers: updatedStore.cricketers.concat([dispatchedObj.data]) };

  }
  return updatedStore;
};
let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
