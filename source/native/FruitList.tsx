import * as React from "react";
import {FruitListPresenter, FruitListView} from "../common/presenter/FruitListPresenter";
import {FruitRepository} from "../common/interactor/FruitRepository";
import Fruit from "../common/model/Fruit";
import {Switch, Text, View} from "react-native";
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

  filterValueChange(filter: boolean) {
    this.setState({filter: filter})
    if(filter) {
      this.presenter.onFilterForColor("red")
    }
    else {
      this.presenter.onNoFilters()
    }
  }

  render() {

    let rows = [];
    for (let fruit of this.state.fruits) {
      rows.push(<Text key={fruit.name}>{fruit.name}</Text>)
    }

    return (
      <View>
        <Text style={{margin: 16}}>Some fruits:</Text>
        {rows}

        <View style={{flexDirection: "row", margin: 16}}>
          <Text>Filter not red color: </Text>
          <Switch
          onValueChange={(value) => {this.filterValueChange(value)}}
          style={{marginBottom: 10}}
          value={this.state.filter}/>
        </View>
      </View>
    )
  }
}