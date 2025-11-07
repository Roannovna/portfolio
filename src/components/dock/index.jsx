import style from './dock.module.css'
import { projectIcons } from './project-icons/imp';
import { useState } from 'react';

export function Dock() {
  const [showFrame, setShowFrame] = useState(false);

  return (
    <div className={style.dock__container}>
      <button className={style.dock__button} onClick={() => setShowFrame(true)}>
        <img src={projectIcons.slozhnoSosredotochitsya} alt="иконка сайта сложно сосредоточиться" />
      </button>
      {showFrame && (
        <div className={style.dock__frame}>
          <button className={style.dock__close} onClick={() => setShowFrame(false)}></button>
          <iframe
            src='https://roannovna.github.io/slozhno-sosredotochitsya/' 
            title="Сложно сосредоточиться"
          />
        </div>
      )}
      <button className={style.dock__button} onClick={() => setShowFrame(true)}>
        <img src={projectIcons.zakrivayuschiyTeg} alt="иконка сайта закрывающий тег" />
      </button>
      {showFrame && (
        <div className={style.dock__frame}>
          <button className={style.dock__close} onClick={() => setShowFrame(false)}></button>
          <iframe
            src='https://roannovna.github.io/zakrivayuschiy-teg/' 
            title="Закрывающий тег"
          />
        </div>
      )}
    </div>
  )
}