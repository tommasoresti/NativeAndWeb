import React from 'react';
import {MainPresenter, MainView} from "../../common/presenter/MainPresenter";

export interface State {
  appName: string
  text: string
}
export interface Props { }

export default class Main extends React.Component<Props, State> implements MainView {

  presenter: MainPresenter;
  state: State = {
    text : "",
    appName: ""
  };

  componentDidMount(): void {
    this.presenter = new MainPresenter(this)
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

  render(): JSX.Element | any {
    return (
      <div>
        {this.state.appName}: {this.state.text}
      </div>
    );
  }
}

