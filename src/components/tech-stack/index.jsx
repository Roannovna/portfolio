import { techStackIcons } from "./icons/imp";
import { ipadTokens } from '/src/tokens/ipad-ui-tokens';

const iconSize = { width: ipadTokens.icon.app.w, height: ipadTokens.icon.app.w };

export function TechStack({ className }) {
  return (
    <>
      <img className={className} src={techStackIcons.tsIcon} alt="TypeScript" style={{...iconSize, display: 'block'}} />
      <img className={className} src={techStackIcons.jsIcon} alt="JavaScript" style={{...iconSize, display: 'block'}} />
      <img className={className} src={techStackIcons.htmlIcon} alt="HTML" style={{...iconSize, display: 'block'}} />
      <img className={className} src={techStackIcons.cssIcon} alt="CSS" style={{...iconSize, display: 'block'}} />
      <img className={className} src={techStackIcons.reactIcon} alt="React" style={{...iconSize, display: 'block'}} />
    </>
  )
}