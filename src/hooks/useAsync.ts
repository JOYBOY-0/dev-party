import { useEffect, useState } from 'react'

enum AsyncStatus {
  IDLE = 'idle',
  PENDING = 'pending',
  RESOLVED = 'resolved',
  REJECTED = 'rejected'
}

export const useAsync = <T>(
  asyncFunction: () => Promise<T>,
  initialValue: T | null = null,
  callBack: (data: T) => any = d => d
) => {
  const [status, setStatus] = useState<AsyncStatus>(AsyncStatus.IDLE)
  const [data, setData] = useState<T | null>(initialValue)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setStatus(AsyncStatus.PENDING)
    asyncFunction()
      .then(callBack)
      .then(data => {
        setData(data)
        setStatus(AsyncStatus.RESOLVED)
      })
      .catch(err => {
        setError(err)
        setStatus(AsyncStatus.REJECTED)
      })
  }, [asyncFunction])
  return { status, data, error }
}

export default useAsync
