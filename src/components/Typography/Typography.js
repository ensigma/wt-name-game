// Dependencies

import { StyledTypography } from './Typography.styled';

const Typography = (props) => {
    return (
        <StyledTypography 
            theme={ props.theme } 
            justifyContent={ props.justifyContent }
        >
            { props.children }
        </StyledTypography>
    );
}

export default Typography;
