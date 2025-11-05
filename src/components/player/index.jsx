import style from './player.module.css'
import { btns } from './vinyl-player/imp'
import def_label from './disc-label/roannovna.png'

const artistName = 'Roannovna';
const songTitle = 'Frontend Developer';
const diskLabel = def_label;

export function Player() {
  return (
    <div className={style.player__container}>
      <div className={style.vinyl_player}>
        <div className={style.ton_arm__base}></div>
        <div className={style.ton_arm}>
          {/* <div className={style.ton_arm__shoulder}></div>
          <div className={style.ton_arm__arm}></div> */}
        </div>
        <div className={style.vinyl_record}>
          <div className={style.vinyl_record__disc}></div>
          <div className={style.vinyl_record__label}><img src={diskLabel} alt="disk label" /></div>
        </div>
      </div>
      <div className={style.multimedia_block}>
        <div className={style.song__data}>
          <div className={style.song__artist}>{artistName}</div>
          <div className={style.song__title}>{songTitle}</div>
        </div>
        <div className={style.control__block}>
          <button className={style.control__btn}><img src={btns.prev_btn} alt="prev button" /></button>
          <button className={style.control__btn}><img src={btns.play_btn} alt="play button" /></button>
          <button className={style.control__btn} disabled><img src={btns.pause_btn} alt="pause button" /></button>
          <button className={style.control__btn}><img src={btns.next_btn} alt="next button" /></button>
        </div>
      </div>
    </div>
  )
}

// TODO: настроить анимацию из двух частей