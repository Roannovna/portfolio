import style from './player.module.css'
import prev_btn from './vinyl-player/prev-btn.svg'
import play_btn from './vinyl-player/play-btn.svg'
import pause_btn from './vinyl-player/pause-btn.svg'
import next_btn from './vinyl-player/next-btn.svg'

const artistName = 'Roannovna'
const songTitle = 'Frontend developer'

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
          <div className={style.vinyl_record__label}></div>
        </div>
      </div>
      <div className={style.multimedia_block}>
        <div className={style.song__data}>
          <div className={style.song__artist}>{artistName}</div>
          <div className={style.song__title}>{songTitle}</div>
        </div>
        <div className={style.control__block}>
          <button className={style.control__btn}><img src={prev_btn} alt="prev button" /></button>
          <button className={style.control__btn}><img src={play_btn} alt="play button" /></button>
          <button className={style.control__btn}><img src={next_btn} alt="next button" /></button>
        </div>
      </div>
    </div>
  )
}

// TODO: настроить анимацию из двух частей