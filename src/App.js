
import './App.css';
import LayOut from './components/LayOut';
import { ThemeProvider } from "@mui/material/styles";
import{theme} from "./Theme"
function App() {
  return (
    <ThemeProvider theme={theme}>
    <LayOut></LayOut>
    </ThemeProvider>
  );
}

export default App;
