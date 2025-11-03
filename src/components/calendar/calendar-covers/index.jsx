import winterImg from './covers/winter.jpg';
import springImg from './covers/spring.jpg';
import summerImg from './covers/summer.jpg';
import autumnImg from './covers/autumn.jpg';
import defaultImg from './covers/default.jpg';
import style from './calendar-covers.module.css';

export function CalendarCovers() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();

  let src = defaultImg;
  let alt = "Default Cover";

  switch (currentMonth) {
    case 11:
    case 0:
    case 1:
      src = winterImg;
      alt = "Winter Cover";
      break;
    case 2:
    case 3:
    case 4:
      src = springImg;
      alt = "Spring Cover";
      break;
    case 5:
    case 6:
    case 7:
      src = summerImg;
      alt = "Summer Cover";
      break;
    case 8:
    case 9:
    case 10:
      src = autumnImg;
      alt = "Autumn Cover";
      break;
  }

  return <img src={src} alt={alt} className={style.calendar_cover__image}/>;
}
