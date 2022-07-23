import styled from 'styled-components'
import Bg from './Bg'
import SocialLinks from './SocialLinks'

const FooterContainer = styled.div`
   padding-left: 20px;
   padding-right: 20px;
   position: relative;
   height: 88px;
   background-color: #fafafa;
   border-top: 1px solid #d8d8d8;
   @media screen and (min-width: 640px) {
      padding-left: 40px;
      padding-right: 40px;
   }
   @media screen and (min-width: 768px) {
      height: 170px;
      padding-left: 110px;
      padding-right: 110px;
   }
   @media screen and (min-width: 1024px) {
      padding-left: 150px;
      padding-right: 150px;
   }
`

const Footer = () => {
   return (
      <FooterContainer>
         <Bg />
         <SocialLinks />
      </FooterContainer>
   )
}

export default Footer
