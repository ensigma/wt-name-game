// Dependencies

import styled from 'styled-components';
import { device }  from '../../components/device';

export const StyledHomeWrapper = styled.div`
    display: flex;
    padding: 0 15px;
    height: auto;
    align-items: center;
    flex-direction: column;
    margin: 10.35% auto 0 auto;
    gap: 72px;
`;

export const StyledLogo = styled.img`
    display: flex;
    max-width: 462.76px;
    max-height: 462.76px;
    @media ${device.mobileS} {
        width: 80vw;
    }
`;
