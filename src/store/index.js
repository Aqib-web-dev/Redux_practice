import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, changeSearchTerm, addCar, removeCar } from "./slices/carsSlice";
import {formReducer, changeName, changeCost} from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    formInputs: formReducer,
  }
});

export { 
  store, 
  changeSearchTerm, 
  addCar, removeCar, 
  changeName, 
  changeCost
};