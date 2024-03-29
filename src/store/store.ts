import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducers from "../reducers/rootReducer";

const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(thunk))
  );
  
  export type RootState = ReturnType<typeof rootReducers>;
  
  export default store;