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
import QueryString from 'qs';

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
          <Route path="/spotify-auth" component={() => {
            const scope = 'user-read-private user-read-email';
            const params = QueryString.stringify({
              response_type:'code',
              client_id: 'CLIENT_ID',
              scope: scope,
              redirect_uri: 'http://localhost:3000/events',
              state: 'ya8ALtnlLX'
            });
            console.log(params);
            window.location.href = 'https://accounts.spotify.com/authorize?'+params;
            return null;
          }} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}


export default App;
