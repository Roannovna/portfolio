import style from "./iframe.module.css";

export function Iframe({
  src,
  onClose,
  open,
}: {
  src: string;
  onClose: () => void;
  open: boolean;
}) {
  if (!src || !open) return null;

  return (
    <div className={style.frame__container}>
      <button className={style.frame__close_btn} onClick={onClose} />
      <iframe src={src} />
    </div>
  );
}
