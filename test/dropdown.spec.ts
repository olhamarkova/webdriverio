import { App } from "app/core/index";
import { Options } from "app/types/types";

const app = new App();

describe("Dropdown tests", () => {
  it("should select option on dropdown menu", async () => {
    await app.dropdown.open();
    await app.dropdown.assertUrlContaining("dropdown");

    await app.dropdown.waitFor(app.dropdown.dropdownMenu);
    await app.dropdown.openDropdownMenu();
    await app.dropdown.selectOption(Options.Option_1);
    await app.dropdown.assertSelected(Options.Option_1);

    await app.dropdown.openDropdownMenu();
    await app.dropdown.selectOption(Options.Option_2);
    await app.dropdown.assertSelected(Options.Option_2);
  });
});
