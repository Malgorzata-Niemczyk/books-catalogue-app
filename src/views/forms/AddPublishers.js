import { useContext, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { PublishersContext } from '../../store/PublishersStore';

import { Container } from "../../components/Home";
import { Form, Label, Input, BackToListButton, ButtonsWrapper } from '../../styled-components/styled-form';
import { AddButton } from '../../styled-components/styled-table';


const AddPublishers = () => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [establishmentYear, setEstablishmentYear] = useState('');
    const [state, dispatch] = useContext(PublishersContext);
    const url = 'http://139.162.147.107:3493/publishers';

    const handleSubmit = async (event) => {
        event.preventDefault();

        let newPublisher = {
            name,
            establishmentYear
        };

        await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newPublisher)
        }).then((res) => {
            if (res.ok === false) {
                throw Error('Dodanie wpisu nie powiodło się :(')
            } else {
                dispatch({ type: 'ADD_PUBLISHERS', payload: newPublisher});
                alert('Dodano wpis pomyślnie :)');
                history.push('/wydawnictwa');
            }
        }).catch(error => {
            dispatch({ type: 'SET_ERROR', payload: error.message});
            alert(error.message);
        });
        
        setName('');
        setEstablishmentYear('');
    };

    return ( 
        <Container>
            <h2>Dodaj Nowe Wydawnictwo</h2>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="lastName">Nazwa Wydawnictwa:</Label>
                <Input 
                    type="text" 
                    value={name}
                    onChange={event => setName(event.target.value)}
                    placeholder="Wpisz nazwę wydawnictwa" 
                    required 
                />
                <Label htmlFor="firstName">Rok Założenia:</Label>
                <Input 
                    type="number"
                    value={establishmentYear}
                    onChange={event => setEstablishmentYear(Number(event.target.value))}
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