import React, { useEffect, useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import AppContainer from "./src/screens/initial";
import configureStore from "./src/redux/store";

const { store, persistor } = configureStore();

const App = () => {
  const [ready, setReady] = useState(false);

  const loadAsync = async () => {
    await Font.loadAsync({
      icomoon: require("./assets/fonts/icomoon.ttf"),
    });
    setReady(true);
  };

  useEffect(() => {
    loadAsync();
  }, []);

  if (!ready) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<AppLoading />} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
