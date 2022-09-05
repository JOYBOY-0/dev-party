import {Datalist, DatalistItem} from '@/common/datalist/index';
import { Input } from '@/common/input/Input'
import { Layout } from '@/common/layout/Layout'
import { ResourceCard } from '@/component/ResourceCard'
import { usePreviewImage } from '@/hooks/usePreviewImage'
import { Resource } from '@/models'
import { TagElement } from '@/common/tag-element/TagElement';
import { Textarea } from '@/common/textarea/Textarea';
import Header from '@/partials/header/Header'
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react'
import './submit.css'

interface Tag {
  id: number,
  name: string;
  icon: string;
}

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

  const tagsInitial = [
    { id: 1, name: 'Wade Cooper', icon: "/icons/Github_Logo_white.svg" },
    { id: 2, name: 'Arlene Mccoy', icon: "/icons/Github_Logo_white.svg" },
    { id: 3, name: 'Devon Webb', icon: "/icons/Github_Logo_white.svg" },
    { id: 4, name: 'Tom Cook', icon: "/icons/Github_Logo_white.svg" },
    { id: 5, name: 'Tanya Fox', icon: "/icons/Github_Logo_white.svg" },
    { id: 6, name: 'Hellen Schmidt', icon: "/icons/Github_Logo_white.svg" },
  ]

  const [tags, setTags] = useState<Tag[]>(tagsInitial);

  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const addTag = (id: number) => {
    const tag = tags.find(tag => tag.id === id);
    if (tag) {
      setSelectedTags([...selectedTags, tag]);
      setTags(tags.filter(tag => tag.id !== id));
    }
  }

  const removeTag = (id: number) => {
    const tag = selectedTags.find(tag => tag.id === id);
    if (tag) {
      setTags([...tags, tag]);
      setSelectedTags(selectedTags.filter(tag => tag.id !== id));
    }
  }

  return (
    <>
    <Header />
    <Layout className='mb-20'>
      <h1 className='text-3xl md:text-4xl font-primary font-bold text-slate-100 uppercase leading-10'>
        <span className="underline decoration-4 underline-offset-4 decoration-devYellow-400">Submit</span> 
        {' your resource'}
      </h1>
      <p className='font-primary tracking-wide mt-2 mb-4 text-slate-300 max-w-xl'>
        Please fill out the form below to submit your resource, we will review it and add it to the site.
      </p>

      <form 
        onSubmit={(e) => e.preventDefault()}
        className='w-full bg-slate-800 p-4 lg:p-6 rounded-xl flex flex-col space-y-6'>
        <Input
          label="Name"
          id="submit_resource_name"
          type="text"
          placeholder="Fantastic Resource"
        />
        <Input
          label="Website"
          id="submit_resource_website"
          type="text"
          placeholder="www.fantasticresource.com"
        />

        <Textarea
          label="Description"
          id="submit_resource_description"
          placeholder="A short and concise description of the project. This will be used in the search results."
          className='resize-none h-28'
          maxLength={150}
        />

        <div className='flex flex-col items-start max-w-xs '>
          <p className="text-white uppercase font-primary" >
            Tags
          </p>
          <p className="mb-4 mt-1 text-slate-300 font-primary" >
            Please select at least one tag. Maximum of 5 tags.
          </p>

            <Datalist
              data={tags}
              placeholder='Type to search tags...'
              onChange={(e : any) => addTag(e)}
              resultRenderer={(tag) => (
                <DatalistItem
                  key={tag.id}
                  name={tag.name}
                  icon={tag.icon}
                  id={tag.id}
                />)} 
              />
        <div 
          className='flex space-x-6 font-primary py-8'
        >
          {
            selectedTags.length === 0 ? (
              <div 
                className='flex shrink-0 flex-col items-center justify-center w-24 h-24 border-2 border-slate-700 rounded-lg border-dashed'>
                  <p className='text-slate-300 text-sm text-center'>
                    No tags selected
                  </p>
              </div>
              ) :
            selectedTags.map((tag, i) => (
            <TagElement 
              key={i} 
              name={tag.name} 
              icon={tag.icon} 
              onRemove={() => removeTag(tag.id)}
            />
          ))
          }
          

        </div>
        </div>

        <Input
          label="Company / Organization"
          id="submit_resource_company_name"
          type="text"
          placeholder="Fantastic DEV"
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
      </form>
      <ResourceCard
              image={previewImage || 'https://picsum.photos/200/300'}
              name={previewState.name || 'An awesome resource'}
              description={previewState.description || 'A description'}
              company={previewState.company || 'Company'}
              tags={previewState.tags}
              category={previewState.category}
              imageAlt={previewState.imageAlt || 'An awesome resource'}
      />

    </Layout>
    </>
  )
}

export default Submit
