import { Alerts } from "app/types/types";
import { Page } from "../core/page";

export const alertText = {
  alert: "I am a JS Alert",
  confirm: "I am a JS Confirm",
  prompt: "I am a JS prompt",
};

export const result = {
  alert: "You successfully clicked an alert",
  dismiss: "",
  prompt: (text: string) => `You entered: ${text}`,
};

export class AlertsPage extends Page {
  constructor() {
    super();
  }

  get resultMsg(): ChainablePromiseElement {
    return $("#result");
  }

  alertButton(event: Alerts): ChainablePromiseElement {
    return $(`ul li button[onclick='js${event}()']`);
  }

  async clickAlertButton(event: Alerts): Promise<void> {
    await this.alertButton(event).waitForDisplayed();
    await this.alertButton(event).click();
  }

  async acceptAlert(): Promise<void> {
    await browser.acceptAlert();
  }

  async dismissAlert(): Promise<void> {
    await browser.dismissAlert();
  }

  async sendPromptToAlert(text: string): Promise<void> {
    await browser.sendAlertText(text);
  }

  async assertAlertTextIs(text: string): Promise<void> {
    await expect(await browser.getAlertText()).toEqual(text);
  }

  async assertResultMsgIs(text: string): Promise<void> {
    await expect(this.resultMsg).toHaveText(text);
  }

  open(): Promise<void | WebdriverIO.Request> {
    return super.open("javascript_alerts");
  }
}
