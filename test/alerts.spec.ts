import { App } from "app/core/index";

const app = new App();

describe("JavaScript alerts tests", () => {
  it("should accept an alert", async () => {
    await app.alerts.open();
    await app.alerts.assertUrlContaining("alerts");

    await app.alerts.clickAlertButton("Alert");
    await app.alerts.assertAlertTextIs("I am a JS Alert");
    await app.alerts.acceptAlert();
    await app.alerts.assertResultMsgIs("You successfully clicked an alert");
  });

  it("should dismiss an alert", async () => {
    await app.alerts.clickAlertButton("Confirm");
    await app.alerts.assertAlertTextIs("I am a JS Confirm");
    await app.alerts.dismissAlert();
    await app.alerts.assertResultMsgIs("You clicked: Cancel");
  });

  it("should send text to an alert", async () => {
    await app.alerts.clickAlertButton("Prompt");
    await app.alerts.assertAlertTextIs("I am a JS prompt");
    await app.alerts.sendPromptToAlert("This is some text");
    await app.alerts.acceptAlert();
    await app.alerts.assertResultMsgIs("You entered: This is some text");
  });
});
