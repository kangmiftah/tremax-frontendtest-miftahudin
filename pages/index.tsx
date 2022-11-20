import { useDispatch } from "react-redux";
import {useEffect } from 'react';
import { mapDataType } from "../@types/redux/slices/map/mapSlice";
import { layoutActions } from "../redux/slices/layouts/layoutSlice";
import { secondSidebarType } from "../@types/redux";
import { wrapper } from "../redux/store";
import mapService, { getAllMap } from "../redux/services/map";
import { AdminLayout } from "../components";
import dynamic from "next/dynamic";
import { mapActions } from "../redux/slices/map/mapSlice";

const MapNoSSR = dynamic(()=>import("../components/leaflet"), {
   ssr: false, suspense: false
})

export default function Home({ data }: { data: mapDataType[] }){
   const disp = useDispatch();
   useEffect(
      function () {
         if (data && data.length > 0) {
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
            disp(mapActions.setMakerSelected(data[0]));
         }
      },
      [data]
   );

   return  <MapNoSSR data={data} />
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
// set Layout admin from my template nextjs with redux-tools in github : https://github.com/kangmiftah/base-nextjs-v12-ts
Home.getLayout = AdminLayout;