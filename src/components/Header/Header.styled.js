// Dependencies

import styled from 'styled-components';
import { device } from '../device';

export const StyledHeader = styled.header`
    left: 0;
    top: 0;
    right: 0;
    bottom: auto;
    background: #223547;
    flex-direction: row;
    align-items: center;
    display: flex;
    @media ${device.mobileS} {
        height: 80px;
    }
    @media ${device.laptop} {
        height: 104px;
    }
`;

export const StyledLeftArrow = styled.img`
    width: 12px;
    height: 20.5px;
    display: flex;
    @media ${device.mobileS} {
        padding: 0 15px;
    }
    @media ${device.laptop} {
        padding: 0 46px;
    }
`;

export const StyledTextLogo = styled.img`
    display: flex;
    margin: 0 auto;
    @media ${device.mobileS} {
        height: auto;
        width: 75%;
    }
    @media ${device.laptop} {
        width: 324.37px;
        height: 30.32px;
    }
`;

export const StyledGoBackButton = styled.button`
    background: rgba(0,0,0,0);
    border: 0;
`;