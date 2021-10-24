import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import theme from './colors/App.theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <h1>Concert Recomendator App</h1>
          <Button
            size="large"
            onClick={() => console.log('click')}
            variant="contained">Start</Button>
        </header>
      </div>
    </ThemeProvider>
  );
}


export default App;
