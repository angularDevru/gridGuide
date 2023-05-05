import React from "react";
import { ThemeProvider, Global } from "@emotion/react";

// Import interfaces
import { Theme } from "./helpers/interfaces";

// Import helpers
import { TIMELINE_HEIGHT } from "./helpers";

// Import styles
import { EpgStyled } from "./styles";

// Import components
import { Loader } from "./components";
import { View } from "react-native";

interface EpgProps {
  width?: number;
  height?: number;
  isRTL?: boolean;
  isSidebar: boolean;
  isTimeline?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
  loader?: React.ReactNode;
  theme: Theme;
  globalStyles?: string;
  sidebarWidth: number;
}

const { Container, Wrapper, Box } = EpgStyled;

export const Epg = React.forwardRef<any, EpgProps>(
  (
    {
      children,
      width,
      height,
      sidebarWidth,
      theme,
      globalStyles: customGlobalStyles,
      isRTL = false,
      isSidebar = true,
      isTimeline = true,
      isLoading = false,
      loader: LoaderComponent,
      ...rest
    },
    containerRef
  ) => {
    const renderLoader = () => LoaderComponent ?? <Loader />;
    const epgGlobalStyles = customGlobalStyles ?? {};
    console.log("height", height);
    console.log("TIMELINE_HEIGHT", TIMELINE_HEIGHT);

    return (
      <ThemeProvider theme={theme}>
        <View
          data-testid="container"
          ref={containerRef}
          {...rest}
          style={{
            padding: 5,
            height: 1000,
            width: 1000,
            backgroundColor: "gray",
            overflow: "scroll"
          }}
        >
          <Wrapper>
            {isSidebar && isTimeline && (
              <Box
                isRTL={isRTL}
                width={sidebarWidth}
                height={TIMELINE_HEIGHT}
                left={0}
                top={0}
              />
            )}
            {/* {renderLoader()} */}
            {children}
          </Wrapper>
        </View>
      </ThemeProvider>

      // <View data-testid="container" style={{
      //   padding: 5,
      //   height: "100%",
      //   width: "100%",
      //   backgroundColor: "gray"
      // }} ref={containerRef}>
      //   <View
      //     style={{
      //       height: "100%",
      //       width: "100%",
      //       display: "flex",
      //       flexDirection: "column",
      //       position: "relative",
      //       borderRadius: 6,
      //       overflow: "hidden"
      //     }}

      //   >
      //     <View style={{
      //       position: "absolute",
      //       height: 1000,
      //       width: 1200,
      //       top: 0,
      //       backgroundColor: "green",
      //       zIndex: 100,
      //       overflow: "scroll",
      //     }}
      //     />
      //   </View>
      // </View>
    );
  }
);
