import React, { FC } from 'react';
import Navbar from './nav';
import Sidebar from './side';
export default function Layout<FC>(page : React.ReactElement) {

    return <>
        <div className='relative min-h-full max-h-full w-height overflow-hidden'>
            <Navbar />
            <Sidebar />
            <div className='
                    md:ml-[450px] 
                    bg-[#f4f6f9] 
                    relative 
                    block  
                    ease-in-out duration-300
                    mt-[75px]
                    overflow-y-auto
                    overflow-x-hidden
                    height-root-content
                '>
              
                <div className='pt-0 px-0 container block flex-1'>

                    {page}
                </div>
            </div>
        </div>
    </>
}