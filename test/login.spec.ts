import { App } from "app/core/index";

const app = new App();
const userName = `${process.env.LOGIN}`;
const password = `${process.env.PASSWORD}`;

describe("Login tests", () => {
  beforeEach(async () => {
    await app.login.open();
    await app.login.assertUrlContaining("login");
  });

  it("should login with valid credentials", async () => {
    await app.login.assertHaveTitle("The Internet");

    await app.login.login(userName, password);
    await app.secure.assertExists(app.secure.flashAlert);
    await app.secure.assertUrlContaining("secure");
    await app.secure.assertTextContaining("You logged into a secure area!");
  });

  it("should throw an error for invalid credentials", async () => {
    await app.login.login("foo", password);
    await app.login.assertUrlContaining("login");
    await app.secure.assertExists(app.secure.flashAlert);
    await app.secure.assertTextContaining("Your username is invalid!");
  });
});
