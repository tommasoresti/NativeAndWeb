import React from 'react';
import {MainPresenter, MainView} from "../../common/presenter/MainPresenter";

export interface State {
  text
}
export interface Props { }

export default class Main extends React.Component<Props, State> implements MainView {

  presenter: MainPresenter;
  state: State = {
    text : ""
  };

  componentDidMount(): void {
    this.presenter = new MainPresenter(this)
    this.presenter.onStart()
  }

  componentWillUnmount() {
    this.presenter.onStop()
  }

  showText(text: string) {
    this.setState({text: text})
  }

  render(): JSX.Element | any {
    return (
      <div>
        WebView: {this.state.text}
      </div>
    );
  }
}

