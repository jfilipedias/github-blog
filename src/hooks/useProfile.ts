import { useApi } from './useApi'

interface Profile {
  login: string
  avatar_url: string
  html_url: string
  name: string
  followers: number
  company: string
  bio: string
}

export function useProfile(): Profile {
  const { response } = useApi<Profile>(
    `/users/${import.meta.env.VITE_GITHUB_USERNAME}`,
  )

  return response as Profile
}
