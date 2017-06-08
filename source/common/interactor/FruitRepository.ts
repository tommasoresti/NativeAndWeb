import Fruit from "../model/Fruit";
import Observable from "../../tool/observable/Observable";

export interface FruitRepository {
  getAll(): Observable<Fruit[]>
  getByColor(color: string): Observable<Fruit[]>
}

