import { useEffect, useState } from 'react'
import { api } from '../lib/axios'

export function useApi<T>(endpoint: string) {
  const [response, setResponse] = useState<T>()
  const [error, setError] = useState<any>()

  async function fetchData() {
    try {
      const res = await api.get<T>(endpoint)

      setResponse(res.data)
    } catch (err) {
      setError(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { response, error }
}
