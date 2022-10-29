// Libraries

import { useEffect, useState } from 'react';

// Dependencies

import Header from '../../components/Header/Header';
import Typography from '../../components/Typography/Typography';

// Utilites

import getJSON from '../../utilities/profiles';

// Styled Components 

import { 
    StyledGameWrapper,
    UserProfileWrapper,
    } from './Game.styled';


const Game = () => {

    const [profileArray, setprofileArray] = useState({});

    useEffect(() => {
        const getProfileInfo = async () => {
            const data = await getJSON();
            setprofileArray(data);
            debugger;
        }
        getProfileInfo();
    }, []);


    return (
        <>
            <Header />
            <StyledGameWrapper>
                <Typography theme='dark' justifyContent='center'>
                    Which one of these good looking photos is the real
                    <UserProfileWrapper>

                    </UserProfileWrapper>
                </Typography>
            </StyledGameWrapper>
        </>
    );
};

export default Game;
