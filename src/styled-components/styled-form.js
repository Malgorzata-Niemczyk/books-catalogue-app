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
    padding: 5px 10px;
    min-width: 250px;
`

const SaveButton = styled.button`
    margin-top: 25px;
    padding: 8px 20px;
    color: white;
    text-transform: uppercase;
    border: none;
    border-radius: 20px;
    background-color: #C4DF76;
    cursor: pointer; 
`

const BackToListButton = styled.button`
    margin-top: 25px;
    padding: 8px 20px;
    color: white;
    text-transform: uppercase;
    border: none;
    border-radius: 20px;
    background-color: #1a3668;
    cursor: pointer;
`

const ButtonsWrapper = styled.div`
    display: flex; 
    gap: 10px;
`

const Select = styled.select`
    padding: 5px 10px;
    min-width: 250px;
`

export { Form, Label, Input, SaveButton, BackToListButton, ButtonsWrapper, Select }