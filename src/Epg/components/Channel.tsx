import * as React from "react";

// Import interfaces
import { ChannelWithPosition } from "../helpers/types";

// Import styles
import { ChannelStyled } from "../styles";
import { View, Image } from "react-native";

interface ChannelProps<T> {
  channel: T;
  onClick?: (v: ChannelWithPosition) => void;
}

const { ChannelBox, ChannelLogo } = ChannelStyled;

export function Channel<T extends ChannelWithPosition>({
  channel,
  onClick,
  ...rest
}: ChannelProps<T>) {
  const { position, logo } = channel;
  return (
    <View
      data-testid="sidebar-item"
      style={{
        height: 80,
        width: 100,
        left: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#171923",
        borderBottomColor: "white",
        borderBottomWidth: 1,
      }}
    >
      <Image source={{ uri: logo }} alt="Logo" style={{
        height: 50,
        width: 50,
        position: "relative"
      }} />
    </View>
  );
}
