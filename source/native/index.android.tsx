import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import React from 'react'
import color from '../common/resource/color'
import InMemoryFruitRepository from "../common/interactor/implementation/InMemoryFruitRepository";
import FruitList from "./FruitList";

export interface Props {}
export interface State {}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.background,
  }
});

export default class TypeNativeWeb extends React.Component<Props, State>{
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Android</Text>
        <FruitList repository={new InMemoryFruitRepository()}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('TypeNativeWeb', () => TypeNativeWeb);
