import React from 'react';
import {MainPresenter, MainView} from "../../common/presenter/MainPresenter";

export interface State {
  items: string[];
  text
}
export interface Props { }

export default class Main extends React.Component<Props, State> implements MainView {

  presenter: MainPresenter;
  state: State = {
    text : "",
    items: []
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

  showItems(items: [string]) {
    this.setState({items: items})
  }

  render(): JSX.Element | any {
    return (
      <div>
        WebView: {this.state.text}
      </div>
    );
  }
}

