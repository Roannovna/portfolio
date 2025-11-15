import { CalendarCovers } from './calendar-covers';
import { ipadTokens, Container } from '@/tokens/ipad-ui-tokens.jsx';
import { CalendarAntd } from './calendar-antd/index.jsx';

export function Calendar({ id, className }) {
  return (
    <Container 
      id={id}
      className={className}
      {...ipadTokens.widget.medium} 
      style={{ gap: '10px', padding: '10px' }}
    >
      <CalendarAntd />
      <CalendarCovers />
    </Container>
  );
}