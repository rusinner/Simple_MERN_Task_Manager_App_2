import React from "react";
import * as S from "../styles";

const Header = ({ user }) => {
  return (
    <S.HeaderContainer>
      <S.HeaderElement>{`Welcome ${user}`}</S.HeaderElement>
      <S.Paragraph>Your Tasks</S.Paragraph>
    </S.HeaderContainer>
  );
};
export default Header;
