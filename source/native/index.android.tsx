import {AppRegistry, StyleSheet, View} from 'react-native';
import React from 'react'
import color from '../common/resource/color'
import {Main} from "./component/Main";

export interface Props {}
export interface State {}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.background,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 16,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class TypeNativeWeb extends React.Component<Props, State>{
  render() {
    return (
      <View style={styles.container}>
        <Main />
      </View>
    );
  }
}

AppRegistry.registerComponent('TypeNativeWeb', () => TypeNativeWeb);
