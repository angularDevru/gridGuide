// import styled from "@emotion/styled/macro";
import { Layers, Theme } from "../helpers";
import styled from '@emotion/native';

export const Box = styled.View<{
  isTimeline: boolean;
  isRTL: boolean;
  width: number;
  bottom: number;
  theme?: Theme;
}>`
  position: absolute;
  width: ${({ width }) => width}px;
  float: left;
  bottom: ${({ bottom }) => bottom}px;
  left: 0;
  z-index: ${Layers.Sidebar};
  background-color: ${({ theme }) => theme.primary[900]};

  ${({ isRTL }) => isRTL && `transform: scale(-1,1)`};
`;
