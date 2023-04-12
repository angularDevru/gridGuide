import { Layers, Theme } from "../helpers";
import styled from '@emotion/native';

export const ProgramBox = styled.View<{ width: number }>`
  position: absolute;
  padding: ${({ width }) => (width === 0 ? 0 : 4)}px;
  overflow: hidden;
`;

export const ProgramContent = styled.SwipeableListView<{
  isLive: boolean;
  width: number;
  theme?: Theme;
}>`
  position: relative;
  display: flex;
  font-size: 11px;
  height: 100%;
  border-radius: 8px;
  padding: 10px ${({ width }) => (width < 30 ? 4 : 20)}px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  background: ${({ theme: { primary } }) =>
    `linear-gradient(to right, ${primary[600]}, ${primary[600]})`};
  z-index: ${Layers.Program};

  &:hover {
    background: ${({ theme: { gradient } }) =>
    `linear-gradient(to right, ${gradient.blue[900]}, ${gradient.blue[600]})`};
  }

  ${({ isLive, theme: { gradient } }) =>
    isLive &&
    `background: linear-gradient(to right, ${gradient.blue[900]}, ${gradient.blue[600]},${gradient.blue[300]})`}
`;

export const ProgramFlex = styled.View`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const Elipsis = `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProgramTitle = styled.View<{ theme?: Theme }>`
  font-size: 14px;
  text-align: left;
  margin-top: 0;
  margin-bottom: 5px;
  font-weight: 500;
  color: ${({ theme }) => theme.grey[300]};
  ${Elipsis}
`;

export const ProgramText = styled.View<{ theme?: Theme }>`
  display: block;
  font-size: 12.5px;
  font-weight: 400;
  color: ${({ theme }) => theme.text.grey[500]};
  text-align: left;
  ${Elipsis}
`;

export const ProgramImage = styled.Image`
  margin-right: 15px;
  border-radius: 6px;
  width: 100px;
`;

export const ProgramStack = styled.View<{ isRTL?: boolean }>`
  overflow: hidden;
  ${({ isRTL }) =>
    isRTL &&
    `transform: scale(-1,1); 
     display: flex; 
     flex-direction: column; 
     align-items: flex-end`};
`;
