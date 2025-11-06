import { Clock } from './components/clock';
import { Calendar } from './components/calendar';
import { Contacts } from './components/contacts';
import { Player } from './components/player';
import { DayNightWidget } from './components/day-night-widget';
import { TechStack } from './components/tech-stack';

function App() {
  return (
    <main>
      <Clock />
      <Calendar />
      <Contacts />
      <Player />
      <DayNightWidget />
      <TechStack />
    </main>
  )
}

export default App