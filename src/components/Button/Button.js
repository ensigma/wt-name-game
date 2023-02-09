// Dependencies

import { StyledButton } from "./Button.styled";

const Button = (props) => {
    return (
        <StyledButton
            disabled={props.disabled}
            onClick={props.onClick}
            justifyContent={props.justifyContent}
            margin={props.margin}
        >
            { props.children }
        </StyledButton>
    );
}

export default Button;
