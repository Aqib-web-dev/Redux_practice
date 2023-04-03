import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    carCost: 0,
    searchTerm: '',
  },
  reducers: {
    searchCar (state, action) {
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
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    }
  }
});

export const carsReducer = carsSlice.reducer;
export const { searchCar, addCar, removeCar } = carsSlice.actions;
