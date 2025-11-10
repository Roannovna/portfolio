import style from './status-bar.module.css'
import { useEffect, useState } from 'react'
import { BatteryLevel } from './battery/index.jsx'

const formatTime = new Intl.DateTimeFormat('ru', {
  hour: 'numeric',
  minute: '2-digit',
});

const formatDate = new Intl.DateTimeFormat('ru', {
  weekday: 'short',
  day: 'numeric',
  month: 'short',
});

export function StatusBar() {
  const [time, setTime] = useState();
  const [date, setDate] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      const formattedTime = formatTime.format(new Date())
      const formattedDate = formatDate.format(new Date())
      setTime(formattedTime)
      setDate(formattedDate)
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.status_bar}>
      <div className={style.status_bar__left}>
        <div className={style.status_bar__time}>{time}</div>
        <div className={style.status_bar__date}>{date}</div>
      </div>
      <div className={style.status_bar__right}>
        <div className={style.status_bar__battery}><BatteryLevel /></div>
      </div>
    </div>
  )
}