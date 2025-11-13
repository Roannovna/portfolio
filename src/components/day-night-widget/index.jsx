import { Picture } from './day-night-pic/picture.jsx';
import { ipadTokens, Container } from '/src/tokens/ipad-ui-tokens';


export function DayNightWidget({ id, className }) {
  return (
    <Container 
      id={id}
      className={className}
      {...ipadTokens.widget.large}
    >
      <Picture />
    </Container>
  )
}