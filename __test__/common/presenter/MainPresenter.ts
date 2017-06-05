import {MainPresenter, MainView} from "../../../source/common/presenter/MainPresenter";

describe("a simple suite", () => {

  let presenter: MainPresenter;
  let view: MockMainView;

  beforeEach(() => {
    view = new MockMainView();
    presenter = new MainPresenter(view)
  });

  test("on start should present the app name", () => {
    presenter.onStart()
    expect(view.showAppNameCalled(1)).toBe(true)
  })

})

class MockMainView implements MainView {
  private showAppNameCounter: number = 0;
  private showTextCounter: number = 0;

  showAppNameCalled(times: number): boolean {
    return times == this.showAppNameCounter
  }
  showAppName(appName: string) {
    this.showAppNameCounter++
  }

  showText(text: string) {
    this.showTextCounter++
  }

  showTextCalled(times: number): boolean {
    return this.showTextCounter == times
  }
}