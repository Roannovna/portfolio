import style from './player.module.css'
import { btns } from './vinyl-player/imp'
import { TRACKS } from './tracks-data/tracks-data'
import def_label from './disc-label/roannovna.png'
import { useState, useRef, useEffect } from 'react'
import { ipadTokens, Сontainer} from '/src/tokens/ipad-ui-tokens'

export function Player({ className }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const defaultTrack = {
    artist: 'Roannovna',
    title: 'Frontend Developer',
    cover: def_label,
    media: null
  };

  const currentTrack = isPlaying ? (TRACKS[currentTrackIndex] || defaultTrack) : defaultTrack;

  const handlePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    } else {
      setIsPlaying(true);
      if (audioRef.current && currentTrack.media) {
        audioRef.current.play();
      }
    }
  };

  const handleNext = () => {
    const nextIndex = (currentTrackIndex + 1) % TRACKS.length;
    setCurrentTrackIndex(nextIndex);
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = TRACKS[nextIndex].media;
        audioRef.current.play();
      }
    }
  };

  const handlePrev = () => {
    const prevIndex = currentTrackIndex === 0 ? TRACKS.length - 1 : currentTrackIndex - 1;
    setCurrentTrackIndex(prevIndex);
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = TRACKS[prevIndex].media;
        audioRef.current.play();
      }
    }
  };

  useEffect(() => {
    if (audioRef.current && currentTrack.media) {
      audioRef.current.src = currentTrack.media;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentTrackIndex]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <Сontainer 
      className={className} 
      {...ipadTokens.widget.large} 
      style={{ padding: 0 }}
    >
      <div className={style.player__container}>
        <audio ref={audioRef} />
        <div className={style.vinyl_player}>
          <div className={style.ton_arm__base}></div>
          <div className={style.ton_arm}>
            {/* <div className={style.ton_arm__shoulder}></div>
            <div className={style.ton_arm__arm}></div> */}
          </div>
          <div className={style.vinyl_record}>
            <div className={style.vinyl_record__disc}></div>
            <div className={style.vinyl_record__label}><img src={currentTrack.cover} alt="disk label" /></div>
          </div>
        </div>
        <div className={style.multimedia_block}>
          <div className={style.song__data}>
            <div className={style.song__artist}>{currentTrack.artist}</div>
            <div className={style.song__title}>{currentTrack.title}</div>
          </div>
          <div className={style.control__block}>
            <button className={style.control__btn} onClick={handlePrev}><img src={btns.prev_btn} alt="prev button" /></button>
            <button className={style.control__btn} onClick={handlePlayPause}>
              {isPlaying ? (
                <img src={btns.pause_btn} alt="pause button" />
              ) : (
                <img src={btns.play_btn} alt="play button" />
              )}
            </button>
            <button className={style.control__btn} onClick={handleNext}><img src={btns.next_btn} alt="next button" /></button>
          </div>
        </div>
      </div>
    </Сontainer>
  )
}

// TODO: настроить анимацию из двух частей