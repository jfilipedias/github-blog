import { useEffect, useState } from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card } from '../../../../components/Card'
import { ExternalLink } from '../../../../components/ExternalLink'
import { githubApi } from '../../../../lib/axios'
import { InfoContainer, ProfileContainer, Header, Info } from './styles'

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
    <Card>
      <ProfileContainer>
        <img src={profile.avatar_url} alt="" />

        <InfoContainer>
          <Header>
            <h2>{profile.name}</h2>
            <ExternalLink href={profile.html_url}>GitHub</ExternalLink>
          </Header>

          <p>{profile.bio}</p>

          <div>
            <Info>
              <FontAwesomeIcon icon={faGithub} />
              <span>{profile.login}</span>
            </Info>

            {!!profile.company && (
              <Info>
                <FontAwesomeIcon icon={faBuilding} />
                <span>{profile.company}</span>
              </Info>
            )}

            <Info>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{profile.followers} seguidores</span>
            </Info>
          </div>
        </InfoContainer>
      </ProfileContainer>
    </Card>
  )
}
