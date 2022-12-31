import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { HeaderCard } from '../../../../components/HeaderCard'
import { githubApi } from '../../../../lib/axios'
import { InfoContainer, ProfileContainer, ProfileHeader } from './styles'

interface UserProfile {
  login: string
  avatar_url: string
  html_url: string
  name: string
  followers: number
  company: string
  bio: string
}

export function Profile() {
  const [profile, setProfile] = useState<UserProfile>({} as UserProfile)

  async function fetchProfileInfo() {
    const response = await githubApi.get(
      `/users/${import.meta.env.VITE_GITHUB_USERNAME}`,
    )

    setProfile({ ...response.data })
  }

  useEffect(() => {
    fetchProfileInfo()
  }, [])

  return (
    <HeaderCard>
      <ProfileContainer>
        <img src={profile.avatar_url} alt="" />

        <InfoContainer>
          <ProfileHeader>
            <h2>{profile.name}</h2>
            <a href={profile.html_url}>
              <span>GitHub</span>
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
          </ProfileHeader>
          <p>{profile.bio}</p>
          <div></div>
        </InfoContainer>
      </ProfileContainer>
    </HeaderCard>
  )
}
