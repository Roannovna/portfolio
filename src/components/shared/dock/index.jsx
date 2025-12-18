import { projectIcons } from '@/assets/project-icons/imp';
import { tourCastomIcons } from '@/assets/tour/imp';
import { Iframe } from '@/components/UI/iframe';
import { CustomBtn } from '@/components/UI/tour/custom-btn.js';
import { ipadTokens } from '@/tokens/ipad-ui-tokens.jsx';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import style from './dock.module.css';

const iconSize = {
  width: ipadTokens.icon.spot.w,
  height: ipadTokens.icon.spot.h,
  borderRadius: ipadTokens.icon.spot.br
};

export function Dock({ id, className, style: extraStyle, onOpenTour }) {
  const [frameSrc, setFrameSrc] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <footer id={id} className={`${style.dock__container} ${className}`} style={{ ...extraStyle }}>

        <button className={style.dock__button} style={{ ...iconSize, backgroundImage: `url(${projectIcons.homeIcon})`, backgroundSize: 'contain', backgroundPosition: 'center' }} onClick={() => navigate('/')}></button>

        <button style={iconSize} className={style.dock__button} onClick={() => setFrameSrc('https://roannovna.github.io/slozhno-sosredotochitsya/')}>
          <img src={projectIcons.slozhnoSosredotochitsya} alt="иконка сайта сложно сосредоточиться" />
        </button>

        <button style={iconSize} className={style.dock__button} onClick={() => setFrameSrc('https://roannovna.github.io/zakrivayuschiy-teg/')}>
          <img src={projectIcons.zakrivayuschiyTeg} alt="иконка сайта закрывающий тег" />
        </button>

        <button className={style.dock__button} style={{ ...iconSize, backgroundImage: `url(${projectIcons.contactsIcon})`, backgroundSize: 'contain', backgroundPosition: 'center' }} onClick={() => navigate('/contacts')}></button>

        <div className={style.dock__separator}></div>

        <CustomBtn type="primary" onClick={onOpenTour}>
          <img src={tourCastomIcons.tourBtn} style={iconSize} alt="иконка тура" />
        </CustomBtn>

      </footer>

      <Iframe open={!!frameSrc} src={frameSrc} onClose={() => setFrameSrc(null)} />
    </>
  )
}