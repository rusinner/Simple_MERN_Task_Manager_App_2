import { createContext, useReducer } from "react";

const initialState = {
  todos: [],
  popupCreateActive: false,
  popupEditActive: false,
  completed: false,
  id: null,
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_TODOS":
      return {
        todos: action.payload,
      };
    case "CREATE_TODO":
      return {
        todos: [action.payload, ...state.todos],
      };
    case "POPUP_CREATE":
      return {
        todos: [...state.todos],
        popupCreateActive: action.payload,
      };
    case "POPUP_EDIT":
      return {
        todos: [...state.todos],
        popupEditActive: action.payload,
        // id: action.payload.id,
      };
    case "DELETE_TODO":
      return {
        todos: [...state.todos.filter((todo) => todo.id === action.payload.id)],
      };
    case "EDIT_TODO":
      return {
        editText: action.payload,
      };

    default:
      return state;
  }
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
