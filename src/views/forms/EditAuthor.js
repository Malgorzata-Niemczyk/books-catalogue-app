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
    const [lastName, setlastName] = useState('');
    const [firstName, setfirstName] = useState('');
    const [state, dispatch] = useContext(AuthorsContext);

    
    useEffect(() => {
       fetch(`http://139.162.147.107:3493/authors/${id}`)
            .then(res => res.json())
            .then(data => {
                setlastName(data.lastName);
                setfirstName(data.firstName);
            })
    }, [id]);
    
    return ( 
        <Container>
            <h2>Edytuj Dane Autora</h2>
            <Form>
                <Label htmlFor="lastName">Nazwisko:</Label>
                <Input 
                    type="text"
                    value={lastName}
                    placeholder="Wpisz nowe nazwisko autora" 
                    required 
                />
                <Label htmlFor="firstName">Imię:</Label>
                <Input 
                    type="text"
                    value={firstName}
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