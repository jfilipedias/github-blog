import { Link } from 'react-router-dom'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card } from '../../../../components/Card'
import { ExternalLink } from '../../../../components/ExternalLink'
import {
  Info,
  InfoContainer,
  LinksContainer,
  PostHeaderContainer,
} from './styles'

interface PostHeaderProps {
  title: string
  postUrl: string
  author: string
  createdAt: string
  commentCount: number
}

export function PostHeader({
  title,
  postUrl,
  author,
  createdAt,
  commentCount,
}: PostHeaderProps) {
  return (
    <Card>
      <PostHeaderContainer>
        <LinksContainer>
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </Link>

          <ExternalLink href={postUrl}>Ver no github</ExternalLink>
        </LinksContainer>

        <InfoContainer>
          <h2>{title}</h2>

          <div>
            <Info>
              <FontAwesomeIcon icon={faGithub} />
              <span>{author}</span>
            </Info>

            <Info>
              <FontAwesomeIcon icon={faGithub} />
              <span>{createdAt}</span>
            </Info>

            <Info>
              <FontAwesomeIcon icon={faGithub} />
              <span>
                {commentCount}
                {commentCount === 1 ? ' comentário' : ' comentários'}
              </span>
            </Info>
          </div>
        </InfoContainer>
      </PostHeaderContainer>
    </Card>
  )
}
