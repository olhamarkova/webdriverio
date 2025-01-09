import { App } from "app/core/index";

const app = new App();

describe("Functional tests", () => {
  it("should login with valid credentials", async () => {
    await app.login.open();
    await app.login.assertUrlContaining("login");
    await app.login.assertHaveTitle("The Internet");

    await app.login.login("tomsmith", "SuperSecretPassword!");
    await app.secure.assertExisting(app.secure.flashAlert);
    await app.secure.assertUrlContaining("secure");
    await app.secure.assertTextContaining("You logged into a secure area!");
  });

  it("should wait until the input field to be enabled", async () => {
    const enableBtnAttribute = {
      name: "autocomplete",
      value: "off",
    };
    await app.dynamic.open();
    await app.dynamic.assertDisabled(app.dynamic.dynamicInput);

    await app.dynamic.clickEnableBtn();
    await app.dynamic.waitForEnabled(app.dynamic.dynamicInput, 4000);
    await app.dynamic.assertEnabled(app.dynamic.dynamicInput);
    await app.dynamic.assertAttributeContaining(
      app.dynamic.enableBtn,
      enableBtnAttribute
    );
  });
});
