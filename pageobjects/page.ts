import { browser } from "@wdio/globals";

export class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path: string): Promise<void | WebdriverIO.Request> {
    return browser.url(`/${path}`);
  }

  async assertUrlContaining(path: string): Promise<void> {
    await expect(browser).toHaveUrl(expect.stringContaining(path));
  }

  async assertHaveTitle(title: string): Promise<void> {
    await expect(browser).toHaveTitle(title);
  }

  async assertTextContaining(
    element: ChainablePromiseElement,
    text: string
  ): Promise<void> {
    await expect(element).toHaveText(expect.stringContaining(text), {
      ignoreCase: true,
    });
  }

  async assertExisting(element: ChainablePromiseElement): Promise<void> {
    await expect(element).toBeExisting();
  }
}
