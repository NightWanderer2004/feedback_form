import styled from 'styled-components'

const Textarea = styled.textarea`
   padding: 18px 24px;
   border: solid 1px #dcdcdc;
   border-radius: 8px;
   font-size: 18px;
   min-width: 70%;
   min-height: 70px;
   resize: none;
   &::placeholder {
      color: #2d2d2d;
   }
   font-family: inherit;
   @media screen and (min-width: 768px) {
      max-width: 100%;
      min-height: 128px;
      padding: 30px 45px;
   }
`

const TextareaField = props => {
   return (
      <Textarea
         placeholder={`Your ${props.name}*`}
         type={props.type}
         name={props.name}
         onChange={props.onChange}
         onBlur={props.onBlur}
         value={props.value}
      ></Textarea>
   )
}

export default TextareaField
