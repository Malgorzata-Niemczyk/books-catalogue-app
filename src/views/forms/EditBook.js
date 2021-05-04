import { Container } from "../../components/Home";
import { Form, Label, Input } from '../../styled-components/styled-form';
import { SaveButton, BackToListButton, ButtonsWrapper, Select } from '../../styled-components/styled-form';

import { Link, useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { BooksContext } from '../../store/BooksStore';

const EditBook = () => {
    const history = useHistory();
    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [isbn, setIsbn] = useState('');
    const [publishmentYear, setPublishmentYear] = useState('');

    const [state, dispatch] = useContext(BooksContext);

    useEffect(() => {
        const fetchBookDetails = async () => {
            await fetch(`http://139.162.147.107:3493/books/${id}`)
                .then(res => res.json())
                .then(data => {
                    setTitle(data.title);
                    setIsbn(data.isbn);
                    setPublishmentYear(data.publishmentYear);
            })
        }

        fetchBookDetails();
    }, [id]);

    const editBookDetails = async (editedBook) => {
        await fetch(`http://139.162.147.107:3493/books/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(editedBook)
        }).then(() => {
            console.log('New book added');
            dispatch({ type: 'ADD_BOOK', payload: editedBook});
            history.push('/ksiazki');
        }).catch(error => console.log(error))
    }

    const handleSave = (event) => {
        event.preventDefault();

        let editedBook = {
            title,
            isbn,
            publishmentYear
        };

        editBookDetails(editedBook);

        // console.log(editedBook);

        setTitle('');
        setIsbn('');
        setPublishmentYear('');
    }

    return ( 
        <Container>
            <h2>Edytuj Dane Książki</h2>
            <Form onSubmit={handleSave}>
                <Label htmlFor="lastName">Tytuł:</Label>
                <Input 
                    type="text" 
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    placeholder="Wpisz nowy tytuł książki" 
                    required 
                />
                {/* <Label htmlFor="firstName">Autor:</Label>
                <Select
                    value={authorId}
                    onChange={event => setAuthorId(event.target.value)}
                >
                    <option value="John Smith">John Smith</option>
                    <option value="Alex Johnson">Alex Johnson</option>
                    <option value="Isaac Craig">Isaac Craig</option>
                </Select> */}
                <Label htmlFor="firstName">ISBN:</Label>
                <Input 
                    type="number" 
                    value={isbn}
                    onChange={event => setIsbn(Number(event.target.value))}
                    placeholder="Wpisz nowy numer ISBN"
                    required 
                />
                {/* <Label htmlFor="firstName">Wydawnictwo:</Label>
                <Select
                    value={publisherId}
                    onChange={event => setPublisherId(event.target.value)}
                >
                    <option value="Example Publisher 1">Example Publisher 1</option>
                    <option value="Example Publisher 2">Example Publisher 2</option>
                    <option value="Example Publisher 3">Example Publisher 3</option>
                </Select> */}
                <Label htmlFor="firstName">Rok Wydania:</Label>
                <Input 
                    type="number" 
                    value={publishmentYear}
                    onChange={event => setPublishmentYear(Number(event.target.value))}
                    placeholder="Wpisz nowy rok wydania" 
                    required 
                />
                <ButtonsWrapper>
                    <SaveButton type="submit">Zapisz</SaveButton>
                    <Link to="/ksiazki">
                            <BackToListButton>Powrót do Listy</BackToListButton>
                    </Link>
                </ButtonsWrapper>
            </Form>
        </Container>
    );
}
 
export default EditBook;