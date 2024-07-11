import { Injectable } from '@nestjs/common';
import styled from '@emotion/styled';

export interface HeaderProps {
  theValue: string;
}

const StyledHeading = styled.h1`
  color: red;
`;

const Header = ({ theValue }: HeaderProps) => {
  return <StyledHeading>{theValue}</StyledHeading>;
};

@Injectable()
export class AppService {
  getHello(value: string) {
    return <Header theValue={value} />;
  }
}
