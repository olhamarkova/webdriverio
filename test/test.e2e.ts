import { expect, browser } from "@wdio/globals";
import { LoginPage } from "../pageobjects/login.page";
import { SecurePage } from "../pageobjects/secure.page";
import { DynamicControlsPage } from "pageobjects/dynamic.controls.page";

const login = new LoginPage();
const secure = new SecurePage();
const dynamic = new DynamicControlsPage();

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await login.open();
    await expect(browser).toHaveUrl(expect.stringContaining("login"));
    await expect(browser).toHaveTitle("The Internet");

    await login.login("tomsmith", "SuperSecretPassword!");
    await expect(secure.flashAlert).toBeExisting();
    await expect(secure.flashAlert).toHaveText(
      expect.stringContaining("You logged into a secure area!"),
      { ignoreCase: true }
    );
    await expect(browser).toHaveUrl(expect.stringContaining("secure"));
  });

  it("should wait until the input field to be enabled", async () => {
    await dynamic.open();
    await expect(dynamic.dynamicInput).toBeDisabled();
    await dynamic.clickEnableBtn();
    await dynamic.dynamicInput.waitForEnabled({ timeout: 4000 });
    await expect(dynamic.dynamicInput).toBeEnabled();
    await expect(dynamic.enableBtn).toHaveAttribute("autocomplete", "off", {
      containing: true,
    });
  });
});
