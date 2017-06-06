import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import React from 'react'
import color from '../common/resource/color'

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
        <Text>Hello IOS</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('TypeNativeWeb', () => TypeNativeWeb);
