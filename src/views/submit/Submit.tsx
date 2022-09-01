import { Input } from '@/common/input/Input';
import { Layout } from '@/common/layout/Layout';
import Header from '@/partials/header/Header';
import React from 'react'
import './submit.css'
export const Submit = () => {
  return (
    <>
    <Header />
    <Layout className=''>
      <h1 className='text-3xl md:text-4xl font-primary font-bold text-slate-100 uppercase leading-10'>
        <span className="underline decoration-4 underline-offset-4 decoration-devYellow-400">Submit</span> 
        {' your resource'}
      </h1>
      <p className='font-primary tracking-wide mt-2 mb-4 text-slate-300 max-w-xl'>
        Please fill out the form below to submit your resource, we will review it and add it to the site.
      </p>

      <form className='w-full bg-slate-800 p-4 lg:p-6 rounded-xl flex flex-col'>
        <div className='flex flex-col'>
          <label
            htmlFor="email"
            className='auth_label'
          >
            Email
          </label>
          <input 
            className='w-full p-2 text-slate-100 placeholder:text-slate-400 
            rounded-md shadow-inner bg-slate-600 max-w-xs'
            id="email"
            type="email"
            placeholder="adventurer456@mail.com"
            // value={email}
            // disabled={loading}
            // onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        
      </form>
      <Input
        label="Name"
        id="submit_name"
        type="text"
        placeholder="Fantastic Resource"
        
      >
      </Input>

    </Layout>
    </>
  )
}

export default Submit;
