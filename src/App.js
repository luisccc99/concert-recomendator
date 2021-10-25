import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './colors/App.theme';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}


export default App;
