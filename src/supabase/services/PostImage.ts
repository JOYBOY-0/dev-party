import { supabase } from '../supabaseClient'

export function postImage (
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
    .from('resource-image')
    .upload(path, file)
    .then(({ data, error }) => {
      if (error) throw error
      return data.path
    })
}
