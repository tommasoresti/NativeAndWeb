export interface PresenterView {

}

export default class Presenter<V> {
  view: V;

  constructor(view: V) {
    this.view = view
  }

  onStart() {

  }

  onStop() {
    this.view = null
  }
}