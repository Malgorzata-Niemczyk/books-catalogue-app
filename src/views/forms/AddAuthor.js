import { Container } from "../../components/Home";

const AddAuthor = () => {
    return ( 
        <Container>
            <h2>Dodaj Nowego Autora</h2>
            <form>
                <label htmlFor="lastName">Nazwisko:</label>
                <input type="text" placeholder="Wpisz nazwisko autora" required />
                <label htmlFor="firstName">Imię:</label>
                <input type="text" placeholder="Wpisz imię autora" required />
                <input type="submit"></input>
            </form>
        </Container>
     );
}
 
export default AddAuthor;