describe("async vs sync - wdio example", () => {
  it("async vs sync", async () => {
    await browser.url("https://www.webdriveruniversity.com/");
    await expect(browser).toHaveUrl("https://www.webdriveruniversity.com/");
  });
});
