import { ipadTokens, Сontainer } from "../../tokens/ipad-ui-tokens.jsx";
import style from "./notions.module.css";

export function Notions() {
  return (
    <Сontainer {...ipadTokens.widget.large} 
      style={{alignItems: "flex-start", 
              flexDirection: "column", 
              justifyContent: "flex-start", 
              alignItems: "flex-start"}}>
      <div className={style.notions__header} />
      <div className={style.notions__body}>
        <h3>Обо мне:</h3>
        <ul>
          <li>Notions</li>
          <li>Notions</li>
          <li>Notions</li>
        </ul>
        
      </div>
    </Сontainer>
  );
}
