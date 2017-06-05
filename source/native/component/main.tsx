import React from "React";
import {MainPresenter, MainView} from "../../common/presenter/MainPresenter";
import {Text, View} from "react-native";

export interface Props {}
export interface State {
  appName: string;
  text: string
}

export class Main extends React.Component<Props, State> implements MainView {

  state: State = {
    text: "",
    appName: ""
  }
  presenter: MainPresenter;

  componentDidMount() {
    this.presenter = new MainPresenter(this);
    this.presenter.onStart()
  }

  componentWillUnmount() {
    this.presenter.onStop()
  }

  showAppName(appName: string) {
    this.setState({appName: appName})
  }

  showText(text: string) {
    this.setState({text: text})
  }

  render() {
    return (
      <View style={{width: "100%", flex: 1}}>
        <Text style={{marginTop: 20}}>{this.state.appName}: {this.state.text}</Text>
      </View>
    )
  }
}