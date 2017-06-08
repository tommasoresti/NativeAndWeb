import {FruitRepository} from "../FruitRepository";
import Observable from "../../../tool/observable/Observable";
import Fruit from "../../model/Fruit";

export default class InMemoryFruitRepository implements FruitRepository {

  fruits = [
    new Fruit("orange", "orange"),
    new Fruit("apple", "red"),
    new Fruit("kiwi", "green"),
    new Fruit("banana", "yellow"),
    new Fruit("strawberry", "red"),
  ]

  getAll(): Observable<Fruit[]> {
    let observable = new Observable<Fruit[]>();
    observable.setValue(this.fruits)
    return observable;
  }

  getByColor(color: string): Observable<Fruit[]> {
    let observable = new Observable<Fruit[]>();
    observable.setValue(this.fruits.filter(fruit => fruit.color == color));
    return observable;
  }
}