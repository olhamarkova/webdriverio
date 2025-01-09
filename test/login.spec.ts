import { App } from "app/core/index";

const app = new App();
const userName = `${process.env.LOGIN}`;
const password = `${process.env.PASSWORD}`;

describe("Login tests", () => {
  it("should login with valid credentials", async () => {
    await app.login.open();
    await app.login.assertUrlContaining("login");
    await app.login.assertHaveTitle("The Internet");

    await app.login.login(userName, password);
    await app.secure.assertExisting(app.secure.flashAlert);
    await app.secure.assertUrlContaining("secure");
    await app.secure.assertTextContaining("You logged into a secure area!");
  });
});
