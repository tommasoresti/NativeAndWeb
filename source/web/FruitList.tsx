import * as React from "react";
import {FruitListPresenter, FruitListView} from "../common/presenter/FruitListPresenter";
import Fruit from "../common/model/Fruit";
import {FruitRepository} from "../common/interactor/FruitRepository";
/**
 * Created by tresti on 06.06.17.
 */

export interface P {repository: FruitRepository}
export interface S {
  fruits: Fruit[],
  filter: boolean
}

export default class FruitList extends React.Component<P, S> implements FruitListView {
  presenter: FruitListPresenter;
  state = {
    fruits: [],
    filter: false
  }

  componentDidMount() {
    this.presenter = new FruitListPresenter(this, this.props.repository)
    this.presenter.onNoFilters()
  }

  showFruit(fruits: Fruit[]) {
    this.setState({fruits: fruits})
  }

  filterValueChange() {
    let newState = !this.state.filter;
    this.setState({ filter: newState });
    if(newState) {
      this.presenter.onFilterForColor("red")
    }
    else {
      this.presenter.onNoFilters()
    }
  }

  render() {

    let rows = [];
    for (let fruit of this.state.fruits) {
      rows.push(<div key={fruit.name} style={{color: fruit.color}}>{fruit.name}</div>)
    }

    return (
      <div>
        <span style={{margin: 16}}>Some fruits:</span>
        {rows}

        <div style={{flexDirection: "row", margin: 16}}>
          <span>Filter not red color: </span>
          <input
            type="checkbox"
            value="Filter not red color"
            checked={this.state.filter}
            onChange={() => this.filterValueChange()}
          />
        </div>
      </div>
    )
  }
}