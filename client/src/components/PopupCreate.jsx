import React, { useState } from "react";
import * as S from "../styles";
import { useAppContext } from "../hooks/useAppContext";

const API_BASE = "http://localhost:5000";

const PopupCreate = () => {
  const { dispatch } = useAppContext();
  const [newTodo, setNewTodo] = useState("");

  const addTodo = async () => {
    const response = await fetch(API_BASE + "/todo/new", {
      method: "POST",
      body: JSON.stringify({
        text: newTodo,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "CREATE_TODO", payload: json });
    }
  };

  return (
    <S.PopupContainer>
      <S.ClosePopUp
        onClick={() => dispatch({ type: "POPUP_CREATE", payload: false })}
      >
        X
      </S.ClosePopUp>
      <S.CreateNewForm
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
      />
      <S.SubmitNewButton onClick={addTodo}>Create Task</S.SubmitNewButton>
    </S.PopupContainer>
  );
};

export default PopupCreate;
