import { ThemeProvider } from '@material-ui/core';
import MainLayout from 'src/components/layout/MainLayout';

import theme from './theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>App</MainLayout>
    </ThemeProvider>
  );
}

export default App;
