import styled from 'styled-components'

const LinksContainer = styled.div`
   padding-left: 20px;
   padding-right: 20px;
   display: flex;
   height: 100%;
   justify-content: flex-end;
   align-items: center;
   column-gap: 16px;
   @media screen and (min-width: 768px) {
      column-gap: 26px;
      justify-content: flex-start;
      padding-left: 120px;
   }
`

const SocialLinks = () => {
   return (
      <LinksContainer>
         <a href='#'>
            <img src='/assets/icons/linkedIn.svg' alt='LinkedIn' />
         </a>
         <a href='#'>
            <img src='/assets/icons/twitter.svg' alt='Twitter' />
         </a>
         <a href='#'>
            <img src='/assets/icons/fb.svg' alt='Facebook' />
         </a>
         <a href='#'>
            <img src='/assets/icons/pinterest.svg' alt='Pinterest' />
         </a>
      </LinksContainer>
   )
}

export default SocialLinks
