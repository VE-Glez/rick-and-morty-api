import Header from "./components/Header/Header";
import Characters from "./components/Characters/Characters";
import { useSearchRef } from "./context/SearchContext";
import { useTheme } from "./context/ThemeContext";
import styled from "styled-components";

const Wrapper = styled.div`
  color: ${(props) => props.theme.fg};
  background-color: ${(props) => props.theme.bg};
  text-align: center;
`;

function App() {
  const { theme } = useTheme();
  const search = useSearchRef();
  console.log("APP search", search);
  return (
    <Wrapper className="App" theme={theme}>
      <Header />
      <Characters mySearch={!search.current ? "" : search.current.value} />
    </Wrapper>
  );
}

export default App;
