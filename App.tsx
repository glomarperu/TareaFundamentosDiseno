import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { BoxObjectModel } from './src/presentation/views/BoxObjectModel';
import { Position } from './src/presentation/views/Position';
import { FlexBox } from './src/presentation/views/FlexBox';
import { FlexDirection } from './src/presentation/views/FlexDirection';
import { FlexExcercises } from './src/presentation/views/FlexExercises';
import { Exercises06 } from './src/presentation/views/Exercises06';
import { Exercises07 } from './src/presentation/views/Exercises07';
import { Exercises08 } from './src/presentation/views/Exercises08';
import { Exercises09 } from './src/presentation/views/Exercises09';
import { Exercises10 } from './src/presentation/views/Exercises10';


function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{flex:1}}>
      {/* <HelloWorld /> */}
      {/* <CounterApp /> */}
      {/* <BoxObjectModel /> */}
      {/* <Position /> */}
      {/* <FlexBox /> */}
      {/* <FlexDirection /> */}
      {/* <FlexExcercises /> */}
      {/* <Exercises06 /> */}
      {/* <Exercises07 /> */}
      {/* <Exercises08 /> */}
      {/* <Exercises09 /> */}
      <Exercises10 />
    </SafeAreaView>
      
  );
}

export default App;
