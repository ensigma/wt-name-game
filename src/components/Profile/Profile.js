import React, { useState } from 'react';
import { StyledProfileWrapper, StyledProfileImage, StyledImageSelectionOverlay } from './Profile.styled';

const Profile = (props) => {
    const [isCorrect, setIsCorrect] = useState(false);

    return (
      <>
        <StyledProfileWrapper>
          {isCorrect && <StyledImageSelectionOverlay />}
          <StyledProfileImage
            onClick={() => {
              if (props.profile.id === props.randomSingleProfile.id) {
                console.log("correct");
                setIsCorrect(true);
              } else {
                console.log("incorrect");
                setIsCorrect(false);
              }
            }}
            src={props.profile.headshot.url}
            alt={props.profile.headshot.alt}
          />
        </StyledProfileWrapper>
      </>
    );

};

export default Profile;