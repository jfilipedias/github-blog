import { useEffect, useState } from 'react'
import { api } from '../lib/axios'

export function useApi<T>(endpoint: string) {
  console.log({ endpoint })

  const [response, setResponse] = useState<T>()
  const [error, setError] = useState<any>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(endpoint)
        setResponse(res.data)
      } catch (err) {
        setError(err)
      }
    }

    fetchData()
  }, [endpoint])

  return { response, error }
}
