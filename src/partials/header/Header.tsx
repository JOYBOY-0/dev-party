import { Avatar1 } from '@/assets/avatars'
import {BurgerMenu} from '@/common/burger-menu/BurgerMenu'
import {DropDown, DropItem} from '@/common/drop-down/index'
import { TransitionModal } from '@/common/transition-modal/TransitionModal'
import { PrivateRoutes, PublicRoutes } from '@/guard/routes'
import { ArchiveBoxIcon, ArrowRightOnRectangleIcon, Cog6ToothIcon, UserIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./header.css"

export default function Header() {

  const [open, setOpen] = useState(false);

  return (
    <div className='w-screen fixed top-0 z-50'>
      <div className='w-full mx-auto max-w-[1400px] flex justify-between items-center p-6'>

        <Link to={PublicRoutes.HOME} className="h-full flex items-center" >
          <img src="/logo/logo_sm_color.svg" alt="logo" className='h-[45px] md:hidden my-auto aspect-square' />
          <img src="/logo/logo_md_color.svg" alt="logo" className='h-4 hidden md:flex lg:hidden' />
          <img src="/logo/logo_lg_color.svg" alt="logo" className='h-4 hidden lg:flex' />
        </Link>

        <div className='flex items-center h-full '>
          <div className='hidden lg:flex items-center h-full space-x-6 font-primary mr-20'>
            <NavLink to={PublicRoutes.HOME} 
              className={ ({isActive} : {isActive: boolean}) => isActive ? "text-devPink-600 font-medium underline-" : "text-slate-200 hover:text-white" } >
              Explore
            </NavLink>
            <NavLink to={PrivateRoutes.COLLECTION} 
              className={ ({isActive} : {isActive: boolean}) => isActive ? "text-devBlue-600 font-medium underline" : "text-slate-200 hover:text-white" } >
              Collection
            </NavLink>
            <NavLink to={PrivateRoutes.SUBMIT} 
              className={ ({isActive} : {isActive: boolean}) => isActive ? "text-devYellow-400 font-medium underline decoration-2 underline-offset-4" : "text-slate-200 hover:text-white" } >
              Submit
            </NavLink>
          </div>

          <div className='flex items-center h-full font-primary'>
            <Avatar1 className='h-8'/>
            <DropDown>
              <div className="px-1 py-1 ">
                <DropItem
                  activeClassName="bg-devBlue-600 text-white"
                  inactiveClassName="text-slate-200"
                  >
                    <UserIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    Profile
                </DropItem>
                <DropItem
                  activeClassName="bg-devPink-600 text-white"
                  inactiveClassName="text-slate-200"
                  >
                    <ArchiveBoxIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                    />
                    My collections
                </DropItem>
                <DropItem
                  activeClassName="bg-devYellow-400 text-slate-900"
                  inactiveClassName="text-slate-200"
                  >
                    <Cog6ToothIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                    />
                    Settings
                </DropItem>
              </div>

              <div className="px-1 py-1">
                <DropItem
                    activeClassName="bg-red-500 text-white"
                    inactiveClassName="text-red-400"
                  >
                      <ArrowRightOnRectangleIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                    />
                    Log out
                </DropItem>
              </div>
            </DropDown>
          </div>
        </div>

        <TransitionModal show={open}>
          <div className="flex flex-col items-start justify-between h-full">
          <nav className='flex flex-col h-full space-y-6 font-primary justify-center text-2xl'>
            <NavLink to={PublicRoutes.HOME} 
              className={ ({isActive} : {isActive: boolean}) => isActive ? "text-devPink-600 header-navLink-active" : "header-navLink" } >
              Explore
            </NavLink>
            <NavLink to={PrivateRoutes.COLLECTION} 
              className={ ({isActive} : {isActive: boolean}) => isActive ? "text-devBlue-600 header-navLink-active" : "text-slate-200 hover:text-white" } >
              Collection
            </NavLink>
            <NavLink to={PrivateRoutes.SUBMIT} 
              className={ ({isActive} : {isActive: boolean}) => isActive ? "text-devYellow-400 header-navLink-active" : "text-slate-200 hover:text-white" } >
              Submit
            </NavLink>
          </nav>
          <img src="/logo/logo_lg_color.svg" alt="logo" className='w-1/2 mb-10 mx-auto' />

          </div>
        </TransitionModal>
        
        <BurgerMenu 
          className="lg:hidden z-50" 
          open={open}
          onClick={() => setOpen(!open)}
        />
      </div>
    </div>
  )
}
