import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import { ThemeProvider } from '@material-ui/core';
import MainLayout from 'src/components/layout/MainLayout';
import HomePage from 'src/pages/HomePage';
import LinkPage from 'src/pages/LinkPage';

import theme from './theme';
import './App.css';

// Setting Axios' base settings
// axios.defaults.baseURL = 'http://localhost:5000/rest';
axios.defaults.baseURL = 'https://g-shortify.herokuapp.com/rest';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/:code" component={LinkPage} />
          </Switch>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
