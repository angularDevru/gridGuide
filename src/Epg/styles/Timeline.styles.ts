import styled from '@emotion/native';

import { Layers, Theme } from "../helpers";

// Import helpers
import { ITEM_HEIGHT } from "../helpers";

export const TimelineTime = styled.Text<{
  theme?: Theme;
  isBaseTimeFormat?: boolean;
  isRTL?: boolean;
}>`
  color: ${({ theme }) => theme.text.grey[300]};
  top: 18px;
  left: ${({ isRTL, isBaseTimeFormat }) =>
    isRTL && isBaseTimeFormat ? "-32" : "-18"}px;

  ${({ isRTL }) => isRTL && `transform: scale(-1,1)`};
`;

export const TimelineDividers = styled.View`
  height: 100%;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  padding-bottom: 6px;
`;

export const TimelineDivider = styled.View<{ width: number; theme?: Theme }>`
  background: ${({ theme }) => theme.timeline.divider.bg};
  height: 10px;
  width: 1px;
  margin-right: ${({ width }) => width / 4}px;
`;

export const TimelineWrapper = styled.View<{
  isSidebar: boolean;
  dayWidth: number;
  sidebarWidth: number;
  theme?: Theme;
}>`
  top: 0;
  left: ${({ isSidebar, sidebarWidth }) => {
    console.log("ITEM_HEIGHT");

    return (isSidebar ? sidebarWidth : 0)
  }};
  display: flex;
  height: ${ITEM_HEIGHT - 20};
  width: ${({ dayWidth }) => dayWidth};
  background: ${({ theme }) => theme.primary[900]};
  z-index: ${Layers.Timeline};
`;

export const TimelineBox = styled.View<{ width: number }>`
  width: ${({ width }) => width}px;
  font-size: 14px;
  position: relative;
`;
