import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`

const Label = styled.label`
    padding-top: 10px;
    padding-bottom: 5px;
`

const Input = styled.input`
    padding: 5px 10px
`

export { Form, Label, Input }