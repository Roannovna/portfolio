import { useState } from "react";
import { StatusBar } from "@/components/status-bar/index";
import { Home } from "@/pages/home/index";
import { Dock } from "@/components/dock/index";
import { ipadTokens } from "@/tokens/ipad-ui-tokens";
import { TourAntd } from "@/components/UI/tour/index";

function App() {
  const [tourOpen, setTourOpen] = useState(false);

  return (
    <>
      <TourAntd open={tourOpen} onClose={() => setTourOpen(false)} />
      <StatusBar id="status-bar" />
      <Home />
      <Dock
        id="dock"
        style={{ marginTop: ipadTokens.spacing.uniGap }}
        onOpenTour={() => setTourOpen(true)}
      />
    </>
  );
}

export default App;
