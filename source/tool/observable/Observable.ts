
export default class Observable<T> {
  callback: (value: T) => void = null;
  private value: T = null;

  onReady(callback: (value: T) => void) {
    this.callback = callback
    if(this.value != null) {
      this.callback(this.value)
    }
  }

  setValue(value: T) {
    console.log(value);
    this.value = value;
    if(this.callback != null)
      this.callback(value)
  }
}