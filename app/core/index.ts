import { DynamicControlsPage } from "../pages/dynamic.controls.page";
import { LoginPage } from "../pages/login.page";
import { SecurePage } from "../pages/secure.page";

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
}
