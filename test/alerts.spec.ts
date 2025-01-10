import { App } from "app/core/index";
import { alertText, result } from "app/pages/javascript.alerts.page";

const app = new App();

describe("JavaScript alerts tests", () => {
  before(async () => {
    await app.alerts.open();
    await app.alerts.assertUrlContaining("alerts");
  });

  it("should accept an alert", async () => {
    await app.alerts.waitFor(app.alerts.alertButton("Alert"));
    await app.alerts.clickAlertButton("Alert");
    await app.alerts.assertAlertTextIs(alertText.alert);
    await app.alerts.acceptAlert();
    await app.alerts.assertResultMsgIs(result.alert);
  });

  it("should dismiss an alert", async () => {
    await app.alerts.clickAlertButton("Confirm");
    await app.alerts.assertAlertTextIs(alertText.confirm);
    await app.alerts.dismissAlert();
    await app.alerts.assertResultMsgIs(result.dismiss);
  });

  it("should send text to an alert", async () => {
    await app.alerts.clickAlertButton("Prompt");
    await app.alerts.assertAlertTextIs(alertText.prompt);
    await app.alerts.sendPromptToAlert("This is some text"); //fails - result null
    await app.alerts.assertResultMsgIs(result.prompt("This is some text"));
  });
});
