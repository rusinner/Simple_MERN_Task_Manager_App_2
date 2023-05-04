import { createContext, useReducer } from "react";

const initialState = {
  todos: [],
  popupActive: false,
  completed: false,
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
    case "POPUP":
      return {
        todos: [...state.todos],
        popupActive: action.payload,
      };
    case "DELETE_TODO":
      return {
        todos: [...state.todos.filter((todo) => todo.id === action.payload.id)],
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
