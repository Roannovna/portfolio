import style from './dock.module.css'
import { projectIcons } from './project-icons/imp';
import { useState } from 'react';
import { ipadTokens } from '@/tokens/ipad-ui-tokens.jsx';
import { Iframe } from '@/components/UI/iframe';
import { tourCastomIcons } from '@/assets/tour/imp';
import { CustomBtn } from '@/components/UI/tour/custom-btn.js';

const iconSize = { 
  width: ipadTokens.icon.spot.w, 
  height: ipadTokens.icon.spot.h, 
  borderRadius: ipadTokens.icon.spot.br 
};

export function Dock({ id, className, style: extraStyle, onOpenTour }) {
  const [frameSrc, setFrameSrc] = useState(null);

  return (
    <>
      <footer  id={id} className={`${style.dock__container} ${className}`} style={{...extraStyle}}>

        <CustomBtn type="primary" onClick={onOpenTour}>
          <img src={tourCastomIcons.tourBtn} style={iconSize} alt="иконка тура" />
        </CustomBtn>

        <button style={iconSize} className={style.dock__button} onClick={() => setFrameSrc('https://roannovna.github.io/slozhno-sosredotochitsya/')}>
          <img src={projectIcons.slozhnoSosredotochitsya} alt="иконка сайта сложно сосредоточиться" />
        </button>

        <button style={iconSize} className={style.dock__button} onClick={() => setFrameSrc('https://roannovna.github.io/zakrivayuschiy-teg/')}>
          <img src={projectIcons.zakrivayuschiyTeg} alt="иконка сайта закрывающий тег" />
        </button>

      </footer>

      <Iframe open={!!frameSrc} src={frameSrc} onClose={() => setFrameSrc(null)} />
    </>
  )
}