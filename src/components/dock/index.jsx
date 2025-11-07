import style from './dock.module.css'
import { projectIcons } from './project-icons/imp';
import { useState } from 'react';

export function Dock() {
  const [showFrame, setShowFrame] = useState(false);

  return (
    <div className={style.dock__container}>
      <button className={style.dock__button} onClick={() => setShowFrame(true)}>
        <img src={projectIcons.slozhnoSosredotochitsya} alt="slozhno-sosredotochitsya" />
        {showFrame && (
          <div className={style.dock__frame}>
            <iframe
              src='https://roannovna.github.io/slozhno-sosredotochitsya/' 
              title="Сложно сосредоточиться"
            />
          </div>
        )}
      </button>
    </div>
  )
}