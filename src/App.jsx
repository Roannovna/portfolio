import { Dock } from "@/components/shared/dock/index.jsx";
import { StatusBar } from "@/components/shared/status-bar/index.jsx";
import { TourAntd } from "@/components/UI/tour/index.jsx";
import { ipadTokens } from "@/tokens/ipad-ui-tokens.jsx";
import { useState } from "react";
import { Outlet } from "react-router";
import "./App.css";

function App() {
  const [tourOpen, setTourOpen] = useState(false);

  return (
    <>
      <TourAntd open={tourOpen} onClose={() => setTourOpen(false)}/>
      <StatusBar id="status-bar" className="status-bar"/>
      <Outlet/>
      <Dock
        id="dock"
        style={{ marginTop: ipadTokens.spacing.uniGap }}
        onOpenTour={() => setTourOpen(true)}
        className="dock"
      />
    </>
  )
}

export default App;