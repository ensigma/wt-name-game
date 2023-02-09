// Dependencies

import { StyledTypography } from './Typography.styled';

const Typography = (props) => {
    return (
        <StyledTypography 
            theme={ props.theme } 
            justifyContent={ props.justifyContent }
            fontWeight={ props.fontWeight }
            fontSize={ props.fontSize }
            margin={ props.margin }
        >
            { props.children }
        </StyledTypography>
    );
}

export default Typography;
