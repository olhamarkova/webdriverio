import { Page } from "../core/page";
import { Options } from "app/types/types";

export class DropdownPage extends Page {
  constructor() {
    super();
  }

  get dropdownMenu(): ChainablePromiseElement {
    return $("#dropdown");
  }

  dropdownMenuOption(value: Options): ChainablePromiseElement {
    return $(`#dropdown option[value='${value}']`);
  }

  async openDropdownMenu(): Promise<void> {
    await this.dropdownMenu.click();
  }

  async selectOption(value: Options): Promise<void> {
    await this.dropdownMenuOption(value).click();
  }

  async assertSelected(value: Options): Promise<void> {
    await expect(this.dropdownMenuOption(value)).toBeSelected();
  }

  open(): Promise<void | WebdriverIO.Request> {
    return super.open("dropdown");
  }
}
