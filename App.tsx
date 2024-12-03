import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { BoxObjectModel } from './src/presentation/views/BoxObjectModel';
import { Position } from './src/presentation/views/Position';
import { FlexBox } from './src/presentation/views/FlexBox';
import { FlexDirection } from './src/presentation/views/FlexDirection';
import { FlexExcercises } from './src/presentation/views/FlexExercises';


function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{flex:1}}>
      {/* <HelloWorld /> */}
      {/* <CounterApp /> */}
      {/* <BoxObjectModel /> */}
      {/* <Position /> */}
      {/* <FlexBox /> */}
      {/* <FlexDirection /> */}
      <FlexExcercises />
    </SafeAreaView>
  );
}

export default App;
