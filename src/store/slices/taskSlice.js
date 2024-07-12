import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      return [
        ...state,
        {
          id: state.length + 1,
          title: action.payload.title,
          desc: action.payload.desc,
        },
      ];
    },
  },
});

export default taskSlice;
export const taskActions = taskSlice.actions;
