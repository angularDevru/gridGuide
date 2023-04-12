import * as React from "react";
import { View } from "react-native";

import { theme } from "../theme/theme";

// Import styles
import { LoaderStyled } from "../styles";

const { Box, Shape } = LoaderStyled;

const Element = ({
  width,
  color,
  animate,
  marginRight,
  transition,
}: {
  width: number;
  color: string;
  transition: { duration: number; ease?: string; delay?: number };
  animate: { right: any[] };
  marginRight?: number;
}) => (
  <Shape
    width={width}
    color={color}
    animate={animate}
    transition={transition}
    marginRight={marginRight}
  />
);

export function Loader() {
  return (
    <Box aria-label="loading">
      <View>
        <View
          style={{ display: "flex", marginBottom: 16 }}
        >
          <Element
            animate={{
              right: [0, 75, 0],
            }}
            transition={{
              duration: 1,
            }}
            width={217}
            color={theme.loader.teal}
            marginRight={10}
          />
          <Element
            width={122}
            color={theme.loader.purple}
            animate={{
              right: [0, 50, 0],
            }}
            transition={{
              duration: 1,
              delay: 0.02,
            }}
          />
        </View>
        <View
          style={{ display: "flex", marginBottom: 16 }}
        >
          <Element
            width={267}
            color={theme.loader.pink}
            animate={{
              right: [0, 70, 0],
            }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
          />
        </View>
        <View style={{ display: "flex" }}>
          <Element
            width={217}
            color={theme.loader.purple}
            marginRight={10}
            animate={{
              right: [0, 95, 0],
            }}
            transition={{
              delay: 0.3,
              duration: 1,
            }}
          />
          <Element
            width={80}
            color={theme.loader.teal}
            animate={{
              right: [0, 70, 0],
            }}
            transition={{
              duration: 1,
              delay: 0.33,
            }}
          />
        </View>
      </View>
    </Box>
  );
}
