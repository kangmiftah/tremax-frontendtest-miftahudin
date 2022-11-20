
export declare type mapDataType = {
   id: number,
   city: string;
   latitude: number;
   logitude:  number;
}

export declare interface mapStateType {
   mapData : Array<mapDataType>;
   markerSelected? : mapDataType;
   sidebarOpen : boolean = false;
} 