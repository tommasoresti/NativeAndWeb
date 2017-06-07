/**
 * Created by tresti on 06.06.17.
 */
export default class Observable<T> {
  callback: (value: T) => void;
  private value: T;

  onReady(callback: (value: T) => void) {
    this.callback = callback
  }

  setValue(value: T) {
    console.log(value);
    this.value = value;
    this.callback(value)
  }
}