import { App } from "app/core/index";

const app = new App();

describe("Dynamic elements tests", () => {
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
