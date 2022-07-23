import styled from 'styled-components'
const Green = styled.img`
   display: none;
   width: 78px;
   position: absolute;
   right: 125px;
   @media screen and (min-width: 768px) {
      display: block;
   }
`

const GreenCylinder = () => {
   return <Green src='/assets/img/cylinder_green.svg' alt='' />
}

export default GreenCylinder
