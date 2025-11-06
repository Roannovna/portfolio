import { Clock } from './components/clock';
import { Calendar } from './components/calendar';
import { Contacts } from './components/contacts';
import { Player } from './components/player';
import { DayNightWidget } from './components/day-night-widget';

function App() {
  return (
    <main>
      <div>
        <Clock />
      </div>
      <div>
        <Calendar />
      </div>
      <div>
        <Contacts />
      </div>
      <div>
        <Player />
      </div>
      <div>
        <DayNightWidget />
      </div>
    </main>
  )
}

export default App