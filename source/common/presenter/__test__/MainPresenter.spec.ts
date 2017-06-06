import {MainPresenter, MainView} from "../MainPresenter";
import {IMock, Mock, Times, It} from 'typemoq'

let presenter: MainPresenter;
let view: IMock<MainView>

beforeEach(() => {
  view = Mock.ofType<MainView>()
  presenter = new MainPresenter(view.object)
});

test("on start should present the app name", () => {
  presenter.onStart()
  view.verify(x => x.showAppName(It.isAnyString()), Times.atLeastOnce())
})
