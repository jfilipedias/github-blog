import { CoverContainer } from './styles'
import logo from '../../assets/logo.svg'

export function Cover() {
  return (
    <CoverContainer>
      <img src={logo} alt="" />
    </CoverContainer>
  )
}
