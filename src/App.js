import Header from "./components/Header/Header";
import Characters from "./Pages/Characters/Characters";
import { ThemeProvider} from "styled-components"
import APIProvider from "./context/APIContext"
import { useTheme } from "./context/ThemeContext";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CharacterDetails from "./Pages/CharacterDetails/CharacterDetails";
import Episodes from "./Pages/Episodes/Episodes";
import NotFound from "./Pages/NotFound";
import Locations from "./Pages/Locations/Locations";
import { GlobalStyles } from "./Globals";
import EpisodeDetails from "./Pages/EpisodeDetails/EpisodeDetails";
import LocationsDetails from "./Pages/LocationDetails/LocationsDetails";

function App() {
  const { theme } = useTheme();
  return (
    <div id="appContainer" style={{textAlign: "center"}}>
      <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <APIProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Characters} />
          <Route exact path="/episodes" component={Episodes} />
          <Route exact path="/episodes/:id" component={EpisodeDetails} />
          <Route exact path="/locations" component={Locations} />
          <Route exact path="/locations/:id" component={LocationsDetails} />
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
      </APIProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
