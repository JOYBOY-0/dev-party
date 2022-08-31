import { Layout } from '@/common/layout/Layout';
import Header from '@/partials/header/Header';
import React from 'react'

export const Submit = () => {
  return (
    <>
    <Header />
    <Layout className='bg-pattern-dark'>
      <div className='w-full h-full bg-red-500'></div>
    </Layout>
    </>
  )
}

export default Submit;
