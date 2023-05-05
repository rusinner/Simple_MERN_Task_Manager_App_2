import React, { useReducer, useState } from "react";
import * as S from "../styles";
import { useAppContext } from "../hooks/useAppContext";

const API_BASE = "http://localhost:5000";

const PopupEdit = () => {
  const [editedTodo, setEditedTodo] = useState("");
  const { dispatch } = useAppContext();

  const editTodo = async (id) => {
    const response = await fetch(API_BASE + "/todo/update/" + id, {
      method: "PATCH",
      body: JSON.stringify({
        text: editedTodo,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "EDIT_TODO", payload: json });
      console.log(json);
    }
  };
  return (
    <S.PopupContainer>
      <S.ClosePopUp
        onClick={() => dispatch({ type: "POPUP_EDIT", payload: false })}
      >
        X
      </S.ClosePopUp>
      <S.CreateNewForm
        onChange={(e) => setEditedTodo(e.target.value)}
        value={editedTodo}
      />
      <S.SubmitNewButton onClick={() => console.log()}>
        Edit Task
      </S.SubmitNewButton>
    </S.PopupContainer>
  );
};

export default PopupEdit;
