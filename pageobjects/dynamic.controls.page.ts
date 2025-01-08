import { Page } from "./page";

export class DynamicControlsPage extends Page {
  constructor() {
    super();
  }

  get dynamicInput(): ChainablePromiseElement {
    return $("#input-example input[type='text']");
  }

  get enableBtn(): ChainablePromiseElement {
    return $("#input-example button[type='button']");
  }

  async clickEnableBtn(): Promise<void> {
    await this.enableBtn.click();
  }

  open(): Promise<void | WebdriverIO.Request> {
    return super.open("dynamic_controls");
  }
}
