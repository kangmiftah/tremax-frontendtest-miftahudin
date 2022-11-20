import { AdminLayout } from "../components";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useEffect, useRef, useState, ReactElement } from "react";
import { wrapper } from "../redux/store";
import mapService, { getAllMap } from "../redux/services/map";
import { mapActions } from "../redux/slices/map/mapSlice";
import { layoutActions } from "../redux/slices/layouts/layoutSlice";
import { secondSidebarType } from "../@types/redux";
import { mapDataType } from "../@types/redux/slices/map/mapSlice";
import { useDispatch } from "react-redux";

function MyMapComponent({
   center,
   zoom,
}: {
   center: google.maps.LatLngLiteral;
   zoom: number;
}) {
   const ref = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (ref.current) {
         new window.google.maps.Map(ref.current, {
            center,
            zoom,
         });
      }
   });

   return <div ref={ref} id="map" style={{ position: "inherit" }} />;
}
export default function Home({ data }: { data: mapDataType[] }) {
   const disp = useDispatch();
   useEffect(
      function () {
         if (data) {
            let dataSidebar: Array<secondSidebarType> = (data || []).map(
               (da, i): secondSidebarType => ({
                  id: da.id,
                  name: da.city,
                  data: {
                     ...da,
                  },
               })
            );
            disp(layoutActions.setSidebarList(dataSidebar));
         }
      },
      [data]
   );
   const ref = useRef<HTMLDivElement>(null);
   const [map, setMap] = useState<google.maps.Map>();
   const center: google.maps.LatLngLiteral = { lat: -34.397, lng: 150.644 };
   const zoom: number = 4;
   const render = (status: Status): ReactElement => {
      if (status === Status.FAILURE) return <h1>Error</h1>;
      return <h1>Loading</h1>;
   };
   useEffect(() => {
      if (ref.current && !map) {
         setMap(new window.google.maps.Map(ref.current, {}));
      }
   }, [ref, map]);
   return (
      <>
         <Wrapper
            apiKey={"AIzaSyCBwdQHCAp3zwCbUecTF3RktfP_M774pqA"}
            render={render}
         >
            <MyMapComponent center={center} zoom={zoom} />
         </Wrapper>
      </>
   );
}

export const getServerSideProps = wrapper.getServerSideProps(
   (store) => async () => {
      store.dispatch(getAllMap.initiate(undefined));
      await Promise.all(
         store.dispatch(mapService.util.getRunningQueriesThunk())
      );

      const { data } = getAllMap.select(undefined)(store.getState());
      return {
         props: {
            data,
         },
      };
   }
);
// set Layout
Home.getLayout = AdminLayout;
