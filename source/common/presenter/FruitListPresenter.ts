import Fruit from "../model/Fruit";
import {FruitRepository} from "../interactor/FruitRepository";
/**
 * Created by tresti on 06.06.17.
 */
export interface FruitListView {
  showFruit(fruits: Fruit[])
}

export class FruitListPresenter {
  private view: FruitListView;
  private repository: FruitRepository;

  constructor(view: FruitListView, repository: FruitRepository) {
    this.view = view;
    this.repository = repository;
  }

  onNoFilterSet() {
    this.repository.getAll().onReady((fruits) => {
      this.view.showFruit(fruits)
    })
  }

  onFilterForColorSet(color: string) {
    this.repository.getByColor(color).onReady((fruits) => {
      this.view.showFruit(fruits)
    })
  }
}