// import styled from "@emotion/styled/macro";
import { Layers, Theme } from "../helpers";
import styled from '@emotion/native';
export const Container = styled.View<{
  height?: number;
  width?: number;
}>`
  padding: 5px;
  height: ${({ height }) => (height ? `${height}px` : "100%")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  background-color: gray
`;

export const Wrapper = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
`;

export const ScrollBox = styled.ScrollView<{ theme?: Theme; isRTL?: boolean }>`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: auto;
  scroll-behavior: smooth;
  background: ${({ theme }) => theme.primary[900]};

  ${({ isRTL }) => isRTL && `transform: scale(-1,1)`};
`;

export const Box = styled.View<{
  isRTL?: boolean;
  width: number;
  height: number;
  left?: number;
  top?: number;
  theme?: Theme;
}>`
  position: absolute;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  top: ${({ top = 0 }) => top}px;
  background: ${({ theme }) => theme.primary[900]};
  z-index: ${Layers.EpgCornerBox};

  ${({ isRTL, left = 0 }) => (isRTL ? `right:0px;` : ` left: ${left}px`)};
`;

export const Content = styled.View<{
  width: number;
  height: number;
  sidebarWidth: number;
  isSidebar: boolean;
  theme?: Theme;
}>`
  background: ${({ theme }) => theme.primary[900]};
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  position: relative;
  left: ${({ isSidebar, sidebarWidth }) => (isSidebar ? sidebarWidth : 0)}px;
`;
