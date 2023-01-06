import { useState } from 'react'
import { useApi } from './useApi'

interface Post {
  id: number
  title: string
  created_at: string
  body: string
}

interface PostsResponse {
  total_count: number
  items: Post[]
}

interface UsePostReturn {
  posts: Post[]
  postsCount: number
  handleQueryChange: (query: string) => void
}

export function usePosts(): UsePostReturn {
  const [query, setQuery] = useState('')

  function handleQueryChange(query: string) {
    setQuery(query)
  }

  const { response } = useApi<PostsResponse>(
    `/search/issues?q=${query.replace(' ', '%20')}%20repo:${
      import.meta.env.VITE_GITHUB_USERNAME
    }/${import.meta.env.VITE_GITHUB_REPO}`,
  )

  return {
    posts: response?.items as Post[],
    postsCount: response?.total_count as number,
    handleQueryChange,
  }
}
