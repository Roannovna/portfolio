import { techStackIcons } from "./icons/imp";
import { ipadTokens } from '../../tokens/ipad-ui-tokens.jsx';
import { Iframe } from '../UI/iframe';
import { useState } from 'react';
import style from './tech-stack.module.css'


const iconSize = { width: ipadTokens.icon.app.w, height: ipadTokens.icon.app.w };

export function TechStack({ id, className }) {
  const [frameSrc, setFrameSrc] = useState(null);
  
  return (
    <>
      <img id={id} className={`${style.tech_stack__icon} ${className}`} src={techStackIcons.tsIcon} onClick={() => setFrameSrc('https://www.typescriptlang.org/')} alt="TypeScript" style={iconSize} />
      <img id={id} className={`${style.tech_stack__icon} ${className}`} src={techStackIcons.jsIcon} onClick={() => setFrameSrc('https://doka.guide/js')} alt="JavaScript" style={iconSize} />
      <img id={id} className={`${style.tech_stack__icon} ${className}`} src={techStackIcons.htmlIcon} onClick={() => setFrameSrc('https://doka.guide/html')} alt="HTML" style={iconSize} />
      <img id={id} className={`${style.tech_stack__icon} ${className}`} src={techStackIcons.cssIcon} onClick={() => setFrameSrc('https://doka.guide/css')} alt="CSS" style={iconSize} />
      <img id={id} className={`${style.tech_stack__icon} ${className}`} src={techStackIcons.reactIcon} onClick={() => setFrameSrc('https://react.dev/')} alt="React" style={iconSize} />
      <img id={id} className={`${style.tech_stack__icon} ${className}`} src={techStackIcons.muiIcon} onClick={() => setFrameSrc('https://mui.com/')} alt="Material UI" style={iconSize} />

      <Iframe open={!!frameSrc} src={frameSrc} onClose={() => setFrameSrc(null)} />
    </>
  )
}