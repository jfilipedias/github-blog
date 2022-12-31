import styled from 'styled-components'

export const SearchContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 4.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: ${({ theme }) => theme.color['gray-50']};
      font-weight: bold;
      font-size: 1.125rem;
    }

    span {
      color: ${({ theme }) => theme.color['gray-300']};
      font-size: 0.875rem;
    }
  }

  label {
    padding: 0.75rem 1rem;
    background: ${({ theme }) => theme.color['gray-900']};
    border: solid 1px ${({ theme }) => theme.color['gray-500']};
    border-radius: 6px;

    &:focus-within {
      border-color: ${({ theme }) => theme.color.blue};
    }

    input {
      border: none;
      background: transparent;
      color: ${({ theme }) => theme.color['gray-200']};

      ::placeholder {
        color: ${({ theme }) => theme.color['gray-400']};
      }

      &:focus {
        outline: none;
      }
    }
  }
`
