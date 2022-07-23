import styled from 'styled-components'

const Yellow = styled.img`
   display: ${props => props.pos === 'footer' && 'none'};
   position: absolute;
   top: ${props => props.pos === 'hero' && '5px'};
   left: ${props => props.pos === 'hero' && '12px'};
   top: ${props => props.pos === 'footer' && '50px'};
   right: ${props => props.pos === 'footer' && '-24px'};
   width: 60px;
   @media screen and (min-width: 640px) {
      width: 70px;
   }
   @media screen and (min-width: 768px) {
      width: 80px;
      display: ${props => props.pos === 'footer' && 'block'};
   }
   @media screen and (min-width: 1024px) {
      width: 90px;
   }
`

const YellowBall = ({ pos }) => {
   return <Yellow src='/assets/img/ball_yellow.svg' alt='' pos={pos} />
}

export default YellowBall
