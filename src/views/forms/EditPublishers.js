import { Container } from "../../components/Home";
import { Form, Label, Input } from '../../styled-components/styled-form';
import { SaveButton, BackToListButton, ButtonsWrapper } from '../../styled-components/styled-form';

import { Link, useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { PublishersContext } from '../../store/PublishersStore';

const EditPublishers = () => {
    const history = useHistory();
    const { id } = useParams();
    const [name, setName] = useState('');
    const [establishmentYear, setEstablishmentYear] = useState('');
    const [state, dispatch] = useContext(PublishersContext);

    useEffect(() => {
        const fetchPublisherDetails = async () => {
            await fetch(`http://139.162.147.107:3493/publishers/${id}`)
                .then(res => res.json())
                .then(data => {
                    setName(data.name);
                    setEstablishmentYear(data.establishmentYear);
            })
        };

        fetchPublisherDetails()
    }, [id]);

    const editPublisherDetails = async (editedPublisher) => {
        await fetch(`http://139.162.147.107:3493/publishers/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(editedPublisher)
        }).then((res) => {
            if (res.ok === false) {
                throw Error('Zapisanie wpisu nie powiodło się :(')
            } else {
                dispatch({ type: 'ADD_PUBLISHERS', payload: editedPublisher});
                alert('Zapisano wpis pomyślnie :)');
                history.push('/wydawnictwa');
            }
        }).catch(error => {
            dispatch({ type: 'SET_ERROR', payload: error.message});
            alert(error.message);
        });
    }

    const handleSave = (event) => {
        event.preventDefault();

        let editedPublisher = {
            name,
            establishmentYear
        };

        editPublisherDetails(editedPublisher);

        setName('');
        setEstablishmentYear('');
    }

    return ( 
        <Container>
            <h2>Edytuj Dane Wydawnictwa</h2>
            <Form onSubmit={handleSave}>
                <Label htmlFor="lastName">Nazwa Wydawnictwa:</Label>
                <Input 
                    type="text"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    placeholder="Wpisz nową nazwę wydawnictwa" 
                    required 
                />
                <Label htmlFor="firstName">Rok Założenia:</Label>
                <Input 
                    type="number"
                    value={establishmentYear}
                    onChange={event => setEstablishmentYear(event.target.value)}
                    placeholder="Wpisz nowy rok założenia" 
                    required 
                />
                <ButtonsWrapper>
                    <SaveButton type="submit">Zapisz</SaveButton>
                    <Link to="/wydawnictwa">
                        <BackToListButton>Powrót do Listy</BackToListButton>
                    </Link>
                </ButtonsWrapper>
            </Form>
        </Container>
     );
}
 
export default EditPublishers;