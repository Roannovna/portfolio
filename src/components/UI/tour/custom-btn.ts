import { Button } from "antd";
import styled from "styled-components";
import { ipadTokens } from "@/tokens/ipad-ui-tokens.tsx";

export const CustomBtn = styled(Button)`
  background: var(--white);
  width: ${ipadTokens.icon.spot.w}px;
  height: ${ipadTokens.icon.spot.h}px;
  border-radius: ${ipadTokens.icon.spot.br}px;
  box-shadow: none;
  border: none;
  outline: none;
  cursor: pointer;

  && {
    background: var(--white) !important;
    color: none !important;
    border: none !important;
    box-shadow: none !important;
    outline: none;
  }

  &&:hover,
  &&.ant-btn-variant-solid:hover {
    background: var(--white) !important;
    color: none !important;
    transform: var(--transform-hover);
    transition: var(--transition-hover);
  }
`;
