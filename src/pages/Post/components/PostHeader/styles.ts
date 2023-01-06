import styled from 'styled-components'

export const PostHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-bottom: 1px solid transparent;
    color: ${({ theme }) => theme.color.blue};
    text-decoration: none;
    font-weight: bold;
    font-size: 0.75rem;
    text-transform: uppercase;

    &:hover {
      border-color: ${({ theme }) => theme.color.blue};
    }

    svg {
      width: 0.75rem;
      height: 0.75rem;
    }
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    color: ${({ theme }) => theme.color['gray-50']};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme.color['gray-400']};
  }
`
