import styled from 'styled-components';
import * as COLORS from '../constants/colors'

export const Main = styled.div`
  font-family: 'Montserrat';
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(0deg, ${COLORS.MAIN_BACKGROUND_START} 0%, ${COLORS.MAIN_BACKGROUND_END} 100%);
`

export const Container = styled.div`
  background-color: ${COLORS.CONTAINER_BACKGROUND};
  color: white;
  padding: 2.5em 5em;
`

export const Title = styled.h1`
  text-align: center;
`

export const PerMonth = styled.div`
  background-color: ${COLORS.PER_MONTH_BACKGROUND};
  text-transform: uppercase;
  padding: 1.5em;
  font-weight: 700;
`

export const ButtonsContainer = styled.div`
  display: flex;
  text-align: center;
`

export const CreditButton = styled.div`
  flex: 2;
  background-color: ${COLORS.GREEN_CREDIT_BACKGROUND};
  font-size: 1.5em;
  text-transform: uppercase;
  padding: .75em;
  font-weight: 700;
  cursor: pointer;

  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;

  :hover {
    background-color: ${COLORS.GREEN_CREDIT_BACKGROUND_HOVER};
  }
`

export const DetailButton = styled.div`
  flex: 1;
  background-color: ${COLORS.DETAIL_BACKGROUND};
  text-transform: uppercase;
  padding: .75em;
  font-weight: 700;
  cursor: pointer;
  margin-left: .5em;

  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;

  :hover {
    background-color: ${COLORS.DETAIL_BACKGROUND_HOVER};
  }
`