import { Page } from "./page";

export class DynamicControlsPage extends Page {
  constructor() {
    super();
  }

  get dynamicInput() {
    return $("#input-example input[type='text']");
  }

  get enableBtn() {
    return $("#input-example button[type='button']");
  }

  async clickEnableBtn() {
    await this.enableBtn.click();
  }

  open() {
    return super.open("dynamic_controls");
  }
}
