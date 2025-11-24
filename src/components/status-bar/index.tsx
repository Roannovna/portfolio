import style from "./status-bar.module.css";
import { useEffect, useState } from "react";
import { BatteryLevel } from "./battery/index";
import { NetworkStatus } from "./network/index";
import { formatDate } from "@/utils/formatDate";
import { formatTime } from "@/utils/formatTime";

export function StatusBar({ id }: { id?: string }) {
  const [time, setTime] = useState<string>();
  const [date, setDate] = useState<string>();

  useEffect(() => {
    const interval = setInterval(() => {
      const formattedTime = formatTime.format(new Date());
      const formattedDate = formatDate.format(new Date());
      setTime(formattedTime);
      setDate(formattedDate);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header id={id} className={style.status_bar}>
      <div className={style.status_bar__left}>
        <div className={style.status_bar__time}>{time}</div>
        <div className={style.status_bar__date}>{date}</div>
      </div>
      <div className={style.status_bar__right}>
        <div className={style.status_bar__network}>
          <NetworkStatus />
        </div>
        <div className={style.status_bar__battery}>
          <BatteryLevel />
        </div>
      </div>
    </header>
  );
}
