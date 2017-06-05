
import Presenter, {PresenterView} from './Presenter'
import Strings from '../resource/string'

export interface MainView extends PresenterView {
  showAppName(appName: string)
  showText(text: string)
}

export class MainPresenter extends Presenter<MainView> {

  constructor(view: MainView) {
    super(view)
  }

  onStart() {
    this.view.showAppName(Strings.appName)

    let handler = () => {
      this.view.showText("Presenter works!")
    };
    setTimeout(handler, 1000)
  }

  onStop() {

  }

}