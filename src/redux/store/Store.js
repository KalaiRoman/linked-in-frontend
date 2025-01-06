import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "../actions";
const Store=configureStore({
    reducer:rootReducer
});
export default Store;