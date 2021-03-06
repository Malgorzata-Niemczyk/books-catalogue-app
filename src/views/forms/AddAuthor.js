import { useContext, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { AuthorsContext } from '../../store/AuthorsStore';

import { Container } from "../../components/Home";
import { Form, Label, Input, BackToListButton, ButtonsWrapper } from '../../styled-components/styled-form';
import { AddButton } from '../../styled-components/styled-table';

const AddAuthor = () => {
    const history = useHistory();
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [state, dispatch] = useContext(AuthorsContext);
    const url = 'http://139.162.147.107:3493/authors';

    const handleSubmit = async (event) => {
        event.preventDefault();

        let newAuthor = {
            lastName,
            firstName
        };

        await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newAuthor)
        }).then((res) => {
            if (res.ok === false) {
                throw Error('Dodanie wpisu nie powiodło się :(')
            } else {
                dispatch({ type: 'ADD_AUTHOR', payload: newAuthor});
                alert('Dodano wpis pomyślnie :)');
                history.push('/autorzy');
            }
        }).catch(error => {
            dispatch({ type: 'SET_ERROR', payload: error.message});
            alert(error.message);
        });

        setLastName('');
        setFirstName('');
    };


    return ( 
        <Container>
            <h2>Dodaj Nowego Autora</h2>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="lastName">Nazwisko:</Label>
                <Input 
                    type="text" 
                    value={lastName}
                    onChange={event => setLastName(event.target.value)}
                    placeholder="Wpisz nazwisko autora" 
                    required 
                />
                <Label htmlFor="firstName">Imię:</Label>
                <Input 
                    type="text" 
                    value={firstName}
                    onChange={event => setFirstName(event.target.value)}
                    placeholder="Wpisz imię autora" 
                    required 
                />
                <ButtonsWrapper>
                    <AddButton type="submit">Dodaj</AddButton>
                    <Link to="/autorzy">
                            <BackToListButton>Powrót do Listy</BackToListButton>
                    </Link>
                </ButtonsWrapper>
            </Form>
        </Container>
     );
}
 
export default AddAuthor;