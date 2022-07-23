import styled from 'styled-components'

const SunBg = styled.div`
   position: absolute;
   top: -10px;
   right: 10px;
   width: 87px;
   height: 87px;
   background-color: #fad34f;
   opacity: 0.1;
   border-radius: 100%;
   @media screen and (min-width: 768px) {
      right: 400px;
      top: 20px;
   }
`

const Sun = () => {
   return <SunBg></SunBg>
}

export default Sun
