import { Picture } from './day-night-pic/picture.jsx';
import { ipadTokens, Сontainer } from '/src/tokens/ipad-ui-tokens';


export function DayNightWidget() {
  return (
    <Сontainer {...ipadTokens.widget.large}>
      <Picture />
    </Сontainer>
  )
}