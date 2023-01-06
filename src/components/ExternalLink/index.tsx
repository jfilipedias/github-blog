import { AnchorHTMLAttributes } from 'react'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LinkContainer } from './styles'

export function ExternalLink({
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <LinkContainer {...props}>
      <span>{children}</span>
      <FontAwesomeIcon icon={faUpRightFromSquare} />
    </LinkContainer>
  )
}
