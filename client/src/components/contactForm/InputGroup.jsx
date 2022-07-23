import styled from 'styled-components'
import InputField from './InputField'
import TextareaField from './TextareaField'

const Group = styled.div`
   display: flex;
   flex-direction: column;
   row-gap: 8px;
   margin-bottom: 10px;
   @media screen and (min-width: 768px) {
      width: 52%;
   }
   @media screen and (min-width: 1024px) {
      width: 60%;
   }
`
const ErrorMessage = styled.p`
   position: relative;
   left: 8px;
   color: #ee4840;
   font-weight: bold;
   font-size: 14px;
`

const InputGroup = props => {
   return (
      <Group>
         {props.field === 'input' ? <InputField {...props} /> : <TextareaField {...props} />}
         <ErrorMessage>{props.errors}</ErrorMessage>
      </Group>
   )
}

export default InputGroup
