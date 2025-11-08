import style from './clock.module.css';
import { useEffect, useState } from 'react';
import { ipadTokens, Сontainer } from '/src/tokens/ipad-ui-tokens';

export function Clock({ className }) {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hh = time.getHours().toString().padStart(2, "0");
  const mm = time.getMinutes().toString().padStart(2, "0");

  const timeString = [hh[0], hh[1], ':', mm[0], mm[1]];

  const colors = [
    "rgba(207, 151, 153, 0.6)", 
    "rgba(207, 151, 153, 0.7)", 
    "rgba(255, 213, 215, 0.7)",
    "rgba(207, 151, 153, 0.6)", 
    "rgba(207, 151, 153, 0.7)"];
  const rotations = [-6, 5, 0, -4, 5];

  return (
    <Сontainer 
      className={className} 
      {...ipadTokens.widget.medium} 
      style={{ padding: 0 }}
    >
      <div className={style.clock}>
        {timeString.map((digit, i) => (
          <span
            key={i}
            style={{
              color: colors[i],
              transform: `rotate(${rotations[i]}deg)`,
            }}
          >
            {digit}
          </span>
        ))}
      </div>
    </Сontainer>
  )
}
