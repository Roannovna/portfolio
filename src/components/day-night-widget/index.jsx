import style from './day-night-widget.module.css';
import { Picture } from './day-night-pic/picture.jsx';

export function DayNightWidget() {
  return (
    <div className={style.widget__container}>
      <Picture />
    </div>
  )
}