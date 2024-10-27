import Home from "./pages/Home";
import { ThemeProvider } from "./context/Theme";
function App() {
  return (
    <ThemeProvider>
      <div>
      <Home />
    </div>
    </ThemeProvider>
  );
}

export default App;
