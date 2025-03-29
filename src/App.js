import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme';
import Home from './pages/Home';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default App;