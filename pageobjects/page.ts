import { browser } from "@wdio/globals";

export class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path: string) {
    return browser.url(`/${path}`);
  }

  async assertUrlContaining(path: string) {
    await expect(browser).toHaveUrl(expect.stringContaining(path));
  }

  async assertHaveTitle(title: string) {
    await expect(browser).toHaveTitle(title);
  }

  async assertTextContaining(element: ChainablePromiseElement, text: string) {
    await expect(element).toHaveText(expect.stringContaining(text), {
      ignoreCase: true,
    });
  }

  async assertExisting(element: ChainablePromiseElement) {
    await expect(element).toBeExisting();
  }
}
