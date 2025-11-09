import style from "./tech-stack.module.css";
import { techStackIcons } from "./icons/imp";
import { ipadTokens } from '/src/tokens/ipad-ui-tokens';
import { Iframe } from '../UI/iframe';
import { useState } from 'react';


const iconSize = { width: ipadTokens.icon.app.w, height: ipadTokens.icon.app.w, borderRadius: ipadTokens.icon.app.br };

export function TechStack({ className }) {
  const [frameSrc, setFrameSrc] = useState(null);
  
  return (
    <>
      <button style={iconSize} onClick={() => setFrameSrc('https://www.typescriptlang.org/')}>
        <img className={className} src={techStackIcons.tsIcon} alt="TypeScript" style={iconSize} />
      </button>
      <button style={iconSize} onClick={() => setFrameSrc('https://doka.guide/js')} >
        <img className={className} src={techStackIcons.jsIcon} alt="JavaScript" style={iconSize} />
      </button>
      <button style={iconSize} onClick={() => setFrameSrc('https://doka.guide/html')} >
        <img className={className} src={techStackIcons.htmlIcon} alt="HTML" style={iconSize} />
      </button>
      <button style={iconSize} onClick={() => setFrameSrc('https://doka.guide/css')} >
        <img className={className} src={techStackIcons.cssIcon} alt="CSS" style={iconSize} />
      </button>
      <button style={iconSize} onClick={() => setFrameSrc('https://react.dev/')} >
        <img className={className} src={techStackIcons.reactIcon} alt="React" style={iconSize} />
      </button>
      <button style={iconSize} onClick={() => setFrameSrc('https://mui.com/')} >
        <img className={className} src={techStackIcons.muiIcon} alt="Material UI" style={iconSize} />
      </button>

      <Iframe open={!!frameSrc} src={frameSrc} onClose={() => setFrameSrc(null)} />
    </>
  )
}