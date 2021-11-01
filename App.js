import React, { useCallback, useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeView from "./src/Views/HomeView";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import { Provider } from "react-redux";
import store from "./src/redux/store";
import DetailsView from "./src/Views/DetailsView";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const _preloadResources = async () => {
    try {
      await Font.loadAsync({
        "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
        "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
        "Montserrat-Black": require("./assets/fonts/Montserrat-Black.ttf"),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const _preload = async () => {
    try {
      await SplashScreen.preventAutoHideAsync();
      await _preloadResources();
    } catch (error) {
      console.log(error);
    } finally {
      setAppIsReady(true);
    }
  };

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  useEffect(() => {
    _preload();
  }, []);

  if (!appIsReady) {
    return null;
  }

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name='Home'
            component={HomeView}
            options={{
              headerShown: false,
            }}
            initialParams={{ onLayoutRootView: onLayoutRootView }}
          />
          <Stack.Screen
            name='Details'
            component={DetailsView}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
