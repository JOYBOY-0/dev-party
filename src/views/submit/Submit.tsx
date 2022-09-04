import { Input } from '@/common/input/Input'
import { Layout } from '@/common/layout/Layout'
import { ResourceCard } from '@/component/ResourceCard'
import { usePreviewImage } from '@/hooks/usePreviewImage'
import { Resource } from '@/models'
import Header from '@/partials/header/Header'
import { useState } from 'react'
import './submit.css'
export const Submit = () => {
  const { previewImage, setPreview, preview } = usePreviewImage()
  const [previewState, setPreviewState] = useState<Resource>({
    id: '',
    name: '',
    description: '',
    url: '',
    image: '',
    imageAlt: '',
    company: '',
    companyUrl: '',
    tags: [],
    category: {
      icon: '',
      id: '',
      name: '',
      backgroundColor: '',
      textColor: ''
    }
  })
  return (
    <>
      <Header />
      <Layout className=''>
        <h1 className='text-3xl md:text-4xl font-primary font-bold text-slate-100 uppercase leading-10'>
          <span className='underline decoration-4 underline-offset-4 decoration-devYellow-400'>
            Submit
          </span>
          {' your resource'}
        </h1>
        <p className='font-primary tracking-wide mt-2 mb-4 text-slate-300 max-w-xl'>
          Please fill out the form below to submit your resource, we will review
          it and add it to the site.
        </p>

        <form className='w-full bg-slate-800 p-4 lg:p-6 rounded-xl flex '>
          <div className='flex flex-col w-1/2 gap-4'>
            <label htmlFor='email' className='auth_label'>
              Email
            </label>
            <input
              className='w-full p-2 text-slate-100 placeholder:text-slate-400 
            rounded-md shadow-inner bg-slate-600 max-w-xs'
              id='email'
              type='email'
              placeholder='adventurer456@mail.com'
              // value={email}
              // disabled={loading}
              // onChange={(e)=> setEmail(e.target.value)}
            />
            <div className='flex items-center font-primary gap-2'>
              <input
                type='file'
                className='hidden'
                id='fileInput'
                onChange={e => setPreview(e.currentTarget.files![0])}
              />
              <label
                className='px-4 py-2 bg-devPink-600 rounded-md cursor-pointer text-white font-bold hover:bg-devPink-500 active:bg-devPink-600'
                htmlFor='fileInput'
              >
                Submit a file
              </label>
              <span className='text-gray-300 text-sm max-w-[20ch] overflow-hidden text-ellipsis whitespace-nowrap'>
                {preview?.name || 'Add an awesome image'}
              </span>
            </div>
          </div>
          <div>
            <ResourceCard
              image={previewImage || 'https://picsum.photos/200/300'}
              name={previewState.name || 'An awesome resource'}
              description={previewState.description || 'A description'}
              company={previewState.company || 'Company'}
              tags={previewState.tags}
              category={previewState.category}
              imageAlt={previewState.imageAlt || 'An awesome resource'}
            />
          </div>
        </form>
        <Input
          label='Name'
          id='submit_name'
          type='text'
          placeholder='Fantastic Resource'
        />
      </Layout>
    </>
  )
}

export default Submit
