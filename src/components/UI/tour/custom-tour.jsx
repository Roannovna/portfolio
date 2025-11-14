import { Tour } from "antd";
import styled from "styled-components";
import { tourCastomIcons } from "@/assets/tour/imp";

export const CustomTour = styled(Tour).attrs({
  closeIcon: <img src={tourCastomIcons.closeBtn} alt="close" />,
})`
  && {
    background: var(--white) !important;
    color: var(--dark-grey) !important;
    border: none !important;
    box-shadow: none !important;
    outline: none;
  }
`;
