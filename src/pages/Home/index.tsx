import { usePosts } from '../../hooks/usePosts'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { Search } from './components/Search'
import { HomeContainer, PostsList } from './styles'

export function Home() {
  const { posts, postsCount, handleQueryChange } = usePosts()

  return (
    <HomeContainer>
      <Profile />
      <Search postsCount={postsCount} onSearchChange={handleQueryChange} />
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
