import styled from 'styled-components'

const MapImg = styled.img`
   display: none;
   position: absolute;
   width: 360px;
   top: 0;
   right: 0;
   z-index: -1;
   @media screen and (min-width: 768px) {
      display: block;
   }
   @media screen and (min-width: 1024px) {
      width: 440px;
   }
`

const Map = () => {
   return <MapImg src='/assets/img/map.png' alt='' />
}

export default Map
