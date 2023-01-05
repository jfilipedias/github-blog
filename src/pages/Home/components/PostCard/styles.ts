import styled from 'styled-components'

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  background: ${({ theme }) => theme.color['gray-600']};
  border: 2px solid ${({ theme }) => theme.color['gray-600']};
  border-radius: 10px;

  &:hover {
    border-color: ${({ theme }) => theme.color['gray-400']};
    cursor: pointer;
  }
`

export const PostCardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    max-width: 17rem;
    font-size: 1.25rem;
    font-weight: bold;
    color: ${({ theme }) => theme.color['gray-50']};
  }

  time {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.color['gray-300']};
  }
`

export const AbstractContainer = styled.div`
  height: 7rem;
  color: ${({ theme }) => theme.color['gray-200']};
  overflow: hidden;

  a,
  h1,
  h2,
  h3,
  strong,
  ul,
  li {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.color['gray-200']};
    text-decoration: none;
    list-style: none;
  }
`
