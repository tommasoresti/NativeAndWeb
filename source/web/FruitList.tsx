import * as React from "react";
import {FruitListPresenter, FruitListView} from "../common/presenter/FruitListPresenter";
import Fruit from "../common/model/Fruit";
import {FruitRepository} from "../common/interactor/FruitRepository";

export interface P {repository: FruitRepository}
export interface S {fruits: Fruit[]}

export default class FruitList extends React.Component<P, S> implements FruitListView {
  presenter: FruitListPresenter;
  state = {
    fruits: []
  }

  componentDidMount() {
    this.presenter = new FruitListPresenter(this, this.props.repository)
    this.presenter.onStart()
  }

  showFruit(fruits: Fruit[]) {
    this.setState({fruits: fruits})
  }

  render() {

    let rows = [];
    for (let fruit of this.state.fruits) {
      rows.push(<div key={fruit.name}>{fruit.name}</div>)
    }

    return (
      <div>{rows}</div>
    )
  }
}