import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
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
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={coldarkDark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {post?.body}
        </ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
