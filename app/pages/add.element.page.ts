import { Page } from "../core/page";

export class AddElementPage extends Page {
  constructor() {
    super();
  }

  get addElementButton(): ChainablePromiseElement {
    return $("button[onclick='addElement()']");
  }

  get deleteButton(): ChainablePromiseElement {
    return $("//button[contains(text(), 'Delete')]");
  }

  async addElement(): Promise<void> {
    await this.addElementButton.click();
  }

  async deleteElement(): Promise<void> {
    await this.deleteButton.click();
  }

  async waitForExists(
    element: ChainablePromiseElement,
    reverse = false
  ): Promise<void> {
    await element.waitForExist({ reverse: reverse });
  }

  open(): Promise<void | WebdriverIO.Request> {
    return super.open("add_remove_elements/");
  }
}
