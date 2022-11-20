import exampleService from './examples';
import mapService from './map';
import testService from './test';

export default {
   [exampleService.reducerPath] : exampleService.reducer,
   [testService.reducerPath] : testService.reducer,
   [mapService.reducerPath] : mapService.reducer
}