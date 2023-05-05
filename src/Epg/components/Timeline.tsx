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
  console.log(isRTL);
  console.log(isBaseTimeFormat);
  console.log(isSidebar);
  console.log(dayWidth);
  console.log(hourWidth);
  console.log(numberOfHoursInDay);
  console.log(sidebarWidth);







  const renderTime = (index: number) => {
    console.log(formatTime(index + offsetStartHoursRange));


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
        <TimelineDividers>{renderDividers()}</TimelineDividers>
      </View>
    )
  };

  const renderDividers = () =>
    dividers.map((_, index) => (
      <TimelineDivider key={index} width={hourWidth} />
    ));

  console.log("time", time);

  return (
    <View
      data-testid="timeline"
      style={{
        top: 0,
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
