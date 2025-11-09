import style from './dock.module.css'
import { projectIcons } from './project-icons/imp';
import { useState } from 'react';
import { ipadTokens } from '/src/tokens/ipad-ui-tokens';

const iconSize = { 
  width: ipadTokens.icon.spot.w, 
  height: ipadTokens.icon.spot.w, 
  borderRadius: ipadTokens.icon.spot.br 
};

export function Dock({ className, style: extraStyle }) {
  const [frameSrc, setFrameSrc] = useState(null);

  return (
    <>
      <footer className={`${style.dock__container} ${className}`} style={{...extraStyle}}>

        <button style={iconSize} className={style.dock__button} onClick={() => setFrameSrc('https://roannovna.github.io/slozhno-sosredotochitsya/')}>
          <img src={projectIcons.slozhnoSosredotochitsya} alt="иконка сайта сложно сосредоточиться" />
        </button>

        <button style={iconSize} className={style.dock__button} onClick={() => setFrameSrc('https://roannovna.github.io/zakrivayuschiy-teg/')}>
          <img src={projectIcons.zakrivayuschiyTeg} alt="иконка сайта закрывающий тег" />
        </button>

      </footer>

      {frameSrc && (
        <div className={style.dock__frame}>
          <button className={style.dock__close} onClick={() => setFrameSrc(null)} />
          <iframe src={frameSrc} />
        </div>
      )}
    </>
  )
}