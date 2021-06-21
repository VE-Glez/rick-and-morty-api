import Header from './components/Header/Header';
import Characters from './Pages/Characters/Characters';
import { ThemeProvider } from 'styled-components';
import APIProvider from './context/APIContext';
import { useTheme } from './context/ThemeContext';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import CharacterDetails from './Pages/CharacterDetails/CharacterDetails';
import Episodes from './Pages/Episodes/Episodes';
import NotFound from './Pages/NotFound';
import Locations from './Pages/Locations/Locations';
import { GlobalStyles } from './Globals';
import EpisodeDetails from './Pages/EpisodeDetails/EpisodeDetails';
import LocationsDetails from './Pages/LocationDetails/LocationsDetails';

function App() {
  const { theme } = useTheme();
  return (
    <div id='appContainer' style={{ textAlign: 'center' }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        <APIProvider>
          <BrowserRouter>
            <Header />
            <div id='contentWrapper' style={{ minHeight: '100vh' }}>
              <Switch>
                <Route exact path='/' component={Characters} />
                <Route exact path='/episodes' component={Episodes} />
                <Route
                  exact
                  path='/episodes/:id'
                  render={(props) =>
                    isNaN(parseInt(props.match.params.id)) ||
                    props.match.params.id < 1 ||
                    props.match.params.id > 41 ? (
                      <NotFound />
                    ) : (
                      <EpisodeDetails {...props} />
                    )
                  }
                />
                <Route exact path='/locations' component={Locations} />
                <Route
                  exact
                  path='/locations/:id'
                  render={(props) =>
                    isNaN(parseInt(props.match.params.id)) ||
                    props.match.params.id < 1 ||
                    props.match.params.id > 100 ? (
                      <NotFound />
                    ) : (
                      <LocationsDetails {...props} />
                    )
                  }
                />
                <Route
                  exact
                  path='/characterDetails/:id'
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
            </div>
          </BrowserRouter>
        </APIProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
