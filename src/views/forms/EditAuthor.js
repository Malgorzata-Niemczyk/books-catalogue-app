import { Container } from "../../components/Home";
import { Form, Label, Input } from '../../styled-components/styled-form';
import { SaveButton, BackToListButton, ButtonsWrapper } from '../../styled-components/styled-form';

import { Link, useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { AuthorsContext } from '../../store/AuthorsStore';

const EditAuthor = () => {
    const history = useHistory();
    const { id } = useParams();
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [state, dispatch] = useContext(AuthorsContext);

    useEffect(() => {
        const fetchAuthorDetails = async () => {
            await fetch(`http://139.162.147.107:3493/authors/${id}`)
                .then(res => res.json())
                .then(data => {
                    setLastName(data.lastName);
                    setFirstName(data.firstName);
            })
        }

        fetchAuthorDetails()
    }, [id]);


    
    return ( 
        <Container>
            <h2>Edytuj Dane Autora</h2>
            <Form>
                <Label htmlFor="lastName">Nazwisko:</Label>
                <Input 
                    type="text"
                    value={lastName}
                    onChange={event => setLastName(event.target.value)}
                    placeholder="Wpisz nowe nazwisko autora" 
                    required 
                />
                <Label htmlFor="firstName">Imię:</Label>
                <Input 
                    type="text"
                    value={firstName}
                    onChange={event => setFirstName(event.target.value)}
                    placeholder="Wpisz nowe imię autora" 
                    required 
                />
                <ButtonsWrapper>
                    <SaveButton type="submit">Zapisz</SaveButton>
                    <Link to="/autorzy">
                        <BackToListButton>Powrót do Listy</BackToListButton>
                    </Link>
                </ButtonsWrapper>
            </Form>
        </Container>
     );
}
 
export default EditAuthor;