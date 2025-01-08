import { browser } from "@wdio/globals";

export class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path: string) {
    return browser.url(`/${path}`);
  }
}
