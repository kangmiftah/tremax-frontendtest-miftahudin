import React, { FC } from 'react';
// import { layoutActions } from '../../slices/layouts/layoutSlice';
import type { RootState } from '../../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { layoutStateType } from '../../../@types/redux/slices/layouts/layoutSlice';
import { layoutActions } from '../../../redux/slices/layouts/layoutSlice';
import { FaCog, FaQuestionCircle, FaRegTimesCircle } from 'react-icons/fa'
import { AiFillCloseCircle, AiFillQuestionCircle, AiFillSetting} from 'react-icons/ai'

export default function Navbar<FC>() {
    // const toggleSidebar = 
    const layoutState : layoutStateType = useSelector((state: RootState) => state.layout)
    const dispatch = useDispatch();

    return (
        <nav className="fixed z-3 top-0 md:pl-[450px] w-[100%] bg-white shadow-[0px_1px_3px_rgba(0,0,0,0.3)] h-[75px]  ease-in-out duration-300">
            <div className='justify-between items-center md:space-x-10 h-[75px] '>
                <div className=' grid grid-cols-3 h-[75px]  gap-0'>
                    <div className='col-span-2 ml-5 my-5 align-middle'>
                            <h1 className='font-bold text-xl '>TOP-RATED TOURIST ATTRACTION IN SINGAPORE</h1>
                    </div>
                    <div className='mx-9 my-6 max-sm:hidden md:inline'>
                            <AiFillCloseCircle className=' text-icon-color sm:text-2xl md:text-3xl ml-3 float-right' />
                            <AiFillQuestionCircle className=' text-icon-color sm:text-2xl md:text-3xl ml-3 float-right' />
                            <AiFillSetting className=' text-icon-color sm:text-2xl md:text-3xl ml-3 float-right' />
                    </div>
                </div>
            </div>

        </nav>
    )
}