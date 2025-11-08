import style from "./home.module.css";
import { Clock } from "../../components/clock";
import { Calendar } from "../../components/calendar";
import { Contacts } from "../../components/contacts";
import { Player } from "../../components/player";
import { DayNightWidget } from "../../components/day-night-widget";
import { TechStack } from "../../components/tech-stack";
import { Dock } from "../../components/dock";
import { Notions } from "../../components/notions";
import { ipadTokens } from "/src/tokens/ipad-ui-tokens";

const maxWidth = ipadTokens.icon.app.w * 18 + ipadTokens.spacing.uniGap * 17;
console.log('maxWidth', maxWidth);
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
      <Dock className={style.home__dock} style={{marginTop: ipadTokens.spacing.uniGap}}/>
    </>
  );
}
