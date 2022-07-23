import styled from 'styled-components'

const Button = styled.button`
   background-color: #fad34f;
   color: white;
   font-size: 18px;
   border: none;
   border-radius: 500px;
   padding: 27px 52px;
   width: 100%;
   cursor: pointer;
   transition: opacity 0.2s, transform 0.2s;
   &:hover {
      opacity: 90%;
      transform: scale(1.025);
   }
   @media screen and (min-width: 768px) {
      width: auto;
   }
`

const SubmitButton = ({ type, disabled }) => {
   return (
      <Button type={type} disabled={disabled}>
         Send message
      </Button>
   )
}

export default SubmitButton
