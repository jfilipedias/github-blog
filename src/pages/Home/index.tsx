import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { Search } from './components/Search'
import { HomeContainer, PostsList } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <Search />
      <PostsList>
        <PostCard
          title="JavaScript data types and data structures"
          abstract="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have."
          createdAt="2023-01-03T00:21:18Z"
        />

        <PostCard
          title="JavaScript data types and data structures"
          abstract="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have."
          createdAt="2023-01-03T00:21:18Z"
        />

        <PostCard
          title="JavaScript data types and data structures"
          abstract="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have."
          createdAt="2023-01-03T00:21:18Z"
        />

        <PostCard
          title="JavaScript data types and data structures"
          abstract="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have."
          createdAt="2023-01-03T00:21:18Z"
        />
      </PostsList>
    </HomeContainer>
  )
}
