import style from "./home.module.css";
import { Clock } from "../../components/clock";
import { Calendar } from "../../components/calendar";
import { Contacts } from "../../components/contacts";
import { Player } from "../../components/player";
import { DayNightWidget } from "../../components/day-night-widget";
import { TechStack } from "../../components/tech-stack";
import { Notes } from "../../components/Notes";

export function Home() {
  return (
    <>
      <main className={style.home}>
        <Clock className={style.home__clock} />
        <Notes className={style.home__notes}/>
        <Player className={style.home__player}/>
        <Contacts className={style.home__contacts}/>
        <DayNightWidget className={style.home__day_night_widget}/>
        <Calendar className={style.home__calendar}/>
        <TechStack />
      </main>
    </>
  );
}
