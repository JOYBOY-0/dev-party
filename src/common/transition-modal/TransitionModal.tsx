import {  Transition } from '@headlessui/react'
import { FC, Fragment } from 'react'

type Props = {
    children? : React.ReactNode,
    show : boolean,
}

export const TransitionModal : FC<Props> = (props) => {
  return (
    <Transition
        show={props.show}
        className="fixed inset-0 z-10 overflow-hidden"
        // as={Fragment}
    >
        <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-200 delay-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-100 delay-100"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <div 
                className='fixed top-0 left-0 w-full h-full
                flex items-center justify-center
                bg-slate-900 z-50 '
            >
                {props.children}
            </div>
        </Transition.Child>

        <Transition.Child
            as={Fragment}
            enter="transition-all linear duration-300"
            enterFrom="transform -translate-y-full"
            enterTo="transform h-double"
            entered='transition-all transform translate-y-[100vh] h-double'
            leave="transition-all linear duration-300"
            leaveFrom="transform translate-y-[100vh] h-double"
            leaveTo="transform -translate-y-full"
        >
            <span 
                className='fixed top-0 left-[10%] w-[80px] h-[300px]
                flex items-center justify-center
                rounded-full bg-devPink-600 z-50'
            />
        </Transition.Child>

        <Transition.Child
            as={Fragment}
            enter="transition-all linear duration-250"
            enterFrom="transform -translate-y-full"
            enterTo="transform h-double"
            entered='transition-all transform translate-y-[100vh] h-double'
            leave="transition-all linear duration-250"
            leaveFrom="transform translate-y-[100vh] h-double"
            leaveTo="transform -translate-y-full"
        >
            <span 
                className='fixed top-0 left-1/2 w-[130px] h-[300px]
                flex items-center justify-center
                rounded-full bg-devYellow-400 z-50'
            />
        </Transition.Child>

        <Transition.Child
            as={Fragment}
            enter="transition-all linear duration-300 delay-100"
            enterFrom="transform -translate-y-full"
            enterTo="transform h-double"
            entered='transition-all transform translate-y-[100vh] h-double'
            leave="transition-all linear duration-300 delay-100"
            leaveFrom="transform translate-y-[100vh] h-double"
            leaveTo="transform -translate-y-full"
        >
            <span 
                className='fixed top-0 left-1/3 w-[60px] h-[300px]
                flex items-center justify-center
                rounded-full bg-devBlue-600 z-50'
            />
        </Transition.Child>
        <Transition.Child
            as={Fragment}
            enter="transition-all linear duration-[220ms] delay-[30ms]"
            enterFrom="transform -translate-y-full"
            enterTo="transform h-double"
            entered='transition-all transform translate-y-[100vh] h-double'
            leave="transition-all linear duration-[220ms] delay-[30ms]"
            leaveFrom="transform translate-y-[100vh] h-double"
            leaveTo="transform -translate-y-full"
        >
            <span 
                className='fixed top-0 right-0 w-[20px] h-[400px]
                flex items-center justify-center
                rounded-full bg-devPink-600 z-50'
            />
        </Transition.Child>
        <Transition.Child
            as={Fragment}
            enter="transition-all linear duration-[150ms] delay-[60ms]"
            enterFrom="transform -translate-y-full"
            enterTo="transform h-double"
            entered='transition-all transform translate-y-[100vh] h-double'
            leave="transition-all linear duration-[150ms] delay-[60ms]"
            leaveFrom="transform translate-y-[100vh] h-double"
            leaveTo="transform -translate-y-full"
        >
            <span 
                className='fixed top-0 left-[5%] w-[15px] h-[500px]
                flex items-center justify-center
                rounded-full bg-devYellow-400 z-50'
            />
        </Transition.Child>

        
    </Transition>
    
  )
}
