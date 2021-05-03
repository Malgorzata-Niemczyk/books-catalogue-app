import { Container } from "../../components/Home";
import { Form, Label, Input } from '../../styled-components/styled-form';
import { SaveButton, BackToListButton, ButtonsWrapper } from '../../styled-components/styled-form';
import { Link } from 'react-router-dom';

const EditAuthor = () => {
    return ( 
        <Container>
            <h2>Edytuj Dane Autora</h2>
            <Form>
                <Label htmlFor="lastName">Nazwisko:</Label>
                <Input 
                    type="text" 
                    placeholder="Wpisz nowe nazwisko autora" 
                    required 
                />
                <Label htmlFor="firstName">Imię:</Label>
                <Input 
                    type="text" 
                    placeholder="Wpisz nowe imię autora" 
                    required 
                />
                <ButtonsWrapper>
                    <SaveButton>Zapisz</SaveButton>
                    <Link to="/autorzy">
                        <BackToListButton>Powrót do Listy</BackToListButton>
                    </Link>
                </ButtonsWrapper>
            </Form>
        </Container>
     );
}
 
export default EditAuthor;