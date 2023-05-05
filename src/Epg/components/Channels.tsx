import * as React from "react";
// Import interfaces
import { ChannelWithPosition } from "../helpers/types";

// Import styles
import { ChannelsStyled } from "../styles";

// Import Components
import { Channel } from "../components";
import { View } from "react-native";

interface ChannelsProps {
  isTimeline: boolean;
  isRTL: boolean;
  isChannelVisible: (position: any) => boolean;
  channels: ChannelWithPosition[];
  scrollY: number;
  sidebarWidth: number;
  renderChannel?: (v: { channel: ChannelWithPosition }) => React.ReactNode;
}

const { Box } = ChannelsStyled;

export function Channels(props: ChannelsProps) {
  const { channels, scrollY, sidebarWidth, renderChannel } = props;
  console.log("channels", channels);

  const { isRTL, isTimeline, isChannelVisible } = props;

  const renderChannels = (channel: ChannelWithPosition) => {
    const isVisible = isChannelVisible(channel.position);
    console.log(isVisible);
    console.log(renderChannel);

    if (isVisible) {
      if (renderChannel) return renderChannel({ channel });
      return <Channel key={channel.uuid} channel={channel} />;
    }
    return null;
  };

  return (
    <View
      data-testid="sidebar"
      style={{
        position: "absolute",
        width: sidebarWidth,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        bottom: scrollY,
        left: 0,
        top: 60,
        backgroundColor: "#171923"
      }}
    >
      {channels.map(renderChannels)}
    </View>
  );
}
