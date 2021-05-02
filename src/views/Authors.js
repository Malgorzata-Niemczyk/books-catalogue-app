import { useContext } from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container } from '../components/Home';
import { AuthorsContext } from '../store/AuthorsStore';

const LoaderMessage = styled.p`
    padding: 10px;
`

const AddButton = styled.button`
    margin-top: 25px;
    padding: 8px 20px;
    color: white;
    text-transform: uppercase;
    border: none;
    border-radius: 20px;
    background-color: #1cdd2b;
    cursor: pointer;
`

const RemoveButton = styled.button`
    padding: 8px 15px;
    color: white;
    text-transform: uppercase;
    border: none;
    border-radius: 5px;
    background-color: #ff335b;
    cursor: pointer;
`

const EditButton = styled.button`
    padding: 8px 15px;
    color: white;
    text-transform: uppercase;
    border: none;
    border-radius: 5px;
    background-color: #3386ff;
    cursor: pointer;
`

const Table = styled.table`
    border-collapse: collapse;
    margin-top: 20px;
`

const TableHead = styled.th`
    padding-bottom: 10px;
`

const TableRow = styled.tr`
    border-top: 1px solid black;
    border-bottom: 1px solid black;
`

const TableData = styled.td`
    padding: 10px;
`

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
                dispatch({ type: 'SET_AUTHORS', payload: authorsData});
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
                                <TableData><EditButton>Edytuj</EditButton></TableData>
                                <TableData><RemoveButton>Usuń</RemoveButton></TableData>
                            </TableRow>
                        )
                    } 
                    )}
                </tbody>
            </Table>
            <AddButton>Dodaj</AddButton>
        </Container>
    );
}
 
export default Authors;