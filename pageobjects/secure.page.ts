import { Page } from "./page";

export class SecurePage extends Page {
  constructor() {
    super();
  }

  get flashAlert() {
    return $("#flash");
  }

  async assertTextContaining(text: string): Promise<void> {
    await super.assertTextContaining(this.flashAlert, text);
  }
}
