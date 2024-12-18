import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    title: '',
    price: '',
    summary: '',
    file: null

  },
  reducers: {
    updateUser: (state, action) => {
      state.title = action.payload.title;   // Updates the name
      state.price = action.payload.price; 
      state.summary = action.payload.summary; 
      state.file = action.payload.file; 
    }
  }
});

export const { updateUser } = userSlice.actions; // Action to dispatch
export default userSlice.reducer; // Reducer to connect to the store
