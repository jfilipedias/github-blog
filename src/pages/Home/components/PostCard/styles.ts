import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PostCardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  background: ${({ theme }) => theme.color['gray-600']};
  border: 2px solid ${({ theme }) => theme.color['gray-600']};
  border-radius: 10px;
  text-decoration: none;

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
    display: inline-block;
    margin-right: 1rem;
    font-size: 1.25rem;
    font-weight: bold;
    color: ${({ theme }) => theme.color['gray-50']};
  }

  time {
    flex-shrink: 0;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.color['gray-300']};
  }
`

export const AbstractContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 7rem;
  max-width: 22rem;
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
