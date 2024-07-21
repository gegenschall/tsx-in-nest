/// <reference types="typed-htmx" />
import styled from '@emotion/styled';

const StyledForm = styled.form`
  font-size: 16px;
`;

export const Form = () => {
  return (
    <StyledForm id="form" hx-post="/add" hx-trigger="submit" hx-target="#list">
      <input type="text" name="item" required />
      <input type="submit" value="save" />
    </StyledForm>
  );
};
