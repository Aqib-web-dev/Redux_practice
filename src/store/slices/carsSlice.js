import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    searchTerm: '',
  },
  reducers: {
    changeSearchTerm (state, action) {
      state.searchTerm = action.payload;
    },
    addCar (state, action) {
      //assumption
      // action.payload === {name: 'ab', cost: 140}
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: Math.random(),
      })
    },
    removeCar (state, action) {
      let updatedState = state.cars.filter((car) => car.id !== action.payload);
      state.cars = updatedState;
    }
  }
});

export const carsReducer = carsSlice.reducer;
export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
