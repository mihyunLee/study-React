import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// createAsyncThunk: 비동기 통신으로 API를 사용하여 데이터를 가져올 수 있다.
export const fetchIncrement = createAsyncThunk(
  "counter/fetchIncrement",
  async (value) => {
    const reponse = await axios.put("/counter/increment", { value });
    return reponse.data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: {
    [fetchIncrement.fulfilled]: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
