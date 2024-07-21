import styled from '@emotion/styled';

const StyledList = styled.ul`
  color: blue;
`;

export type ListProps = {
  items?: string[];
};

export const List = ({ items }: ListProps) => {
  return (
    <StyledList id="list">
      {(items || []).map((item) => (
        <li>{item}</li>
      ))}
    </StyledList>
  );
};
