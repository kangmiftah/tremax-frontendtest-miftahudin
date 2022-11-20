import Image from "next/image";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layoutStateType } from "../../../@types/redux/slices/layouts/layoutSlice";
import { mapStateType } from "../../../@types/redux/slices/map/mapSlice";
import { mapActions } from "../../../redux/slices/map/mapSlice";
import { RootState } from "../../../redux/store";
// 92d72e active
export default function Sidebar<FC>() {
   const layoutState: layoutStateType = useSelector(
      (state: RootState) => state.layout
   );
   const { secondSidebarList } = layoutState;
   const mapState: mapStateType = useSelector((state: RootState) => state.map);
   const { markerSelected } = mapState;
   const disp = useDispatch()

   return (
      <aside>
         <div className="fixed shadow-md -translate-x-full md:translate-x-0 bg-side-color  top-0 w-[151px] h-screen py-0 px-0 overflow-y-auto border-r ease-in-out duration-300">
            <div className=" align-middle text-center pb-3 mb-1 h-[125px] text-white bg-side-active py-[10px]">
               <Image
                  alt="browse"
                  className="mx-auto align-middle"
                  src={"/image/Browse.png"}
                  width={50}
                  height={50}
               ></Image>
               <span className=" text-[15pt]">Browse</span>
            </div>
            <div className=" text-center pb-3 mb-1  py-[10px] h-[125px] border-b-main border-b-2 bg-side text-second">
               <Image
                  alt="browse"
                  className="mx-auto align-middle"
                  src={"/image/Attraction.png"}
                  width={50}
                  height={50}
               ></Image>
               <span className=" text-[15pt]">Sugest Attraction</span>
            </div>
            <div className=" text-center pb-3 mb-1  py-[10px] h-[125px] border-b-main border-b-2 bg-side text-second">
               <Image
                  alt="browse"
                  className="mx-auto align-middle"
                  src={"/image/Video.png"}
                  width={50}
                  height={50}
               ></Image>
               <span className=" text-[15pt]">Videos</span>
            </div>
            <div className=" text-center pb-3 mb-1  py-[10px] h-[125px] border-b-main border-b-2 bg-side text-second">
               <Image
                  alt="browse"
                  className="mx-auto align-middle"
                  src={"/image/Blog.png"}
                  width={50}
                  height={50}
               ></Image>
               <span className=" text-[15pt]">Blog</span>
            </div>
            <div className=" text-center pb-3 mb-1  py-[10px] h-[125px] border-b-main border-b-2 bg-side text-second">
               <Image
                  alt="browse"
                  className="mx-auto align-middle"
                  src={"/image/About.png"}
                  width={50}
                  height={50}
               ></Image>
               <span className=" text-[15pt]">About</span>
            </div>
         </div>
         <div
            className="
                fixed shadow-md 
                -translate-x-full 
                md:translate-x-0 
                bg-main top-0 

                w-[300px] md:ml-[150px] h-screen py-1 px-3 overflow-y-auto border-r ease-in-out duration-300"
         >
            <div className=" text-center pb-3 mb-1 h-[75px]">
               <select className="px-4 py-3 mx-2 mb-10 bg-main decoration-[#8298a0] border-[#242832] after:border-[#242832] focus:boder-[#242832] text-second">
                  <option value={""}>Filter by favourite</option>
               </select>
               <dl>
                  {secondSidebarList.map(({ id, data, name }, i) => (
                     <dt
                        key={i}
                        className={`
                        cursor-pointer
                        text-left
                        px-10 
                        pb-3 mb-1  
                        py-[10px] 
                        bg-side 
                        text-white
                        text-[12pt]
                        ${
                           markerSelected?.id === id
                              ? `
                           bg-[#1c1f27]
                           text-[#7ab22d]`
                              : `
                           hover:bg-[#1c1f27]
                           hover:text-[#7ab22d]`
                        }
                        `}

                        onClick={()=> disp(mapActions.setMakerSelected(data)) }
                     >
                        {name}
                     </dt>
                  ))}
               </dl>
            </div>
         </div>
      </aside>
   );
}
