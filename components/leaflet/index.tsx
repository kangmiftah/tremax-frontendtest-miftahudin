import {
   MapContainer,
   TileLayer,
   Marker,
   Tooltip,
   useMap,
   MapContainerProps
} from "react-leaflet";
import { useEffect, useState, useMemo, useRef } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import {
   mapDataType,
   mapStateType,
} from "../../@types/redux/slices/map/mapSlice";
import style from "./leaflet.module.css";
import { LatLngExpression } from "leaflet";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { mapActions } from "../../redux/slices/map/mapSlice";

function MapProvider({ center, zoom, children }: MapContainerProps) {
   return (
      <MapContainer
         className={`${style.heightMap} ${style.positionMap}`}
         center={center}
         zoom={zoom}
         scrollWheelZoom={false}
      >
         {children}
      </MapContainer>
   );
}

export default function MapLeaflet({ data }: { data: mapDataType[] }) {
   const [centerMap, setCenterMap] = useState<LatLngExpression>({
      lat: 1.28692,
      lng: 103.85457,
   });
   const disp = useDispatch()
   // const [map, setMap] = useState(null);
   // const map = useMap();
   const [zoom, setZoom] = useState<number>(15);

   useEffect(
      function () {
         if (data.length > 0) {
            setCenterMap({ lat: data[0].latitude, lng: data[0].logitude });
            // map.setView({ lat: data[0].latitude, lng: data[0].logitude }, 15);
         }
      },
      [data]
   );
   const mapState: mapStateType = useSelector((state: RootState) => state.map);
   const { markerSelected } = mapState;

   return (
      <MapProvider
         className={`${style.heightMap} ${style.positionMap}`}
         center={centerMap}
         zoom={zoom}
         scrollWheelZoom={false}
      >
         <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
         {data.map(({ id, city, latitude, logitude }, i) => (
            <Marker  eventHandlers={{
               click: ()=>disp(mapActions.setMakerSelected({ id, city, latitude, logitude }))
            }} key={i} position={[latitude, logitude]}>
               <Tooltip permanent={true}
                 
               >
                  <div
                     className={`${
                        markerSelected?.id === id ? "text-3xl" : ""
                     }`}
                  >
                     {city}
                  </div>
               </Tooltip>
            </Marker>
         ))}
      </MapProvider>
   );
}
