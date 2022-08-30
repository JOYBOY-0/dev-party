import { Avatar1 } from '@/assets/avatars'
import {DropDown, DropItem} from '@/common/drop-down/index'
import { PrivateRoutes, PublicRoutes } from '@/guard/routes'
import { ArchiveBoxIcon, ArrowRightOnRectangleIcon, Cog6ToothIcon, UserIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='w-screen fixed top-0'>
      <div className='w-full mx-auto max-w-[1400px] flex justify-between items-center p-6'>

        <Link to={PrivateRoutes.HOME} className="h-full flex items-center" >
        <img src="/logo/logo_lg_color.svg" alt="logo" className='h-4' />
        </Link>

        <div className='flex items-center h-full '>
          <div className='flex items-center h-full space-x-6 font-primary mr-20'>
            <NavLink to={PrivateRoutes.HOME} 
              className={ ({isActive} : {isActive: boolean}) => isActive ? "text-devPink-600 font-medium" : "text-slate-200 hover:text-white" } >
              Explore
            </NavLink>
            <NavLink to={PrivateRoutes.COLLECTION} 
              className={ ({isActive} : {isActive: boolean}) => isActive ? "text-devBlue-600 font-medium" : "text-slate-200 hover:text-white" } >
              Collection
            </NavLink>
            <NavLink to={PrivateRoutes.SUBMIT} 
              className={ ({isActive} : {isActive: boolean}) => isActive ? "text-devYellow-400 font-medium" : "text-slate-200 hover:text-white" } >
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
      </div>
    </div>
  )
}
