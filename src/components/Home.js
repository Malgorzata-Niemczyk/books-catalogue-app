import styled from 'styled-components';

const HomeContainer = styled.main`
        display: flex;
        justify-content: center;
        margin: 35px auto;
        padding: 40px 0;
        max-width: 70%;
        text-align: center;
        border-radius: 5px;
        box-shadow: 0 0 30px black;
        background-color: white;
    `

const Home = () => {
    return ( 
        <HomeContainer>
            <h1>Witaj w Naszym Katalogu Książek!</h1>
        </HomeContainer>
     );
}
 
export default Home;