import Header from "./components/Header/Header";
import Characters from "./components/Characters/Characters";

import { useSearchRef } from "./context/SearchContext";
import { useTheme } from "./context/ThemeContext";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import CharacterDetails from "./Pages/CharacterDetails/CharacterDetails";
import Episodes from "./Pages/Episodes/Episodes";
import NotFound from "./Pages/NotFound";
import Locations from "./Pages/Locations/Locations";

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
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Characters} />
          <Route exact path="/episodes" component={Episodes} />
          <Route exact path="/locations" component={Locations} />
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
