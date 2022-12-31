import styled from 'styled-components'

export const LinkContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid transparent;
  color: ${({ theme }) => theme.color.blue};
  text-decoration: none;

  &:hover {
    border-color: ${({ theme }) => theme.color.blue};
  }

  span {
    font-weight: bold;
    font-size: 0.75rem;
    text-transform: uppercase;
  }

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }
`
