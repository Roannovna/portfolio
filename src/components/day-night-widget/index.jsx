import { Picture } from './day-night-pic/picture.jsx';
import { ipadTokens, Container } from '/src/tokens/ipad-ui-tokens';


export function DayNightWidget({ className }) {
  return (
    <Container 
      className={className}
      {...ipadTokens.widget.large}
    >
      <Picture />
    </Container>
  )
}