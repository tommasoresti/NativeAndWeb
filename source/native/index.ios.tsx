import {AppRegistry, StyleSheet, View} from 'react-native';
import React from 'react'
import color from '../common/resource/color'
import {Main} from "native/component/Main";

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
        <Main/>
      </View>
    );
  }
}

AppRegistry.registerComponent('TypeNativeWeb', () => TypeNativeWeb);
