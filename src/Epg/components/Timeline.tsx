import * as React from "react";

// Import types
import { BaseTimeFormat } from "../helpers/types";

// Import styles
import { TimelineStyled } from "../styles";

// Import hooks
import { useTimeline } from "../hooks";
import {

  Text, View
} from 'react-native';
import { ITEM_HEIGHT } from "../helpers";
const {
  TimelineWrapper,
  TimelineBox,
  TimelineTime,
  TimelineDividers,
  TimelineDivider,
} = TimelineStyled;

interface TimelineProps {
  isRTL?: boolean;
  isBaseTimeFormat: BaseTimeFormat;
  isSidebar: boolean;
  dayWidth: number;
  hourWidth: number;
  numberOfHoursInDay: number;
  offsetStartHoursRange: number;
  sidebarWidth: number;
}

export function Timeline({
  isRTL,
  isBaseTimeFormat,
  isSidebar,
  dayWidth,
  hourWidth,
  numberOfHoursInDay,
  offsetStartHoursRange,
  sidebarWidth,
}: TimelineProps) {
  const { time, dividers, formatTime } = useTimeline(
    numberOfHoursInDay,
    isBaseTimeFormat
  );

  const renderTime = (index: number) => {

    return (
      <View data-testid="timeline-item" key={index} style={{
        width: hourWidth,
        position: "relative"
      }}>
        {/* <Text >{formatTime(index + offsetStartHoursRange)}</Text> */}
        <Text
          style={{
            color: "grey",
            fontSize: 14,
            top: 18
          }}
        >
          {formatTime(index + offsetStartHoursRange)}
        </Text>
        <View style={{
          height: "100%",
          width: "100%",
          alignItems: "center",
          paddingBottom: 6
        }}>{renderDividers()}</View>
      </View>
    )
  };

  const renderDividers = () =>
    dividers.map((_, index) => (
      <View
        key={index}
        style={{
          backgroundColor: "gray",
          height: 10,
          width: 1,
          marginRight: hourWidth / 4
        }}
      />
    ));

  return (
    <View
      data-testid="timeline"
      style={{
        left: sidebarWidth,
        display: "flex",
        height: ITEM_HEIGHT - 20,
        width: dayWidth,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#171923"
      }}
    >
      {time.map((_, index) => renderTime(index))}
    </View>
  );
}
