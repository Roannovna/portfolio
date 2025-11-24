import { PictureNew } from "./day-night-pic/picture-new.jsx";
import { ipadTokens, Container } from "@/tokens/ipad-ui-tokens";

export function DayNightWidget({
  id,
  className,
}: {
  id?: string;
  className?: string;
}) {
  return (
    <Container id={id} className={className} {...ipadTokens.widget.large}>
      <PictureNew />
    </Container>
  );
}
