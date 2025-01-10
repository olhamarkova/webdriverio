import { DynamicButtonText } from "app/types/types";
import { Page } from "../core/page";

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

  get dynamicButton(): ChainablePromiseElement {
    return $("button[onclick='swapCheckbox()']");
  }

  async clickEnableBtn(): Promise<void> {
    await this.enableBtn.click();
  }

  async clickDynamicButton(): Promise<void> {
    await this.dynamicButton.click();
  }

  async assertHasText(text: DynamicButtonText): Promise<void> {
    await super.assertHasText(this.dynamicButton, text);
  }

  async waitButtonChangesTo(text: DynamicButtonText) {
    await browser.waitUntil(
      async () => {
        const buttonText = await this.dynamicButton.getText();
        return buttonText === text;
      },
      {
        timeout: 6000,
        timeoutMsg: "Expect button text to change",
      }
    );
  }

  open(): Promise<void | WebdriverIO.Request> {
    return super.open("dynamic_controls");
  }
}
