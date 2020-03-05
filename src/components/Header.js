import styled from "styled-components";

export default styled.h1`
  font-family: ${props => props.theme.font};
  font-size: ${props =>
    props.fontSize ? props.fontSize : props.theme.fontSize};
`;
