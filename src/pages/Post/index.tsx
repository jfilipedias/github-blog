import { PostHeader } from './components/PostHeader'
import { PostContainer, PostContent } from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostHeader
        postUrl="https://github.com/jfilipedias/github-blog/issues/2"
        title="JavaScript data types and data structures"
        author="jfilipedias"
        createdAt="2023-01-06T17:24:34Z"
        commentCount={0}
      />

      <PostContent></PostContent>
    </PostContainer>
  )
}
