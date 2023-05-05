/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { Epg, Layout, useEpg } from './Epg';
import { useApp } from './Epg/useApp';

const Section = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => any = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  // const {
  //   getEpgProps,
  //   getLayoutProps,
  //   onScrollToNow,
  //   onScrollLeft,
  //   onScrollRight,
  // } = useEpg({
  //   startDate: new Date(), // or 2022-02-02T00:00:00
  // });


  const { isLoading, getEpgProps, getLayoutProps } = useApp();

  return (
    <SafeAreaView>
      {/* <ScrollView
        contentInsetAdjustmentBehavior="always"
        horizontal={true}
        style={{ ...backgroundStyle, marginHorizontal: 20, overflow: "scroll" }}> */}
      <View style={{ backgroundColor: "green" }}>
        <Epg {...getEpgProps()}>
          <Layout
            {...getLayoutProps()}
          />
        </Epg>

      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
