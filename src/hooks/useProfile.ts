import { useGithubApi } from './useGithubApi'

interface Profile {
  login: string
  avatar_url: string
  html_url: string
  name: string
  followers: number
  company: string
  bio: string
}

export function useProfile(): Profile | undefined {
  const { response } = useGithubApi<Profile>(
    `/users/${import.meta.env.VITE_GITHUB_USERNAME}`,
  )

  return response
}
