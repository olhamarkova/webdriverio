import { LoginPage } from "../pageobjects/login.page";
import { SecurePage } from "../pageobjects/secure.page";
import { DynamicControlsPage } from "pageobjects/dynamic.controls.page";

const login = new LoginPage();
const secure = new SecurePage();
const dynamic = new DynamicControlsPage();

describe("Functional tests", () => {
  it("should login with valid credentials", async () => {
    await login.open();
    await login.assertUrlContaining("login");
    await login.assertHaveTitle("The Internet");

    await login.login("tomsmith", "SuperSecretPassword!");
    await secure.assertExisting(secure.flashAlert);
    await secure.assertUrlContaining("secure");
    await secure.assertTextContaining("You logged into a secure area!");
  });

  it("should wait until the input field to be enabled", async () => {
    const enableBtnAttribute = {
      name: "autocomplete",
      value: "off",
    };
    await dynamic.open();
    await dynamic.assertDisabled(dynamic.dynamicInput);

    await dynamic.clickEnableBtn();
    await dynamic.waitForEnabled(dynamic.dynamicInput, 4000);
    await dynamic.assertEnabled(dynamic.dynamicInput);
    await dynamic.assertAttributeContaining(
      dynamic.enableBtn,
      enableBtnAttribute
    );
  });
});
