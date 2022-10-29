// Libraries
import { useNavigate } from 'react-router-dom';

// Dependencies

import Button from '../../components/Button/Button';
import Typography from "../../components/Typography/Typography";

// Styled Components

import { StyledLogo } from './Home.styled';
import { StyledHomeWrapper } from './Home.styled';

const Home = () => {

    // Variables

    const navigate = useNavigate();

    // Handlers

    const startGame = () => {
        navigate('/game');
    }

    // JSX
    return (
        <StyledHomeWrapper>
            <StyledLogo src='/img/name_game_logo.svg' alt="The Name Game target logo" />
            <Typography theme="light">Try matching the WillowTree employee to their photo.</Typography>
            <Button onClick={startGame}>Play!</Button>
        </StyledHomeWrapper>
    );
};

export default Home;
