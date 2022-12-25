import styled from 'styled-components'

import CoverImg from '../../assets/cover.svg'

export const CoverContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 18.5rem;
  background-image: url(${CoverImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  img {
    margin-top: 4rem;
    width: 9.25rem;
    height: 6.125rem;
  }
`
