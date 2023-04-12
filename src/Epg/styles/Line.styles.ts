import { Layers, Theme } from "../helpers";
import styled from '@emotion/native';

export const Box = styled.View<{ height: number; left: number; theme?: Theme }>`
  position: absolute;
  top: 64px;
  left: ${({ left }) => left}px;
  height: ${({ height }) => height}px;
  width: 3px;
  background: ${({ theme }) => theme.green[300]};
  pointer-events: none;
  z-index: ${Layers.Line};
`;
