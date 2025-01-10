import { browser } from "@wdio/globals";

export class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path: string): Promise<void | WebdriverIO.Request> {
    return browser.url(`/${path}`);
  }

  async waitForEnabled(
    element: ChainablePromiseElement,
    timeout?: number
  ): Promise<void> {
    await element.waitForEnabled({ timeout: timeout });
  }

  async waitFor(element: ChainablePromiseElement) {
    await element.waitForDisplayed();
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

  async assertHasText(
    element: ChainablePromiseElement,
    text: string
  ): Promise<void> {
    await expect(element).toHaveText(text);
  }

  async assertExists(element: ChainablePromiseElement): Promise<void> {
    await expect(element).toBeExisting();
  }

  async assertNotExists(element: ChainablePromiseElement): Promise<void> {
    await expect(element).not.toExist();
  }

  async assertDisabled(element: ChainablePromiseElement): Promise<void> {
    await expect(element).toBeDisabled();
  }

  async assertEnabled(element: ChainablePromiseElement): Promise<void> {
    await expect(element).toBeEnabled();
  }

  async assertAttributeContaining(
    element: ChainablePromiseElement,
    attribute: { name: string; value: string }
  ) {
    await expect(element).toHaveAttribute(attribute.name, attribute.value, {
      containing: true,
    });
  }
}
