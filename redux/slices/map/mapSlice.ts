import { Action, AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { layoutStateType } from "../../../@types/redux/slices/layouts/layoutSlice";
import { HYDRATE } from "next-redux-wrapper";
import { mapDataType, mapStateType } from "../../../@types/redux/slices/map/mapSlice";
const initialState: mapStateType = {
   mapData : [],
   sidebarOpen: false,
};
interface RejectedAction extends Action {
   error: Error;
}
function isRejectedAction(action: AnyAction): action is RejectedAction {
   return action.type.endsWith("rejected");
}
const mapSlice = createSlice({
   name: "map",
   initialState,
   reducers: {
      toggleSidebar: (state) => {
         return {
            ...state,
            sidebarOpen: !state.sidebarOpen,
         };
      },
      setMakerSelected : (state: mapStateType, action: PayloadAction<mapDataType>) => ({
         ...state,
         markerSelected: action.payload
      })
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

export const mapActions = mapSlice.actions;
export default mapSlice.reducer;
