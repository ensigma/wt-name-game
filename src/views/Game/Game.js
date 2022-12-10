// Libraries

import { useEffect, useState } from 'react';

// Dependencies

import Header from '../../components/Header/Header';
import Typography from '../../components/Typography/Typography';
import Profile from '../../components/Profile/Profile';

//Utilites

import randomArraySelector from '../../utilities/RandomArraySelector';


// Styled Components 

import { 
    StyledGameWrapper,
    UserProfileWrapper,
    } from './Game.styled';


const Game = () => {
    const [error, setError] = useState(null);
    const [randomSixProfiles, setRandomSixProfiles] = useState([]);
    const [currentProfileName, setCurrentProfileName] = useState('');


    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Access-Control-Request-Headers': '*',
                'Content-type': 'application/json; charset=UTF-8',
            },
    
        }
        fetch('https://namegame.willowtreeapps.com/api/v1.0/profiles', requestOptions)
            .then(response => { 
                if(response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(response => {
                const arrayProfiles = [];
                for (let i = 0; i <= 5; i++) {
                    arrayProfiles.push(randomArraySelector(response));
                }
                setRandomSixProfiles(arrayProfiles);
                const randomProfile = randomArraySelector(randomSixProfiles)
                setCurrentProfileName(`${randomProfile.firstName} ${randomProfile.lastName}`);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
              });
    }, []);

    return (
        <>
            <Header />
            <StyledGameWrapper>
                <Typography theme='dark' justifyContent='center'>
                    Which one of these good looking photos is the real
                </Typography>
                <UserProfileWrapper>
                {randomSixProfiles.map(profile=> {
                    return (
                        <Profile key={profile.id} profile={profile} />
                    );
                })}
                </UserProfileWrapper>
            </StyledGameWrapper>
        </>
    );
};

export default Game;
