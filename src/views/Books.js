import { Container } from '../components/Home';
import { LoaderMessage, AddButton, RemoveButton, EditButton, Table, TableHead, TableRow, TableData } from '../styled-components/styled-table';
import { BooksContext } from '../store/BooksStore';

import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Books = () => {
    const [state, dispatch] = useContext(BooksContext);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const url = 'http://139.162.147.107:3493/books';

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                let response = await fetch(url);
                response = await response.json();
                const booksData = Object.keys(response).map(key => ({id: key, ...response[key]}));
                
                const sortedData = booksData.sort((a, b) => a.title.localeCompare(b.title))
                
                dispatch({ type: 'SET_BOOKS', payload: sortedData});
                setIsLoading(false);
                setErrorMessage(false);
            } catch (error) {
                dispatch({ type: 'SET_ERROR', payload: error });
                setIsLoading(false);
                setErrorMessage('Pobieranie danych nie powiodło się :(');
            }
        }

        fetchBooks()
    }, [dispatch]);

    const handleRemoveBook = async (id) => {
        await fetch(`http://139.162.147.107:3493/books/${id}`, {
            method: "DELETE"
        }).then(() => {
            dispatch({type: 'REMOVE_BOOK', payload: id})
        })
    }

    return ( 
        <Container>
            <h2>Książki</h2>
            { isLoading && <LoaderMessage>Ładowanie wyników...</LoaderMessage> }
            { state.error ? <LoaderMessage>{ errorMessage }</LoaderMessage> : null }
            <Table>
                <thead>
                    <tr>
                        <TableHead>Nr</TableHead>
                        <TableHead>Tytuł</TableHead>
                        <TableHead>Autor</TableHead>
                        <TableHead>ISBN</TableHead>
                        <TableHead>Wydawnictwo</TableHead>
                        <TableHead>Rok Wydania</TableHead>
                    </tr>
                </thead>
                <tbody>
                    {state.books.map((book, index) => {
                        return (
                            <TableRow key={book.id}>
                                <TableData>{index + 1}.</TableData>
                                <TableData>{book.title}</TableData>
                                <TableData>-</TableData>
                                <TableData>{book.isbn}</TableData>
                                <TableData>-</TableData>
                                <TableData>{book.publishmentYear}</TableData>
                                <TableData>
                                    <Link to={`/ksiazki/${book.id}/etytuj-dane-ksiazki`}>
                                        <EditButton>
                                            Edytuj
                                        </EditButton>
                                    </Link>
                                </TableData>
                                <TableData>
                                    <RemoveButton
                                        onClick={() => {
                                            if (window.confirm("Czy na pewno chcesz usunąć ten wpis?")) {
                                                handleRemoveBook(book.id);
                                            }
                                        }}                                                                   
                                    >Usuń</RemoveButton>
                                </TableData>
                            </TableRow>
                        )} 
                    )}
                </tbody>
            </Table>
            <Link to="/ksiazki/dodaj-nowa-ksiazke">
                <AddButton>
                    Dodaj
                </AddButton>
            </Link>
        </Container>
     );
}
 
export default Books;