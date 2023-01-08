import styled from 'styled-components'

export const PostContainer = styled.div`
  margin: auto;
  margin-top: -5.5rem;
  width: 100%;
  max-width: 54rem;
`

export const PostHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2.5rem 2rem;

  p {
    display: inline;
  }

  a {
    color: ${({ theme }) => theme.color.blue};
  }

  code {
    font-family: 'Fira Code', monospace !important;
  }

  img {
    max-width: 100%;
  }
`
