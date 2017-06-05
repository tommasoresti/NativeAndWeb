
import Presenter, {PresenterView} from './Presenter'

export interface MainView extends PresenterView {
  showText(text: string)
}

export class MainPresenter extends Presenter<MainView> {

  constructor(view: MainView) {
    super(view)
  }

  onStart() {
    let handler = () => {
      this.view.showText("Presenter works!")
    };
    setTimeout(handler, 1000)
  }

  onStop() {

  }

}