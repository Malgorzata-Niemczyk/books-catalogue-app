import styled from 'styled-components';

const Container = styled.main`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 55px auto;
        padding: 40px 0;
        max-width: 70%;
        text-align: center;
        border-radius: 5px;
        box-shadow: 0 0 30px black;
        background-color: white;

        @media screen and (max-width: 615px) {
            max-width: 90%;
        }
    `
export { Container };

const Home = () => {
    return ( 
        <Container>
            <h1>Witaj w Naszym Katalogu Książek!</h1>
        </Container>
     );
}
 
export default Home;