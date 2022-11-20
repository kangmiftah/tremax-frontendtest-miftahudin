
export declare type secondSidebarType = {
   id: number;
   data: {};
   name: string;
}

export declare interface layoutStateType {
   sidebarOpen : boolean;
   title?: string;
   secondSidebarList: Array<secondSidebarType>;
}