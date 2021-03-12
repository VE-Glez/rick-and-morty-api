import Header from "./components/Header/Header";
import Characters from "./components/Characters/Characters";

import { useSearchRef } from "./context/SearchContext";
import { useTheme } from "./context/ThemeContext";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import CharacterDetails from "./components/CharacterDetails.js";
import NotFound from "./components/NotFound";

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
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Characters} />
          <Route
            exact
            path="/characterDetails/:id"
            render={(props) =>
              isNaN(parseInt(props.match.params.id)) ||
              props.match.params.id < 1 ||
              props.match.params.id > 671 ? (
                <NotFound />
              ) : (
                <CharacterDetails {...props} />
              )
            }
          />
          <Route exact component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
