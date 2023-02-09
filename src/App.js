import GlobalState from "./global/GlobalState";
import Router from "./routes/Router";
import './App.css';

function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
