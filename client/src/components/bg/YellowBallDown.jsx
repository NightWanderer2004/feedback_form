import styled from 'styled-components'

const YellowDown = styled.img`
   position: absolute;
   z-index: 3;
   bottom: -85px;
   right: 8px;
   width: 54px;
   @media screen and (min-width: 640px) {
      width: 70px;
   }
   @media screen and (min-width: 768px) {
      width: 100px;
      bottom: 190px;
      right: 240px;
   }
   @media screen and (min-width: 1024px) {
      width: 128px;
      bottom: 230px;
      right: 340px;
   }
`

const YellowBallDown = () => {
   return <YellowDown src='/assets/img/ball_yellow_down.svg' alt='' />
}

export default YellowBallDown
