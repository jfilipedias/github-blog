import { AnchorHTMLAttributes } from 'react'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LinkContainer } from './styles'

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  hideIcon?: boolean
}

export function ExternalLink({
  children,
  hideIcon = false,
  ...props
}: ExternalLinkProps) {
  return (
    <LinkContainer {...props}>
      <span>{children}</span>
      {!hideIcon && <FontAwesomeIcon icon={faUpRightFromSquare} />}
    </LinkContainer>
  )
}
