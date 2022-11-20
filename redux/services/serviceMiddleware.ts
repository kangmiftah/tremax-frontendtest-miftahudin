import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import exampleService from "./examples";
import mapService from "./map";
import testService from "./test";

export default (getDefaultMiddleware: CurriedGetDefaultMiddleware) => 
   getDefaultMiddleware()
   .concat(
      exampleService.middleware,
      testService.middleware,
      mapService.middleware
   )