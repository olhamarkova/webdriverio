import { Page } from "./page";

export class SecurePage extends Page {
  constructor() {
    super();
  }

  get flashAlert() {
    return $("#flash");
  }
}
