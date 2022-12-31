import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-top: 0.5rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: ${(props) => props.theme.color['gray-100']};
    font-weight: bold;
    font-size: 1.5rem;
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
