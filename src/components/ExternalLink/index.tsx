import { AnchorHTMLAttributes } from 'react'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LinkContainer } from './styles'

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export function ExternalLink({ children, ...props }: ExternalLinkProps) {
  return (
    <LinkContainer {...props}>
      <span>{children}</span>
      <FontAwesomeIcon icon={faUpRightFromSquare} />
    </LinkContainer>
  )
}
