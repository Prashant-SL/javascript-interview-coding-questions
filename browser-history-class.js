class BrowserHistory {
  constructor(homepage) {
    this.current = homepage;
    this.backwardStack = [];
    this.forwardStack = [];
  }

  visit(page) {
    this.backwardStack.push(this.current);
    this.current = page;
    this.forwardStack = [];
  }

  back() {
    if (this.backwardStack.length === 0) return this.current;

    this.forwardStack.push(this.current);
    this.current = this.backwardStack.pop();

    return this.current;
  }

  forward() {
    if (this.forwardStack.length === 0) return this.current;

    this.backwardStack.push(this.current);
    this.current = this.forwardStack.pop();
    return this.current;
  }

  getCurrentPage() {
    return this.current;
  }
}

const browser = new BrowserHistory("home");

browser.visit("page1");
browser.visit("page2");
console.log(browser.back());
console.log(browser.forward());
console.log(browser.getCurrentPage());
