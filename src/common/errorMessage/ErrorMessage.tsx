import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'
import { FC, Fragment } from 'react'
type Props = {
  children: React.ReactNode
  isOpen: boolean
  close: () => void
  errorTitle?: string
  errorDescription?: string
}

export const ErrorMessage: FC<Props> = ({
  close,
  isOpen,
  errorTitle,
  children,
  errorDescription
}) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={close}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-slate-800/80 backdrop-blur-sm ' />
          </Transition.Child>
          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full shadow-solidSm shadow-slate-900/30 max-w-md transform overflow-hidden rounded-2xl bg-slate-700 p-6 align-middle transition-all flex flex-col text-left'>
                  <div className='flex items-center gap-4'>
                    <picture>
                      <ExclamationTriangleIcon className='text-slate-500 w-24 h-24' />
                    </picture>
                    <div>
                      <Dialog.Title
                        as='h3'
                        className='text-lg font-medium leading-6 text-gray-100'
                      >
                        {errorTitle}
                      </Dialog.Title>
                      <div className='mt-2'>
                        <p className='text-sm text-gray-400'>
                          {errorDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='mt-1 self-end flex items-center gap-2'>
                    {children}
                    <button
                      type='button'
                      className=' min-w-[80px] justify-center rounded-md bg-devPink-600 px-4 py-2 text-sm font-medium text-white hover:bg-devPink-500'
                      onClick={close}
                    >
                      Ok
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
