import { supabase, supabaseUrl } from '../supabaseClient'

export function postImage (
  bucketName: string,
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
    .from(bucketName)
    .upload(path, file)
    .then(({ data, error }) => {
      if (error) throw error
      let url = encodeURI(
        `${supabaseUrl}storage/v1/object/public/${bucketName}/${data.path}`
      )
      return url
    })
}
