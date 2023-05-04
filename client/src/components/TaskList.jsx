import * as S from "../styles.js";
import { useEffect, useState } from "react";
import { useAppContext } from "../hooks/useAppContext.js";
import { Checkbox, PopupEdit, PopupCreate, CreateNew } from "./index.js";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const API_BASE = "http://localhost:5000";

const TaskList = () => {
  const { todos, popupActive, dispatch } = useAppContext();
  const [appear, setAppear] = useState({});
  const [completed, setCompleted] = useState({});

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch(API_BASE + "/todos");
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_TODOS", payload: json });
      }
    };
    getTodos();
  }, [dispatch]);

  //make the specific todo text bigger on click by adding the appear property
  const handleAppear = (id) => {
    setAppear({ ...appear, [id]: !appear[id] });
  };

  //call the complete todo route and make the item be comleted
  const completeTodo = async (id) => {
    await fetch(API_BASE + "/todo/complete/" + id, {
      method: "PATCH",
      body: JSON.stringify({
        complete: true ? true : false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
    setCompleted({ ...completed, [id]: !completed[id] });
  };

  //delete specific todo
  const deleteTodo = async (id) => {
    const response = await fetch(API_BASE + "/todo/delete/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_TODO", payload: json });
    }
  };

  return (
    <S.TaskContainer>
      <CreateNew onClick={() => dispatch({ type: "POPUP", payload: true })} />
      {popupActive && <PopupCreate />}
      <S.TaskUl>
        {/* map over todo list from DB */}
        {todos.map((todo) => (
          <S.TaskItem key={todo._id}>
            <Checkbox onClick={() => completeTodo(todo._id)} />
            <S.TextContainer
              // add appear attribute to specific element
              appear={appear[todo._id] ?? false}
              completed={completed[todo._id] ?? false}
              onClick={() => handleAppear(todo._id)}
            >
              <S.ItemText>{todo.text}</S.ItemText>
            </S.TextContainer>

            <S.ButtonContainer>
              <EditOutlinedIcon
                sx={{ cursor: "pointer" }}
                // onClick={handleEditClick}
              />
              <DeleteOutlineIcon
                sx={{ cursor: "pointer" }}
                onClick={() => deleteTodo(todo._id)}
              />
            </S.ButtonContainer>
          </S.TaskItem>
        ))}
      </S.TaskUl>
    </S.TaskContainer>
  );
};

export default TaskList;
