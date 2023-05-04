import React from "react";
import * as S from "../styles";

const Checkbox = ({ onClick }) => {
  return (
    <S.CheckBoxContainer onClick={onClick}>
      <S.CheckBoxHidden />
      <S.CheckBoxAppear />
    </S.CheckBoxContainer>
  );
};

export default Checkbox;
