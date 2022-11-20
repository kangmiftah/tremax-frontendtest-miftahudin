import {  Action, AnyAction, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { exampleStateType } from "../../../@types/redux/slices/example/exampleSlices";

const initialState: exampleStateType = {
   data: [],
   count: 1,
   errorMsg: "",
   isError: false,
};
interface RejectedAction extends Action {
   error: Error;
}
function isRejectedAction(action: AnyAction): action is RejectedAction {
   return action.type.endsWith("rejected");
}
const exampleSlices = createSlice({
   name: "example",
   initialState,
   reducers: {
      setData: (state, { payload = [] }) => {
         return {
            ...state,
            data: payload,
         };
      },
   },
   extraReducers(builder) {},
});

export const exampleActions = exampleSlices.actions;
export default exampleSlices.reducer;
