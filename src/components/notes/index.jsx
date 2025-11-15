import { ipadTokens, Container } from "../../tokens/ipad-ui-tokens.jsx";
import style from "./Notes.module.css";

export function Notes({ className }) {
  return (
    <Container 
      className={className} 
      {...ipadTokens.widget.large} 
      style={{alignItems: "flex-start", 
              flexDirection: "column", 
              justifyContent: "flex-start", 
              alignItems: "flex-start",
              gap: "10px"}}>
      <div className={style.Notes__header} />
      <div className={style.Notes__body}>
        <h3>Обо мне:</h3>
        <ul>
          <li>нравятся интерфейсы, где визуальная ясность помогает человеку без лишнего напряжения понимать, что происходит</li>
          <li>легко погружаюсь в задачу, когда есть смысл и красота в деталях</li>
          <li>хочу развиваться во фронтенде и создавать продукты, которыми буду гордиться</li>
        </ul>
      </div>
    </Container>
  );
}
