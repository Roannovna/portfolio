import { CalendarCovers } from "./calendar-covers";
import { ipadTokens, Container } from "@/tokens/ipad-ui-tokens";
import { CalendarAntd } from "./calendar-antd/index";

export function Calendar({
  id,
  className,
}: {
  id?: string;
  className?: string;
}) {
  return (
    <Container
      id={id}
      className={className}
      {...ipadTokens.widget.medium}
      style={{ gap: "10px", padding: "10px" }}
    >
      <CalendarAntd />
      <CalendarCovers />
    </Container>
  );
}
