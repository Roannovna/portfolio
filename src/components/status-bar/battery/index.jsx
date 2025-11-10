import { useEffect, useState } from 'react'
import bateryIcon from '/src/assets/battery-icon.svg'
import style from './battery.module.css'

export function BatteryLevel() {
  const [battery, setBattery] = useState(null);

  useEffect(() => {
    async function getBatteryInfo() {
      if ('getBattery' in navigator) {
        const battery = await navigator.getBattery();
        setBattery(Math.round(battery.level * 100));

        battery.addEventListener('levelchange', () => {
          setBattery(Math.round(battery.level * 100));
        });
      } else {
        setBattery(null);
      }
    }
    getBatteryInfo();
  }, []);

  return (
    <div className={style.battery__container}>
      <div>{battery}%</div>
      <div className={style.battery__icon_container}>
        <img src={bateryIcon} className={style.battery__icon} alt="batery-icon" />
        <div className={style.battery__fill} style={{ width: `${battery}%` }}/>
      </div>
    </div>
  )
}