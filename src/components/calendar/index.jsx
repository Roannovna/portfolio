import { CalendarCovers } from './calendar-covers';
import { ipadTokens, Container } from '../../tokens/ipad-ui-tokens';
import { CalendarAntd } from './calendar-antd/index.jsx';

export function Calendar({ className }) {
  return (
    <Container 
      className={className}
      {...ipadTokens.widget.medium} 
      style={{ gap: '10px', padding: '10px' }}
    >
      <CalendarAntd />
      <CalendarCovers />
    </Container>
  );
}