// Dependencies

import { useNavigate } from 'react-router-dom';

// Styled Components

import { 
    StyledHeader, 
    StyledLeftArrow,
    StyledTextLogo,
    StyledGoBackButton,
} from './Header.styled';

const Header = (props) => {

    const navigate = useNavigate();

    return (
        <StyledHeader>
            <StyledGoBackButton id="go-back" className='go-back' onClick={() => navigate(-1)}>
                <StyledLeftArrow src='/img/name_game_left_arrow.svg' />
            </StyledGoBackButton>
            <StyledTextLogo src='/img/name_game_text_logo.svg' />
        </StyledHeader>
    );
}

export default Header;
