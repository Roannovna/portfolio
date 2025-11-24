import style from "./player.module.css";
import { btns } from "@/assets/player/vinyl-player/imp";
import { TRACKS } from "./tracks-data/tracks-data";
import def_label from "@/assets/player/disc-label/roannovna.png";
import { useState, useRef, useEffect } from "react";
import { ipadTokens, Container } from "@/tokens/ipad-ui-tokens";

export function Player({ id, className }: { id?: string; className?: string }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = TRACKS[currentTrackIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = currentTrack.media as string;
  }, [currentTrack.media]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.play();
    else audio.pause();
  }, [isPlaying, currentTrack.media]);

  const handlePlayPause = () => setIsPlaying((p) => !p);
  const handleNext = () => setCurrentTrackIndex((i) => (i + 1) % TRACKS.length);
  const handlePrev = () =>
    setCurrentTrackIndex((i) => (i === 0 ? TRACKS.length - 1 : i - 1));

  return (
    <Container
      id={id}
      className={className}
      {...ipadTokens.widget.large}
      style={{ padding: 0 }}
    >
      <div className={style.player__container}>
        <audio ref={audioRef} preload="none" />
        <div
          className={`${style.vinyl_player} ${
            isPlaying ? style.is_playing : ""
          }`}
        >
          <div className={style.ton_arm__base}></div>
          <div className={style.ton_arm}></div>
          <div className={style.vinyl_record}>
            <div className={style.vinyl_record__disc}></div>
            <div className={style.vinyl_record__label}>
              <img
                src={isPlaying ? currentTrack.cover : def_label}
                alt="disk label"
              />
            </div>
          </div>
        </div>
        <div className={style.multimedia_block}>
          <div className={style.song__data}>
            <div className={style.song__artist}>
              {isPlaying ? currentTrack.artist : "Roannovna"}
            </div>
            <div className={style.song__title}>
              {isPlaying ? currentTrack.title : "Frontend Developer"}
            </div>
          </div>
          <div className={style.control__block}>
            <button className={style.control__btn} onClick={handlePrev}>
              <img src={btns.prev_btn} alt="prev button" />
            </button>
            <button className={style.control__btn} onClick={handlePlayPause}>
              {isPlaying ? (
                <img src={btns.pause_btn} alt="pause button" />
              ) : (
                <img src={btns.play_btn} alt="play button" />
              )}
            </button>
            <button className={style.control__btn} onClick={handleNext}>
              <img src={btns.next_btn} alt="next button" />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
