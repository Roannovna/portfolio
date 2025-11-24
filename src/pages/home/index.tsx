import style from "./home.module.css";
import { Clock } from "@/components/clock";
import { Calendar } from "@/components/calendar";
import { Contacts } from "@/components/contacts";
import { Player } from "@/components/player";
import { DayNightWidget } from "@/components/day-night-widget";
import { TechStack } from "@/components/tech-stack";
import { Notes } from "@/components/notes";

export function Home() {
  return (
    <main className={style.home}>
      <Clock id="clock-standby" className={style.home__clock}/>
      <Notes id='notes'className={style.home__notes}/>
      <Player id='vinyl-player' className={style.home__player}/>
      <Contacts id='contacts' className={style.home__contacts}/>
      <DayNightWidget id='day-night-widget' className={style.home__day_night_widget}/>
      <Calendar id='calendar' className={style.home__calendar}/>
      <TechStack id='tech-stack' className={style.home__tech_stack}/>
    </main>
  );
}
