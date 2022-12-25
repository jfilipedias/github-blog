import { Outlet } from 'react-router-dom'
import { Cover } from '../components/Cover'

export function DefaultLayout() {
  return (
    <>
      <Cover />
      <Outlet />
    </>
  )
}
