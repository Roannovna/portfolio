import { StatusBar } from "./components/status-bar/index.jsx";
import { Home } from "./pages/home/index.jsx";
import { Dock } from "./components/dock/index.jsx";
import { ipadTokens } from "./tokens/ipad-ui-tokens.jsx";

function App() {
  return (
    <>
    <StatusBar />
    <Home />
    <Dock style={{marginTop: ipadTokens.spacing.uniGap}}/>
    </>
  )
}

export default App