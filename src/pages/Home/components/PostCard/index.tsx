import ReactMarkdown from 'react-markdown'
import {
  formatDateDistanceToNow,
  formatDateToString,
} from '../../../../utils/formatter'
import { AbstractContainer, PostCardContainer, PostCardHeader } from './styles'

interface PostCardProps {
  to: string
  title: string
  abstract: string
  createdAt: string
}

export function PostCard({ to, title, abstract, createdAt }: PostCardProps) {
  return (
    <PostCardContainer to={to}>
      <PostCardHeader>
        <h2>{title}</h2>
        <time dateTime={formatDateToString(new Date(createdAt))}>
          {formatDateDistanceToNow(new Date(createdAt))}
        </time>
      </PostCardHeader>

      <AbstractContainer>
        <ReactMarkdown disallowedElements={['a', 'img']} unwrapDisallowed>
          {abstract}
        </ReactMarkdown>
      </AbstractContainer>
    </PostCardContainer>
  )
}
