import { Clock } from './components/clock';
import { Calendar } from './components/calendar';
import { Contacts } from './components/contacts';

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
    </main>
  )
}

export default App