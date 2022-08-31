import { useEffect, useState } from 'react'

export const usePreviewImage = () => {
  const [preview, setPreview] = useState<any>(null)
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  useEffect(() => {
    if (!preview) {
      setPreviewImage(null)
      return
    }
    const reader = new FileReader()
    reader.readAsDataURL(preview as Blob)
    reader.onloadend = e => {
      setPreviewImage(reader.result as string)
    }
  }, [preview])

  return { preview, setPreview, previewImage }
}

// use preview image hook
/* 
-------------------
  const ResourcePic = usePreviewImage()
  return (
  <input
            type='file'
            accept='png'
            onChange={e => ResourcePic.setPreview(e.target.files && e.target.files[0])}
          />
          {ResourcePic.previewImage && (
            <img src={ResourcePic.previewImage} alt='preview' />
-------------------
)}
*/
