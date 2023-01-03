import {
  formatDateDistanceToNow,
  formatDateToString,
} from '../../../../utils/formatter'
import { PostCardContainer } from './styles'

interface PostCardProps {
  title: string
  abstract: string
  createdAt: string
}

export function PostCard({ title, abstract, createdAt }: PostCardProps) {
  return (
    <PostCardContainer>
      <div>
        <h2>{title}</h2>
        <time dateTime={formatDateToString(new Date(createdAt))}>
          {formatDateDistanceToNow(new Date(createdAt))}
        </time>
      </div>

      <p>{abstract}</p>
    </PostCardContainer>
  )
}
