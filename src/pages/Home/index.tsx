import { usePosts } from '../../hooks/usePosts'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { Search } from './components/Search'
import { HomeContainer, PostsList } from './styles'

export function Home() {
  const posts = usePosts()

  return (
    <HomeContainer>
      <Profile />
      <Search postAmount={posts?.length} />
      <PostsList>
        {posts?.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            abstract={post.body}
            createdAt={post.created_at}
          />
        ))}
      </PostsList>
    </HomeContainer>
  )
}
