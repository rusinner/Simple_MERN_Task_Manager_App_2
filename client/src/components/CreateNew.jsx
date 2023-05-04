import React from "react";

import * as S from "../styles";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const CreateNew = ({ onClick }) => {
  return (
    <S.CreateNewContainer onClick={onClick}>
      <AddCircleOutlineOutlinedIcon />
    </S.CreateNewContainer>
  );
};

export default CreateNew;
