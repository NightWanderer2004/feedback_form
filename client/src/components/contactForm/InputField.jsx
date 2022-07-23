import styled from 'styled-components'

const Input = styled.input`
   padding: 18px 24px;
   border: solid 1px #dcdcdc;
   border-radius: 8px;
   font-size: 18px;
   &::placeholder {
      color: #2d2d2d;
   }
   @media screen and (min-width: 768px) {
      padding: 30px 45px;
   }
`

const InputField = props => {
   return (
      <Input
         placeholder={`Your ${props.name}*`}
         type={props.type}
         name={props.name}
         onChange={props.onChange}
         onBlur={props.onBlur}
         value={props.value}
      />
   )
}

export default InputField
