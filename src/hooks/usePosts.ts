import { useApi } from './useApi'

interface Post {
  id: number
  title: string
  created_at: string
  body: string
}

export function usePosts(): Post[] | undefined {
  const { response } = useApi<Post[]>(
    `/repos/${import.meta.env.VITE_GITHUB_USERNAME}/${
      import.meta.env.VITE_GITHUB_REPO
    }/issues`,
  )

  return response
}
