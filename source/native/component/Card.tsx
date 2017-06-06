import React from "React";
import {Text, View} from "react-native";

export interface Props {}
export interface State {
  appName: string;
  text: string
}

export class Card extends React.Component<Props, State> {

  render() {
    return (
      <View style={{
        borderRadius: 4,
        shadowOffset: {height: 2, width: 0},
        shadowColor: "#000",
        shadowOpacity: 0.5,
        padding: 16,
        backgroundColor: "#DDD",
        margin: 16
      }}>
        <Text>A Component</Text>
        {this.props.children}
      </View>
    )
  }
}