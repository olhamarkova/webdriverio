import { DropdownPage } from "app/pages/dropdown.page";
import { DynamicControlsPage } from "../pages/dynamic.controls.page";
import { LoginPage } from "../pages/login.page";
import { SecurePage } from "../pages/secure.page";
import { AlertsPage } from "app/pages/javascript.alerts.page";
import { AddElementPage } from "app/pages/add.element.page";

export class App {
  get login() {
    return new LoginPage();
  }

  get secure() {
    return new SecurePage();
  }

  get dynamic() {
    return new DynamicControlsPage();
  }

  get dropdown() {
    return new DropdownPage();
  }

  get alerts() {
    return new AlertsPage();
  }

  get addElements() {
    return new AddElementPage();
  }
}
