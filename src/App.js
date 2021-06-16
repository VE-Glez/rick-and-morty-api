import Header from "./components/Header/Header";
import Characters from "./components/Characters/Characters";
import { ThemeProvider} from "styled-components"
import { useSearchRef } from "./context/SearchContext";
import { useTheme } from "./context/ThemeContext";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CharacterDetails from "./Pages/CharacterDetails/CharacterDetails";
import Episodes from "./Pages/Episodes/Episodes";
import NotFound from "./Pages/NotFound";
import Locations from "./Pages/Locations/Locations";
import { GlobalStyles } from "./Globals";

function App() {
  const { theme } = useTheme();
  return (
    <div style={{textAlign: "center"}}>
      <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
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
      </ThemeProvider>
    </div>
  );
}

export default App;
