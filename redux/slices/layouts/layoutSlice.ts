import { Action, AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { layoutStateType, secondSidebarType } from "../../../@types/redux/slices/layouts/layoutSlice";
import { HYDRATE } from "next-redux-wrapper";
const initialState: layoutStateType = {
   sidebarOpen: false,
   title: "Aran Ui",
   secondSidebarList: []
};
interface RejectedAction extends Action {
   error: Error;
}
function isRejectedAction(action: AnyAction): action is RejectedAction {
   return action.type.endsWith("rejected");
}
const layoutSlice = createSlice({
   name: "layout",
   initialState,
   reducers: {
      toggleSidebar: (state: layoutStateType) => {
         return {
            ...state,
            sidebarOpen: !state.sidebarOpen,
         };
      },
      setSidebarList: (state: layoutStateType, action : PayloadAction<Array<secondSidebarType>>) =>{

         return {
         ...state,
         secondSidebarList: action.payload
         }
      }
   },
   extraReducers(builder) {
      builder
         .addMatcher(
            isRejectedAction,
            // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
            (state, action) => {}
         )
         // and provide a default case if no other handlers matched
         .addDefaultCase((state, action) => {});
   },
});

export const layoutActions = layoutSlice.actions;
export default layoutSlice.reducer;
