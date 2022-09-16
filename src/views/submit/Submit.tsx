import { CategoryCard } from '@/assets/svg-components/CategoryCard'
import { Datalist, DatalistItem } from '@/common/datalist/index'
import { Input } from '@/common/input/Input'
import { Layout } from '@/common/layout/Layout'
import { TagSpan } from '@/common/tag-element'
import { TagElement } from '@/common/tag-element/TagElement'
import { Textarea } from '@/common/textarea/Textarea'
import { ResourceCard } from '@/component/ResourceCard'
import { usePreviewImage } from '@/hooks/usePreviewImage'
import { CategoryId, ResourceSubmit, Tag } from '@/models'
import Header from '@/partials/header/Header'
import { ChangeEvent, useState } from 'react'
import './submit.css'

interface E extends ChangeEvent<HTMLInputElement> {}
interface TE extends ChangeEvent<HTMLTextAreaElement> {}

export const Submit = () => {
  const tagsInitial = [
    { id: 1, name: 'Wade Cooper', icon: '/icons/Github_Logo_white.svg' },
    { id: 2, name: 'Arlene Mccoy', icon: '/icons/Github_Logo_white.svg' },
    { id: 3, name: 'Devon Webb', icon: '/icons/Github_Logo_white.svg' },
    { id: 4, name: 'Tom Cook', icon: '/icons/Github_Logo_white.svg' },
    { id: 5, name: 'Tanya Fox', icon: '/icons/Github_Logo_white.svg' },
    { id: 6, name: 'Hellen Schmidt', icon: '/icons/Github_Logo_white.svg' }
  ]

  const companyInitial = [
    { id: 1, name: 'Wade Cooper Co.' },
    { id: 2, name: 'Arlene Mccoy Co.' },
    { id: 3, name: 'Devon Webb Co.' },
    { id: 4, name: 'Tom Cook Co.' },
    { id: 5, name: 'Tanya Fox Co.' },
    { id: 6, name: 'Hellen Schmidt Co.' }
  ]

  const [tags, setTags] = useState<Tag[]>(tagsInitial)
  // const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const addTag = (id: number) => {
    const tag = tags.find(tag => tag.id === id)
    if (tag) {
      setFormFields({
        ...formFields,
        tags: [...formFields.tags, tag]
      })
      setTags(tags.filter(tag => tag.id !== id))
    }
  }

  const removeTag = (id: number) => {
    const tag = formFields.tags.find(tag => tag.id === id)
    if (tag) {
      setTags([...tags, tag])
      setFormFields({
        ...formFields,
        tags: formFields.tags.filter(tag => tag.id !== id)
      })
    }
  }

  const { previewImage, setPreview, preview } = usePreviewImage()

  const [formFields, setFormFields] = useState<ResourceSubmit>({
    id: '',
    name: '',
    description: '',
    website: '',
    image: '',
    imageAlt: '',
    company: {
      id: null,
      name: ''
    },
    tags: [],
    category: null
  })

  // console.log(formFields)

  return (
    <>
      <Header />
      <Layout className='mb-20'>
        <h1 className='text-3xl md:text-4xl font-primary font-bold text-slate-100 uppercase leading-10'>
          <span className='underline decoration-4 underline-offset-4 decoration-devYellow-400'>
            Submit
          </span>
          {' your resource'}
        </h1>
        <p className='font-primary tracking-wide mt-2 mb-4 text-slate-300'>
          Please fill out the form below to submit your resource, we will review
          it and add it to the site.
        </p>

        <form
          onSubmit={e => e.preventDefault()}
          className='w-full bg-slate-800 p-4 lg:p-6 rounded-xl 
          flex flex-col items-center justify-center
          md:grid md:grid-cols-2 md:justify-start md:items-start md:gap-10
          xl:grid-cols-3'
        >
          <div className=' flex flex-col gap-y-6 max-w-sm 
           xl:grid xl:col-span-2 xl:grid-cols-2 xl:max-w-[none] xl:gap-x-10'>
            <Input
              label='Name'
              id='submit_resource_name'
              type='text'
              placeholder='Fantastic Resource'
              value={formFields.name}
              onChange={(e: E) =>
                setFormFields({ ...formFields, name: e.target.value })
              }
            />

            <Input
              label='Website'
              id='submit_resource_website'
              type='text'
              placeholder='www.fantasticresource.com'
              value={formFields.website}
              onChange={(e: E) =>
                setFormFields({ ...formFields, website: e.target.value })
              }
            />

            <Textarea
              label='Description'
              id='submit_resource_description'
              placeholder='A short and concise description of the project. This will be used in the search results.'
              className='resize-none h-28'
              maxLength={150}
              value={formFields.description}
              onChange={(e: TE) =>
                setFormFields({ ...formFields, description: e.target.value })
              }
            />

            <Datalist
              data={companyInitial}
              value={formFields.company.name}
              id='submit_resource_company_name'
              label='Company / Organization'
              placeholder='Type to search organizations...'
              onChange={(e: any) => {
                console.log(e)
                setFormFields({ ...formFields, company: e })
              }}
              resultRenderer={(company, i) => (
                <DatalistItem
                  key={i}
                  name={company.name}
                  id={company.id}
                  value={company}
                />
              )}
            />

            <div className='flex flex-col items-start '>
              <p className='text-white uppercase font-primary'>
                Category
              </p>
              <p className='mb-4 mt-1 text-slate-300 font-primary'>
                Tell us wich one describes better the resource.
              </p>
              <div className='flex space-x-3 font-primary py-2 rounded-xl'>
                <CategoryCard
                  category={CategoryId.PRODUCTIVITY}
                  className={`w-1/3 cursor-pointer transition-all ${
                    formFields.category === CategoryId.PRODUCTIVITY
                      ? ''
                      : 'grayscale opacity-60 scale-95'
                  }`}
                  onClick={() =>
                    setFormFields({
                      ...formFields,
                      category: CategoryId.PRODUCTIVITY
                    })
                  }
                />
                <CategoryCard
                  category={CategoryId.DESIGN}
                  className={`w-1/3 cursor-pointer transition-all ${
                    formFields.category === CategoryId.DESIGN
                      ? ''
                      : 'grayscale opacity-60 scale-95'
                  }`}
                  onClick={() =>
                    setFormFields({ ...formFields, category: CategoryId.DESIGN })
                  }
                />
                <CategoryCard
                  category={CategoryId.CODING}
                  className={`w-1/3 cursor-pointer transition-all ${
                    formFields.category === CategoryId.CODING
                      ? ''
                      : 'grayscale opacity-60 scale-95'
                  }`}
                  onClick={() =>
                    setFormFields({ ...formFields, category: CategoryId.CODING })
                  }
                />
              </div>
            </div>

            <div className='flex flex-col items-start '>
              <p className='text-white uppercase font-primary'>Tags</p>
              <p className='mb-4 mt-1 text-slate-300 font-primary'>
                Please select at least one tag. Maximum of 5 tags.
              </p>

              <Datalist
                data={tags}
                placeholder='Type to search tags...'
                id='submit_resource_tags'
                onChange={(e: any) => addTag(e)}
                resultRenderer={(tag, i) => (
                  <DatalistItem
                    key={i}
                    name={tag.name}
                    icon={tag.icon}
                    id={tag.id}
                    value={tag.id}
                  />
                )}
              />
              <div className='flex gap-2 flex-wrap font-primary py-8'>
                {formFields.tags.length === 0 ? (
                  <div className='flex shrink-0 flex-col items-center flex-wrap justify-center px-3 py-1.5 border-2 border-slate-700 rounded-full border-dashed'>
                    <p className='text-slate-300 text-sm text-center'>
                      No tags selected
                    </p>
                  </div>
                ) : (
                  formFields.tags.map((tag, i) => (
                    <TagSpan
                      theme={formFields.category}
                      key={i}
                      name={tag.name}
                      onRemove={() => removeTag(tag.id)}
                    />
                  ))
                )}
              </div>
            </div>

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
          <div 
            className='flex flex-col items-center justify-center grow
            md:sticky md:top-[100px]'
          >
            <div className='flex flex-col items-start '>
              <p className='text-white uppercase font-primary'>
                Preview
              </p>
              <p className='mb-4 mt-1 text-slate-300 font-primary'>
                This is how it will look like 😍
              </p>
              <ResourceCard
                image={previewImage || 'https://picsum.photos/200/300'}
                name={formFields.name || 'An awesome resource'}
                description={formFields.description || 'A description'}
                company={formFields.company.name || 'Company HI'}
                tags={formFields.tags}
                category={formFields.category}
                imageAlt={formFields.imageAlt || 'An awesome resource'}
              />
            </div>
          </div>
        </form>
      </Layout>
    </>
  )
}

export default Submit
