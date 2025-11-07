import style from "./tech-stack.module.css";
import { techStackIcons } from "./icons/imp";
import { ipadTokens } from '/src/tokens/ipad-ui-tokens';

const iconSize = { width: ipadTokens.icon.app.w, height: ipadTokens.icon.app.w };

export function TechStack() {
  return (
    <>
      <img src={techStackIcons.tsIcon} alt="TypeScript" style={iconSize} />
      <img src={techStackIcons.jsIcon} alt="JavaScript" style={iconSize} />
      <img src={techStackIcons.htmlIcon} alt="HTML" style={iconSize} />
      <img src={techStackIcons.cssIcon} alt="CSS" style={iconSize} />
      <img src={techStackIcons.reactIcon} alt="React" style={iconSize} />
    </>
  )
}