import { Picture } from './day-night-pic/picture.jsx';
import { ipadTokens, Container } from '../../tokens/ipad-ui-tokens.jsx';


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