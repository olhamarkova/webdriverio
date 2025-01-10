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

  it("should wait until the button text changes", async () => {
    await app.dynamic.clickDynamicButton();
    await app.dynamic.waitButtonChangesTo("Add");
    await app.dynamic.assertHasText("Add");

    await app.dynamic.clickDynamicButton();
    await app.dynamic.waitButtonChangesTo("Remove");
    await app.dynamic.assertHasText("Remove");
  });

  it("should wait until an element exists", async () => {
    await app.addElements.open();
    await app.addElements.waitFor(app.addElements.addElementButton);

    await app.addElements.addElement();
    await app.addElements.waitForExists(app.addElements.deleteButton);
    await app.addElements.assertExists(app.addElements.deleteButton);

    await app.addElements.deleteElement();
    await app.addElements.waitForExists(app.addElements.deleteButton, true);
    await app.addElements.assertNotExists(app.addElements.deleteButton);
  });
});
