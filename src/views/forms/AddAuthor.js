import { Container } from "../../components/Home";
import { Form, Label, Input } from '../../styled-components/styled-form';
import { AddButton } from '../../styled-components/styled-table';

const AddAuthor = () => {
    return ( 
        <Container>
            <h2>Dodaj Nowego Autora</h2>
            <Form>
                <Label htmlFor="lastName">Nazwisko:</Label>
                <Input type="text" placeholder="Wpisz nazwisko autora" required />
                <Label htmlFor="firstName">Imię:</Label>
                <Input type="text" placeholder="Wpisz imię autora" required />
                <AddButton type="submit">Dodaj</AddButton>
            </Form>
        </Container>
     );
}
 
export default AddAuthor;