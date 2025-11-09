import { Home } from "./pages/home/index.jsx";
import { Dock } from "./components/dock/index.jsx";
import { ipadTokens } from "./tokens/ipad-ui-tokens.jsx";

function App() {
  return (
    <>
    <Home />
    <Dock style={{marginTop: ipadTokens.spacing.uniGap}}/>
    </>
  )
}

export default App