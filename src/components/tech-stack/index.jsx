import { techStackIcons } from "./icons/imp";
import style from "./tech-stack.module.css";

const iconSize = { width: '70px', height: '70px' };
export function TechStack() {
  return (
    <div className={style.tech_stack__container}>
      <img src={techStackIcons.tsIcon} alt="TypeScript" style={iconSize} />
      <img src={techStackIcons.jsIcon} alt="JavaScript" style={iconSize} />
      <img src={techStackIcons.htmlIcon} alt="HTML" style={iconSize} />
      <img src={techStackIcons.cssIcon} alt="CSS" style={iconSize} />
      <img src={techStackIcons.reactIcon} alt="React" style={iconSize} />
    </div>
  )
}