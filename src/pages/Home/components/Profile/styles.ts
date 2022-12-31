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
`

export const ProfileHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: ${(props) => props.theme.color['gray-100']};
    font-weight: bold;
    font-size: 1.5rem;
  }

  a {
    display: flex;
    gap: 0.5rem;
    color: ${(props) => props.theme.color.blue};
    font-weight: bold;
    font-size: 0.75rem;
    text-transform: uppercase;
    text-decoration: none;
  }
`
