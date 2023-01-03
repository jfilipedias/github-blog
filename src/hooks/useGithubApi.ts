import { useEffect, useState } from 'react'
import { githubApi } from '../lib/axios'

export function useGithubApi<T>(endpoint: string) {
  const [response, setResponse] = useState<T>()
  const [error, setError] = useState<any>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await githubApi.get(endpoint)
        setResponse(res.data)
      } catch (err) {
        setError(err)
      }
    }

    fetchData()
  }, [endpoint])

  return { response, error }
}
