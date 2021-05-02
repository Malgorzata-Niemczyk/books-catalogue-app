import { useContext } from 'react';
import { useEffect } from 'react';
import { Container } from '../components/Home';
import { AuthorsContext } from '../store/AuthorsStore';


const Authors = () => {
    const [state, dispatch] = useContext(AuthorsContext);
    const url = 'http://139.162.147.107:3493/authors';

    useEffect(() => {
        const fetchAuthors = async () => {
            try {
                let response = await fetch(url);
                response = await response.json();
                const authorsData = Object.keys(response).map(key => ({id: key, ...response[key]}));
                dispatch({ type: 'SET_AUTHORS', payload: authorsData})
            } catch (error) {
                dispatch({ type: 'SET_ERROR', payload: error });
            }
        }

        fetchAuthors()
    }, [dispatch]);


    return ( 
        <Container>
            <h2>Autorzy</h2>
        </Container>
    );
}
 
export default Authors;