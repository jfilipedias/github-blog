import { Route, Routes } from 'react-router-dom'
import { Home } from './pages'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:post" element={<Post />} />
    </Routes>
  )
}
