// Libraries

import { useEffect, useState } from 'react';

// Dependencies

import Header from '../../components/Header/Header';
import Typography from '../../components/Typography/Typography';
import Profile from '../../components/Profile/Profile';
import Button from '../../components/Button/Button';

//Utilites
import { getMultipleRandom, getSingleRandom } from '../../utilities/utilites';

// Styled Components 

import { 
    StyledGameWrapper,
    UserProfileWrapper,
    } from './Game.styled';


const Game = () => {
    const [profiles, setProfiles] = useState([]);
    const [randomSixProfiles, setRandomSixProfiles] = useState([]);
    const [randomSingleProfile, setRandomSingleProfile] = useState({});


    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Access-Control-Request-Headers': '*',
                'Content-type': 'application/json; charset=UTF-8',
            },
    
        }
        fetch(
          "https://namegame.willowtreeapps.com/api/v1.0/profiles",
          requestOptions
        )
        .then(response => response.json())
        .then(data => {
            setProfiles(data);
        });
    }, []);

    useEffect(() => {
      const randomProfiles = getMultipleRandom(profiles, 6);
      setRandomSixProfiles(randomProfiles);
    }, [profiles]);

    useEffect(() => {
      const randomProfile = getSingleRandom(randomSixProfiles);
      setRandomSingleProfile(randomProfile);
    }, [randomSixProfiles]);

    return (
      <>
        <Header />
        <StyledGameWrapper>
          <Typography theme="dark" justifyContent="center">
            Which one of these good looking photos is the real {randomSingleProfile && randomSingleProfile.firstName} {randomSingleProfile && randomSingleProfile.lastName}?
          </Typography>
          <Typography
            theme="dark"
            justifyContent="center"
            fontWeight="700"
            fontSize={40}
            margin="16px 0 0 0"
          ></Typography>
          <UserProfileWrapper>
            {randomSixProfiles.map((profile) => {
              return (
                <Profile
                  key={profile.id}
                  profile={profile}
                  randomSingleProfile={randomSingleProfile}
                  UserProfileWrapper={UserProfileWrapper}
                />
              );
            })}
          </UserProfileWrapper>
          <Button
            className="continueButton"
            justifyContent="center"
            theme="dark"
            margin="0 auto"
            disabled={true}
            onClick={() => console.log("clicked")}
          >
            Continue
          </Button>
        </StyledGameWrapper>
      </>
    );
};

export default Game;
