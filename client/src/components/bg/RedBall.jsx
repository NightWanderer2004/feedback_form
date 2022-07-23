import styled from 'styled-components'

const Red = styled.img`
   position: absolute;
   z-index: 2;
   bottom: ${props => props.pos === 'hero' && '-165px'};
   right: ${props => props.pos === 'hero' && '-40px'};
   top: ${props => props.pos === 'footer' && '-16px'};
   left: ${props => props.pos === 'footer' && '0'};
   width: 120px;
   @media screen and (min-width: 640px) {
      width: 170px;
      bottom: ${props => props.pos === 'hero' && '-195px'};
      right: ${props => props.pos === 'hero' && '-80px'};
   }
   @media screen and (min-width: 768px) {
      width: 205px;
      bottom: ${props => props.pos === 'hero' && '65px'};
      right: ${props => props.pos === 'hero' && '130px'};
   }
   @media screen and (min-width: 1024px) {
      width: 255px;
      right: ${props => props.pos === 'hero' && '230px'};
   }
`

const RedBall = ({ pos }) => {
   return <Red src='/assets/img/ball_pink.svg' alt='' pos={pos} />
}

export default RedBall
