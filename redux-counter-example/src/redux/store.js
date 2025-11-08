import { createStore, combineReducers } from "redux";
import counterReducer from "./counterReducer";

 const rootReducer = combineReducers({
    counter: counterReducer,
 });

  const  store = createStore(
    rootReducer,
    window._REDUX_DEVTOOLS_EXTENSION_ && Window._REDUX_DEVTOOLS_EXTENSION_()
  );
   export default store;