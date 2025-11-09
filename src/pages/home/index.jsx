import style from "./home.module.css";
import { Clock } from "../../components/clock";
import { Calendar } from "../../components/calendar";
import { Contacts } from "../../components/contacts";
import { Player } from "../../components/player";
import { DayNightWidget } from "../../components/day-night-widget";
import { TechStack } from "../../components/tech-stack";
import { Notions } from "../../components/notions";

export function Home() {
  return (
    <>
      <main className={style.home}>
        <Clock className={style.home__clock} />
        <Notions className={style.home__notions}/>
        <Player className={style.home__player}/>
        <Contacts className={style.home__contacts}/>
        <DayNightWidget className={style.home__day_night_widget}/>
        <Calendar className={style.home__calendar}/>
        <TechStack className={style.home__tech_stack}/>
      </main>
    </>
  );
}
