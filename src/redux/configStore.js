import { combineReducers, configureStore } from "@reduxjs/toolkit";
import date from "./stores/date";
import photos from "./stores/photos";

const reducer = combineReducers({ date, photos });
const store = configureStore({ reducer });

export default store;
