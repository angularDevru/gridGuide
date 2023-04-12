import { Theme } from "../helpers";
import styled from '@emotion/native';

export const ChannelBox = styled.TouchableOpacity<{
  top: number;
  height: number;
  theme?: Theme;
}>`
  position: absolute;
  top: ${({ top }) => top}px;
  height: ${({ height }) => height}px;
  width: 100%;
  display: flex;
  left:1050;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary[900]};
`;

export const ChannelLogo = styled.Image`
  max-height: 60px;
  max-width: 60px;
  position: relative;
`;
