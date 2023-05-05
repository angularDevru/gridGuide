import * as React from "react";

// Import interfaces
import { Program as ProgramType } from "../helpers/interfaces";
import { BaseTimeFormat } from "../helpers/types";

// Import types
import { ProgramItem } from "../helpers/types";

// Import styles
import { ProgramStyled } from "../styles";

// Import hooks
import { useProgram } from "../hooks";
import { View, Text } from "react-native";

interface ProgramProps<T> {
  isRTL?: boolean;
  isBaseTimeFormat: BaseTimeFormat;
  program: T;
  onClick?: (v: ProgramType) => void;
}

const {
  ProgramBox,
  ProgramContent,
  ProgramFlex,
  ProgramStack,
  ProgramTitle,
  ProgramText,
  ProgramImage,
} = ProgramStyled;

export function Program<T extends ProgramItem>({
  program,
  onClick,
  ...rest
}: ProgramProps<T>) {
  const {
    isRTL,
    isLive,
    isMinWidth,
    styles,
    formatTime,
    set12HoursTimeFormat,
    getRTLSinceTime,
    getRTLTillTime,
  } = useProgram({
    program,
    ...rest,
  });

  const { data } = program;
  const { image, title, since, till } = data;

  const handleOnContentClick = () => onClick?.(data);

  const sinceTime = formatTime(
    getRTLSinceTime(since),
    set12HoursTimeFormat()
  ).toLowerCase();
  const tillTime = formatTime(
    getRTLTillTime(till),
    set12HoursTimeFormat()
  ).toLowerCase();

  return (
    <View
      data-testid="program-item"
      style={{
        ...styles.position,
        ...{
          position: "absolute",
          padding: 4,
          overflow: "hidden"
        }
      }}
    >
      <View
        data-testid="program-content"
        {...rest}
        style={{
          position: "relative",
          display: "flex",
          height: "100%",
          borderRadius: 8,
          padding: 10,
          overflow: "hidden",
          backgroundColor: "#1a202c",
        }}
      >
        <View
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            backgroundColor: "#1a202c",

          }}

        >
          <View>
            <Text style={{
              fontSize: 14,
              textAlign: "left",
              marginTop: 0,
              marginBottom: 5,
              fontWeight: "500",
              color: "white"
            }}>{title}</Text>
            {/* <ProgramText aria-label="program time">
              {sinceTime} - {tillTime}
            </ProgramText> */}
          </View>
        </View>
      </View>
    </View>
  );
}
