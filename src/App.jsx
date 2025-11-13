import { useState } from "react";
import { StatusBar } from "./components/status-bar/index.jsx";
import { Home } from "./pages/home/index.jsx";
import { Dock } from "./components/dock/index.jsx";
import { ipadTokens } from "./tokens/ipad-ui-tokens.jsx";
import { TourAntd } from "./components/UI/tour/index.jsx";

function App() {
  const [tourOpen, setTourOpen] = useState(false);

  return (
    <>
    <TourAntd open={tourOpen} onClose={() => setTourOpen(false)} />
    <StatusBar id="status-bar"/>
    <Home />
    <Dock 
      id="dock"
      style={{marginTop: ipadTokens.spacing.uniGap}}
      onOpenTour={() => setTourOpen(true)}
      />
    </>
  )
}

export default App;