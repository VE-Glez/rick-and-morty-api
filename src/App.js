import "./App.css";
import Header from "./components/Header";
import Characters from "./components/Characters";

import { useTheme } from "./context/ThemeContext";
import styled from "styled-components";

const Wrapper = styled.div`
  color: ${(props) => props.theme.fg};
  background-color: ${(props) => props.theme.bg};
  text-align: center;
`;

function App() {
  const { theme } = useTheme();
  return (
    <Wrapper className="App" theme={theme}>
      <Header />
      <Characters />
    </Wrapper>
  );
}

export default App;
