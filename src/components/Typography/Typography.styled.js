import styled from 'styled-components';

export const StyledTypography = styled.p`
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    margin: 0;
    text-align: center;

    ${({theme}) => theme === 'light' ? `
        color: #FFF;
    ` : `
        color: #223547;
    `}

     ${({justifyContent}) => justifyContent === 'center' && `
        justify-content: center;
    `}
`;