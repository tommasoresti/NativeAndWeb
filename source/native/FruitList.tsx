import * as React from "react";
import {FruitListPresenter, FruitListView} from "../common/presenter/FruitListPresenter";
import {FruitRepository} from "../common/interactor/FruitRepository";
import Fruit from "../common/model/Fruit";
import {Switch, Text, View, StyleSheet} from "react-native";
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
    this.presenter.onNoFilterSet()
  }

  showFruit(fruits: Fruit[]) {
    this.setState({fruits: fruits})
  }

  filterValueChange(filter: boolean) {
    this.setState({filter: filter})

    if(filter) this.presenter.onFilterForColorSet("red")
    else this.presenter.onNoFilterSet()
  }

  render() {

    let rows = [];
    for (let fruit of this.state.fruits) {
      rows.push(
        <View key={fruit.name} style={styles.fruit}>
          <Text style={{color: fruit.color}}>{fruit.name}</Text>
        </View>)
    }

    return (
      <View>
        <View style={{flexDirection: "row", margin: 16}}>
          <Text style={{lineHeight: 30}}>Filter not red color: </Text>
          <Switch
            onValueChange={(value) => {this.filterValueChange(value)}}
            value={this.state.filter}/>
        </View>
        {rows}
      </View>
    )
  }
}

const styles: any = StyleSheet.create({
  fruit: {
    margin: 8,
    padding: 8,
    borderRadius: 10,
    backgroundColor: "#281f10"
  }
});