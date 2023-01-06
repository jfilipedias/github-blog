import { useApi } from './useApi'

interface Post {
  url: string
  id: number
  number: number
  title: string
  user: {
    login: string
  }
  comments: number
  created_at: string
  body: string
}

export function usePost(id: number): Post {
  const { response } = useApi<Post>(
    `/repos/${import.meta.env.VITE_GITHUB_USERNAME}/${
      import.meta.env.VITE_GITHUB_REPO
    }/issues/${id}`,
  )

  return response as Post
}
