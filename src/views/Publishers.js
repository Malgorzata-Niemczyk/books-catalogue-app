import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../components/Home';
import { PublishersContext } from '../store/PublishersStore';
import { LoaderMessage, AddButton, RemoveButton, EditButton, Table, TableHead, TableRow, TableData } from '../styled-components/styled-table';

const Publishers = () => {
    const [state, dispatch] = useContext(PublishersContext);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const url = 'http://139.162.147.107:3493/publishers';

    useEffect(() => {
        const fetchPublishers = async () => {
            try {
                let response = await fetch(url);
                response = await response.json();
                const publishersData = Object.keys(response).map(key => ({id: key, ...response[key]}));
                dispatch({ type: 'SET_PUBLISHERS', payload: publishersData});
                setIsLoading(false);
                setErrorMessage(false);
            } catch (error) {
                dispatch({ type: 'SET_ERROR', payload: error });
                setIsLoading(false);
                setErrorMessage('Pobieranie danych nie powiodło się :(');
            }
        }

        fetchPublishers()
    }, [dispatch]);

    const handleRemovePublisher = async (id) => {
        await fetch(`http://139.162.147.107:3493/publishers/${id}`, {
            method: "DELETE"
        }).then(() => {
            dispatch({type: 'REMOVE_PUBLISHERS', payload: id})
        })
    }

    return ( 
        <Container>
            <h2>Wydawnictwa</h2>
            { isLoading && <LoaderMessage>Ładowanie wyników...</LoaderMessage> }
            { state.error ? <LoaderMessage>{ errorMessage }</LoaderMessage> : null }
            <Table>
                <thead>
                    <tr>
                        <TableHead>Nr</TableHead>
                        <TableHead>Nazwa</TableHead>
                        <TableHead>Rok Założenia</TableHead>
                    </tr>
                </thead>
                <tbody>
                    {state.publishers.map((publisher, index) => {
                        return (
                            <TableRow key={publisher.id}>
                                <TableData>{index + 1}.</TableData>
                                <TableData>{publisher.name}</TableData>
                                <TableData>{publisher.establishmentYear}</TableData>
                                <TableData>
                                    <Link to={`/wydawnictwa/${publisher.id}/etytuj-dane-wydawnictwa/`}>
                                        <EditButton>
                                            Edytuj
                                        </EditButton>
                                    </Link>
                                </TableData>
                                <TableData>
                                    <RemoveButton onClick={() => handleRemovePublisher(publisher.id)}>Usuń</RemoveButton>
                                </TableData>
                            </TableRow>
                        )} 
                    )}
                </tbody>
            </Table>
            <Link to="/wydawnictwa/dodaj-nowe-wydawnictwo">
                <AddButton>
                    Dodaj
                </AddButton>
            </Link>
        </Container>
     );
}
 
export default Publishers;