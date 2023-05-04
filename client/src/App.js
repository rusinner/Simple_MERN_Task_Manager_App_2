import * as S from "./styles";
import { Header, CreateNew, PopupCreate, TaskList } from "./components";

function App() {
  return (
    <S.AppContainer>
      <Header user="Teo" />
      <TaskList />
    </S.AppContainer>
  );
}

export default App;
