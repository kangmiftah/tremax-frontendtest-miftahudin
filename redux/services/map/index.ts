import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { mapDataType } from "../../../@types/redux/slices/map/mapSlice";

const mapService = createApi({
   baseQuery: fetchBaseQuery({
      baseUrl: "http://localhost:3000/",
   }),
   reducerPath: "mapService",
   extractRehydrationInfo(action, { reducerPath }) {
      if (action.type === HYDRATE) {
         return action.payload[reducerPath];
      }
   },
   tagTypes: ["getMap"],
   endpoints: (builder) => ({
      getAllMap: builder.query<Array<mapDataType>, any>({
         query: () => `data.json`,
      }),
   }),
});

export const { useGetAllMapQuery, useLazyGetAllMapQuery } = mapService;

export const { getAllMap } = mapService.endpoints;

export default mapService;
