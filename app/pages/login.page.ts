import { Page } from "../core/page";

export class LoginPage extends Page {
  constructor() {
    super();
  }

  get inputUsername(): ChainablePromiseElement {
    return $("#username");
  }

  get inputPassword(): ChainablePromiseElement {
    return $("#password");
  }

  get btnSubmit(): ChainablePromiseElement {
    return $('button[type="submit"]');
  }

  async login(username: string, password: string): Promise<void> {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open(): Promise<void | WebdriverIO.Request> {
    return super.open("login");
  }
}
