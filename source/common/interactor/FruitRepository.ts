import Fruit from "../model/Fruit";
import Observable from "../../tool/observable/Observable";

export interface FruitRepository {
  getAll(): Observable<Fruit[]>
  getByColor(color: string): Observable<Fruit[]>
}

export class JSFruitRepository implements FruitRepository {

  getAll(): Observable<Fruit[]> {
    let observable = new Observable<Fruit[]>();
    this.getAllFruitsJson((json) =>
      observable.setValue(JSFruitAdapter.build(json.fruits)));
    return observable
  }

  getByColor(color: string): Observable<Fruit[]> {
    let observable = new Observable<Fruit[]>();
    this.getAllFruitsJson((json) => {
      let fruits = JSFruitAdapter.build(json.fruits);
      observable.setValue(fruits.filter(fruit => fruit.color == color));
    })
    return observable
  }

  private getAllFruitsJson(callback: (json: any) => void) {
    fetch('http://jsonstub.com/fruits', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'JsonStub-User-Key': 'b81b564b-82b7-4fbe-92cc-d5d9fd467c08',
        'JsonStub-Project-Key': 'de185534-d1f8-4048-806a-db6edc668a46'
      }
    }).then((response) => response.json())
      .then((data) => callback(data))
      .catch((reason) => console.log(reason));
  }
}

class JSFruitAdapter {
  static build(json: any) : Fruit[] {
    let fruits: Fruit[] = [];
    for (let fruit of json) {
      fruits.push(new Fruit(fruit.name, fruit.color))
    }

    return fruits
  }
}