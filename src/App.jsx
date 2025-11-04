import { Clock } from './components/clock';
import { Calendar } from './components/calendar';
import { Contacts } from './components/contacts';
import { Player } from './components/player';

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
    </main>
  )
}

export default App