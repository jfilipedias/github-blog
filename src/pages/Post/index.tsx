import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { PostHeader } from './components/PostHeader'
import { usePost } from '../../hooks/usePost'

import { PostContainer, PostContent } from './styles'

export function Post() {
  const { id } = useParams()
  const post = usePost(id as string)

  return (
    <PostContainer>
      <PostHeader
        postUrl={post?.html_url}
        title={post?.title}
        author={post?.user.login}
        createdAt={post?.created_at}
        commentCount={post?.comments}
      />

      <PostContent>
        <ReactMarkdown>{post?.body}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
