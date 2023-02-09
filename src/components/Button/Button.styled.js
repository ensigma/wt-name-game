import styled from 'styled-components';
import { device } from '../device';

export const StyledButton = styled.button`
    display: flex;
    background: #15659D;
    border-radius: 14px;
    max-width: 359px;
    height: 56px;
    color: #FFF;
    font-size: 17px;
    line-height: 22px;
    letter-spacing: -0.408px;
    font-weight: 700;
    border: 0;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover,
    &:active,
    &:visited {
        border: 3px solid white; 
    }
    @media ${device.mobileS} {
        width: 100%;
    }
    @media ${device.laptop} {
        width: 359px;
    }

    ${({disabled}) => disabled && `
        background: rgba(21, 101, 157, 0.2);
        cursor: not-allowed;
    `}
    ${({justifyContent}) => justifyContent === 'center' && `
        justify-content: center;
    `}

    ${({margin}) => margin && `
        margin: ${margin};
    `}
`;