import styled from 'styled-components';

export const StyledProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  position: relative;
  img {
    border-radius: 4px;
    width: 260px;
    height: 260px;
    object-fit: cover;
  }
`;

export const StyledProfileImage = styled.img`
  ${({ isCorrect }) =>
    isCorrect === "true"
      ? `
        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #00ff00;
            opacity: 0.5;
            border-radius: 4px;
            z-index: -1;
            transition: 0.3s ease;
            box-shadow: 0 0 10px #00ff00;
        }
    `
      : `
        background: rgba(255, 59, 48, 0.6);
    `}
`;

export const StyledImageSelectionOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: green;

  .imageSelectionOverlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 59, 48, 0.6);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    z-index: 1;
    transition: 0.3s ease;
    box-shadow: 0 0 10px #ff0000;

`;
