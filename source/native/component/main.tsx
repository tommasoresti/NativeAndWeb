import React from "React";
import {MainPresenter, MainView} from "../../common/presenter/MainPresenter";
import {Text, View} from "react-native";

export interface Props {}
export interface State {
  text: string
}

export class Main extends React.Component<Props, State> implements MainView {

  state: State = {
    text: ""
  }
  presenter: MainPresenter;

  componentDidMount() {
    this.presenter = new MainPresenter(this);
    this.presenter.onStart()
  }

  componentWillUnmount() {
    this.presenter.onStop()
  }

  showText(text: string) {
    this.setState({text: text})
  }

  render() {
    return (
      <View style={{width: "100%", flex: 1}}>
        <Text style={{marginTop: 20}}>NativeView: {this.state.text}</Text>
      </View>
    )
  }
}