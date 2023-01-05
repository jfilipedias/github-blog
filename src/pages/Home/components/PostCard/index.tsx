import ReactMarkdown from 'react-markdown'
import {
  formatDateDistanceToNow,
  formatDateToString,
} from '../../../../utils/formatter'
import { AbstractContainer, PostCardContainer, PostCardHeader } from './styles'

interface PostCardProps {
  title: string
  abstract: string
  createdAt: string
}

export function PostCard({ title, abstract, createdAt }: PostCardProps) {
  return (
    <PostCardContainer>
      <PostCardHeader>
        <h2>{title}</h2>
        <time dateTime={formatDateToString(new Date(createdAt))}>
          {formatDateDistanceToNow(new Date(createdAt))}
        </time>
      </PostCardHeader>

      <AbstractContainer>
        <ReactMarkdown disallowedElements={['img']}>{abstract}</ReactMarkdown>
      </AbstractContainer>
    </PostCardContainer>
  )
}
