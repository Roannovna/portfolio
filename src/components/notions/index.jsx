import { ipadTokens, Сontainer } from "../../tokens/ipad-ui-tokens.jsx";
import style from "./notions.module.css";

export function Notions({ className }) {
  return (
    <Сontainer 
      className={className} 
      {...ipadTokens.widget.large} 
      style={{alignItems: "flex-start", 
              flexDirection: "column", 
              justifyContent: "flex-start", 
              alignItems: "flex-start"}}>
      <div className={style.notions__header} />
      <div className={style.notions__body}>
        <h3>Обо мне:</h3>
        <ul>
          <li>люблю интерфейсы, где визуальная ясность помогает человеку без лишнего напряжения понимать, что происходит</li>
          <li>легко погружаюсь в задачу, когда есть смысл и красота в деталях</li>
          <li>хочу развиваться во фронтенде и создавать продукты, за которые буду гордиться</li>
        </ul>
        
      </div>
    </Сontainer>
  );
}
