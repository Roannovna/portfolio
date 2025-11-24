import { calendarCoverPics } from "@/assets/calendar-covers/imp.ts";
import style from "./calendar-covers.module.css";

export function CalendarCovers() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();

  let src = calendarCoverPics.defaultImg;
  let alt = "Default Cover";

  switch (currentMonth) {
    case 11:
    case 0:
    case 1:
      src = calendarCoverPics.winterImg;
      alt = "Winter Cover";
      break;
    case 2:
    case 3:
    case 4:
      src = calendarCoverPics.springImg;
      alt = "Spring Cover";
      break;
    case 5:
    case 6:
    case 7:
      src = calendarCoverPics.summerImg;
      alt = "Summer Cover";
      break;
    case 8:
    case 9:
    case 10:
      src = calendarCoverPics.autumnImg;
      alt = "Autumn Cover";
      break;
  }

  return (
    <div className={style.calendar__cover}>
      <img src={src} alt={alt} className={style.calendar_cover__image} />
    </div>
  );
}
