import { makeAutoObservable } from "mobx";

class main {
  //false일 경우 koera, 아니면 world
  isShow: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }

  reset = () => {
    this.isShow = false;
  };
}

const MainStore = new main();
export default MainStore;
