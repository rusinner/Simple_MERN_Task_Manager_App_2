import styled from "styled-components";

//App
export const AppContainer = styled.div`
  width: 100vw;
  height: auto;
  min-height: calc(110vh + 1px);
`;

//Header
export const HeaderContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 2rem 5rem;
`;
export const HeaderElement = styled.h1`
  color: white;
`;
export const Paragraph = styled.p`
  color: white;
  text-transform: uppercase;
`;

//TaskContainer
export const TaskContainer = styled.div`
  width: 70vw;
  height: auto;
  margin-left: 3rem;
  padding-bottom: 2rem;
  color: var(--mainFontColor);
  @media (max-width: 768px) {
    width: 90%;
    min-height: auto;
    margin-left: -2rem;
  }
`;
export const TaskUl = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: flex-start;
`;
export const TaskItem = styled.li`
  list-style-type: none;
  width: 85%;
  background: var(--taskItemBg);
  padding: 1rem 0.3rem;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  @media (max-width: 768px) {
    width: 100%;
  }
  &:hover {
    opacity: 0.8;
  }
`;
export const ItemText = styled.p``;

export const ButtonContainer = styled.div`
  flex: 0.1;
  display: inline-flex;
  gap: 1rem;
  @media (max-width: 768px) {
    gap: 0.3rem;
  }
`;
export const TextContainer = styled.div`
  display: inline-flex;
  align-items: center;
  height: ${(props) => (props.appear ? "auto" : "2rem")};
  flex: 0.8;
  gap: 0.5rem;
  margin-left: -1rem;
  word-break: break-all;
  white-space: ${(props) => (props.appear ? "normal" : "nowrap")};
  overflow: ${(props) => (props.appear ? "visible" : "hidden")};
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;
export const CheckBoxAppear = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background: var(--checkBoxBg);
  transition: all 0.3s;
`;
export const CheckBoxHidden = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  z-index: 2;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  background-color: transparent;
  margin-left: -0.5px;
  margin-top: -0.5px;
  cursor: pointer;
  &:checked ~ ${CheckBoxAppear} {
    background: var(--checkBoxCheckedBg);
  }
  &:focus ~ ${CheckBoxAppear} {
    box-shadow: var(--checkBoxShadow);
  }
`;

export const CheckBoxContainer = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
`;

//create new button component
export const CreateNewContainer = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(--checkBoxBg);
  position: fixed;
  right: 1rem;
  top: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--mainFontColor);
  cursor: pointer;
  &:hover {
    box-shadow: var(--checkBoxShadow);
  }
`;

//Popup Modal
export const PopupContainer = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
`;

export const CreateNewForm = styled.input.attrs({ type: "text" })`
  background: var(--checkBoxBg);
  border: 1px solid var(--background);
  border-radius: 10px;
  width: 50vw;
  height: auto;
  outline: none;
  padding: 1rem;
  font-weight: 600;
  letter-spacing: 1.2px;
  font-size: 1.3rem;
`;

export const SubmitNewButton = styled.button`
  width: 10rem;
  height: auto;
  padding: 0.5rem 1rem;
  background: var(--checkBoxBg);
  border: none;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  &:hover {
    box-shadow: var(--checkBoxShadow);
  }
`;
export const ClosePopUp = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: var(--checkBoxBg);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: fixed;
  top: 3rem;
  right: 2rem;
  &:hover {
    box-shadow: var(--checkBoxShadow);
  }
`;
