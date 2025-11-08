import style from "./home.module.css";
import { Clock } from "../../components/clock";
import { Calendar } from "../../components/calendar";
import { Contacts } from "../../components/contacts";
import { Player } from "../../components/player";
import { DayNightWidget } from "../../components/day-night-widget";
import { TechStack } from "../../components/tech-stack";
import { Dock } from "../../components/dock";
import { Notions } from "../../components/notions";

export function Home() {
  return (
    <main className={style.home}>
      <Clock />
      <Contacts />
      <Notions />
      <Player />
      <DayNightWidget />
      <Calendar />
      <TechStack />
      <Dock />
    </main>
  );
}
