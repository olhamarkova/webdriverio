import { Page } from "../core/page";

export class SecurePage extends Page {
  constructor() {
    super();
  }

  get flashAlert(): ChainablePromiseElement {
    return $("#flash");
  }

  async assertTextContaining(text: string): Promise<void> {
    await super.assertTextContaining(this.flashAlert, text);
  }
}
