import { useContext, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { PublishersContext } from '../../store/PublishersStore';

import { Container } from "../../components/Home";
import { Form, Label, Input, BackToListButton, ButtonsWrapper } from '../../styled-components/styled-form';
import { AddButton } from '../../styled-components/styled-table';


const AddPublishers = () => {
    return ( 
        <Container>
            <h2>Dodaj Nowe Wydawnictwo</h2>
            <Form>
                <Label htmlFor="lastName">Nazwa Wydawnictwa:</Label>
                <Input 
                    type="text" 
                    // value={lastName}
                    // onChange={event => setLastName(event.target.value)}
                    placeholder="Wpisz nazwę wydawnictwa" 
                    required 
                />
                <Label htmlFor="firstName">Rok Założenia:</Label>
                <Input 
                    type="text" 
                    // value={firstName}
                    // onChange={event => setFirstName(event.target.value)}
                    placeholder="Wpisz rok założenia" 
                    required 
                />
                <ButtonsWrapper>
                    <AddButton type="submit">Dodaj</AddButton>
                    <Link to="/wydawnictwa">
                            <BackToListButton>Powrót do Listy</BackToListButton>
                    </Link>
                </ButtonsWrapper>
            </Form>
        </Container>
     );
}
 
export default AddPublishers;