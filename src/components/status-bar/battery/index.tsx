import { useEffect, useState } from 'react'
import style from './battery.module.css'

export function BatteryLevel() {
  const [battery, setBattery] = useState<number | null>(null);

  useEffect(() => {
    async function getBatteryInfo() {
      try {
        if ('getBattery' in navigator) {
          const battery = await (navigator as any).getBattery();
          setBattery(Math.round(battery.level * 100));
          
          battery.addEventListener('levelchange', () => {
            setBattery(Math.round(battery.level * 100));
          });
        } else {
          setBattery(70);
        }
      } catch {
        setBattery(70)
      }
    }
    getBatteryInfo();
  }, []);

  return (
    <div className={style.battery__container}>
      <div>{battery}%</div>
      <div className={style.battery__icon_container}>
        <div className={style.battery__icon_border}>
          <div className={style.battery__icon_fill} style={{width: `${battery}%`}}></div>
        </div>
        <div className={style.battery__icon_contact}></div>
      </div>
    </div>
  )
}
