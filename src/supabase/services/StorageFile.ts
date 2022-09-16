import { supabase } from '../supabaseClient'

function getPublicUrl (
  path: string,
  file:
    | string
    | ArrayBuffer
    | ArrayBufferView
    | Blob
    | Buffer
    | File
    | FormData
    | NodeJS.ReadableStream
    | ReadableStream<any>
    | URLSearchParams
): Promise<string> {
  return supabase.storage
    .from('resources_images')
    .upload(path, file)
    .then(({ data, error }) => {
      if (error) throw error
      return data.path
    })
}
