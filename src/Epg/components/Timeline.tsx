import * as React from "react";

// Import types
import { BaseTimeFormat } from "../helpers/types";

// Import styles
import { TimelineStyled } from "../styles";

// Import hooks
import { useTimeline } from "../hooks";

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







  const renderTime = (index: number) => (
    <TimelineBox data-testid="timeline-item" key={index} width={hourWidth}>
      <TimelineTime isBaseTimeFormat={isBaseTimeFormat} isRTL={isRTL}>
        {formatTime(index + offsetStartHoursRange)}
      </TimelineTime>
      <TimelineDividers>{renderDividers()}</TimelineDividers>
    </TimelineBox>
  );

  const renderDividers = () =>
    dividers.map((_, index) => (
      <TimelineDivider key={index} width={hourWidth} />
    ));

  return (
    <TimelineWrapper
      data-testid="timeline"
      dayWidth={dayWidth}
      sidebarWidth={sidebarWidth}
      isSidebar={isSidebar}
    >
      {time.map((_, index) => renderTime(index))}
    </TimelineWrapper>
  );
}
