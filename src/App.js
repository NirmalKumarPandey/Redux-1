import './App.css';
import { useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';


function App() {
  let inputRef = useRef();
  let dispatch = useDispatch();
  let storeObj = useSelector((store) => {
    return store;
  });
  return (
    <div className="App">
      <form>
        <div>
          <label>Name</label>
          <input placeholder='Please Input Name' ref={inputRef}></input>
        </div>
        <div>
          <button type='button' className='bholuButton' onClick={() => {
            dispatch({ type: "addPolitician", data: inputRef.current.value })
          }}>Add Politician</button>

          <button type='button' className='bholuButton' onClick={() => {
            dispatch({ type: "addActor", data: inputRef.current.value })
          }}>Add Actor</button>

          <button type='button' className='bholuButton' onClick={() => {
            dispatch({ type: "addCricketer", data: inputRef.current.value })
          }}>Add Cricketer</button>
        </div>
      </form>
      <hr></hr>
      <h2>Politicians:{storeObj.politicians.join()}</h2>
      <h2>Actors:{storeObj.actors.join()}</h2>
      <h2>Cricketers:{storeObj.cricketers.join()}</h2>
    </div>
  );
}

export default App;
