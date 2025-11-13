import style from './dock.module.css'
import { projectIcons } from './project-icons/imp';
import { useState } from 'react';
import { ipadTokens } from '/src/tokens/ipad-ui-tokens';
import { Iframe } from '../UI/iframe';
import { Button } from 'antd';
import { tourCastumIcons } from '../../assets/tour/imp';

const iconSize = { 
  width: ipadTokens.icon.spot.w, 
  height: ipadTokens.icon.spot.w, 
  borderRadius: ipadTokens.icon.spot.br 
};

export function Dock({ id, className, style: extraStyle, onOpenTour }) {
  const [frameSrc, setFrameSrc] = useState(null);

  return (
    <>
      <footer  id={id} className={`${style.dock__container} ${className}`} style={{...extraStyle}}>

        <Button type="primary" onClick={onOpenTour}>
          <img src={tourCastumIcons.tourBtn} style={iconSize} alt="иконка тура" />
        </Button>

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