import { createStore } from "redux";
import reducerFunction from "./reducerFunction";

const store = createStore(reducerFunction);

store.subscribe(() => {
    console.log(store.getState());
});

export default store;