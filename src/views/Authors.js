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
            <table>
                <thead>
                    <tr>
                        <th>Nr</th>
                        <th>Nazwisko</th>
                        <th>Imię</th>
                    </tr>
                </thead>
                <tbody>
                    {state.authors.map((author, index) => {
                        return (
                            <tr key={author.id}>
                                <td>{index + 1}</td>
                                <td>{author.lastName}</td>
                                <td>{author.firstName}</td>
                                <td><button>Edytuj</button></td>
                                <td><button>Usuń</button></td>
                            </tr>
                        )
                    } 
                    )}
                </tbody>
            </table>
            <button>Dodaj</button>
        </Container>
    );
}
 
export default Authors;