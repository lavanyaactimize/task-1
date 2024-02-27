import {createStore} from "redux"
import rootReducer from "./reducers/rootreducer";

const Store = createStore(rootReducer);

export default Store;
