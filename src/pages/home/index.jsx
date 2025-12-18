import { Calendar } from "@/components/home-page/calendar";
import { Clock } from "@/components/home-page/clock";
import { Contacts } from "@/components/home-page/contacts";
import { DayNightWidget } from "@/components/home-page/day-night-widget";
import { Notes } from "@/components/home-page/notes";
import { Player } from "@/components/home-page/player";
import { TechStack } from "@/components/home-page/tech-stack";
import style from "./home.module.css";

function Home() {
  return (
    <main className={style.home}>
      <Clock id="clock-standby" className={style.home__clock} />
      <Notes id='notes' className={style.home__notes} />
      <Player id='vinyl-player' className={style.home__player} />
      <Contacts id='contacts' className={style.home__contacts} />
      <DayNightWidget id='day-night-widget' className={style.home__day_night_widget} />
      <Calendar id='calendar' className={style.home__calendar} />
      <TechStack id='tech-stack' className={style.home__tech_stack} />
    </main>
  );
}

export default Home;
