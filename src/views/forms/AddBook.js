import { Container } from "../../components/Home";
import { Form, Label, Input, BackToListButton, ButtonsWrapper, Select } from '../../styled-components/styled-form';
import { AddButton } from '../../styled-components/styled-table';

import { useContext, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { BooksContext } from '../../store/BooksStore';

const AddBook = () => {
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [isbn, setIsbnNumber] = useState('');
    const [publishmentYear, setPublishmentYear] = useState('');
    const [author, setAuthor] = useState('');
    const [publisher, setPublisher] = useState('');

    const [state, dispatch] = useContext(BooksContext);
    const url = 'http://139.162.147.107:3493/books';

    const handleSubmit = async (event) => {
        event.preventDefault();

        let newBook = {
            title,
            isbn,
            publishmentYear,
            publisher,
            author,
        };

        await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newBook)
        }).then((res) => {
            if (res.ok === false) {
                throw Error('Dodanie wpisu nie powiodło się :(')
            } else {
                dispatch({ type: 'ADD_BOOK', payload: newBook});
                alert('Dodano wpis pomyślnie :)');
                history.push('/ksiazki');
            }
        }).catch(error => {
            dispatch({ type: 'SET_ERROR', payload: error.message});
            alert(error.message);
        });

        // console.log(newBook);

        setTitle('');
        setIsbnNumber('');
        setPublishmentYear('');
        setAuthor('');
        setPublisher('');
    };

    return ( 
        <Container>
            <h2>Dodaj Nową Książkę</h2>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="lastName">Tytuł:</Label>
                <Input 
                    type="text" 
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    placeholder="Wpisz tytuł książki" 
                    required 
                />
                <Label htmlFor="firstName">Autor:</Label>
                <Select
                    value={author}
                    onChange={event => setAuthor(event.target.value)}
                >
                    <option value="John Smith">John Smith</option>
                    <option value="Alex Johnson">Alex Johnson</option>
                    <option value="Isaac Craig">Isaac Craig</option>
                </Select>
                <Label htmlFor="firstName">ISBN:</Label>
                <Input 
                    type="number" 
                    value={isbn}
                    onChange={event => setIsbnNumber(Number(event.target.value))}
                    placeholder="Wpisz numer ISBN"
                    required 
                />
                <Label htmlFor="firstName">Wydawnictwo:</Label>
                <Select
                    value={publisher}
                    onChange={event => setPublisher(event.target.value)}
                >
                    <option value="Example Publisher 1">Example Publisher 1</option>
                    <option value="Example Publisher 2">Example Publisher 2</option>
                    <option value="Example Publisher 3">Example Publisher 3</option>
                </Select>
                <Label htmlFor="firstName">Rok Wydania:</Label>
                <Input 
                    type="number" 
                    value={publishmentYear}
                    onChange={event => setPublishmentYear(Number(event.target.value))}
                    placeholder="Wpisz rok wydania" 
                    required 
                />
                <ButtonsWrapper>
                    <AddButton type="submit">Dodaj</AddButton>
                    <Link to="/ksiazki">
                            <BackToListButton>Powrót do Listy</BackToListButton>
                    </Link>
                </ButtonsWrapper>
            </Form>
        </Container>
    );
}
 
export default AddBook;