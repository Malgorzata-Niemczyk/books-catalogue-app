import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../components/Home';
import { AuthorsContext } from '../store/AuthorsStore';
import { LoaderMessage, AddButton, RemoveButton, EditButton, Table, TableHead, TableRow, TableData } from '../styled-components/styled-table';

const Authors = () => {
    const [state, dispatch] = useContext(AuthorsContext);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const url = 'http://139.162.147.107:3493/authors';

    useEffect(() => {
        const fetchAuthors = async () => {
            try {
                let response = await fetch(url);
                response = await response.json();
                const authorsData = Object.keys(response).map(key => ({id: key, ...response[key]}));
                
                const sortedData = authorsData.sort((a, b) => {
                    let itemA = a.lastName.toLowerCase();
                    let itemB = b.lastName.toLowerCase();
                
                    if (itemA < itemB) {
                        return -1;
                    }
                    if (itemA > itemB) {
                        return 1;
                    }
                    return 0;
                });

                dispatch({ type: 'SET_AUTHORS', payload: sortedData});
                setIsLoading(false);
                setErrorMessage(false);
            } catch (error) {
                dispatch({ type: 'SET_ERROR', payload: error });
                setIsLoading(false);
                setErrorMessage('Pobieranie danych nie powiodło się :(');
            }
        }

        fetchAuthors()
    }, [dispatch]);

    const handleRemoveAuthor = async (id) => {
        await fetch(`http://139.162.147.107:3493/authors/${id}`, {
            method: "DELETE"
        }).then(() => {
            dispatch({type: 'REMOVE_AUTHOR', payload: id})
        })
    }

    return ( 
        <Container>
            <h2>Autorzy</h2>
            { isLoading && <LoaderMessage>Ładowanie wyników...</LoaderMessage> }
            { state.error ? <LoaderMessage>{ errorMessage }</LoaderMessage> : null }
            <Table>
                <thead>
                    <tr>
                        <TableHead>Nr</TableHead>
                        <TableHead>Nazwisko</TableHead>
                        <TableHead>Imię</TableHead>
                    </tr>
                </thead>
                <tbody>
                    {state.authors.map((author, index) => {
                        return (
                            <TableRow key={author.id}>
                                <TableData>{index + 1}.</TableData>
                                <TableData>{author.lastName}</TableData>
                                <TableData>{author.firstName}</TableData>
                                <TableData>
                                    <Link to={`/autorzy/${author.id}/etytuj-dane-autora/`}>
                                        <EditButton>
                                            Edytuj
                                        </EditButton>
                                    </Link>
                                </TableData>
                                <TableData>
                                    <RemoveButton 
                                        onClick={() => {
                                            if (window.confirm("Czy na pewno chcesz usunąć ten wpis?")) {
                                                handleRemoveAuthor(author.id);
                                            }
                                        }}
                                    >Usuń</RemoveButton>
                                </TableData>
                            </TableRow>
                        )} 
                    )}
                </tbody>
            </Table>
            <Link to="/autorzy/dodaj-nowego-autora">
                <AddButton>
                    Dodaj
                </AddButton>
            </Link>
        </Container>
    );
}
 
export default Authors;