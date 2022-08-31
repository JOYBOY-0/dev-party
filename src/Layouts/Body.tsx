import { FC, PropsWithChildren } from 'react'

export const Body: FC<PropsWithChildren> = ({ children }) => {
  return <div className='bg-slate-900 container'>{children}</div>
}
