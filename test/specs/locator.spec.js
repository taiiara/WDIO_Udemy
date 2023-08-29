describe("Locating Elements", () => {
  beforeEach(async () => {
    await browser.maximizeWindow();
    await browser.url("https://selectors.webdriveruniversity.com/");
  });
  it("$ - Locate Element", async () => {
    await browser.$(`a[href="#portfolio"]`).click();
    await browser.pause(3000);

    await browser.$(`[data-target="#portfolioModal1"]`).click();
    await browser.pause(3000);
  });
  it.only("$$ - Locate Elements", async () => {
    const expectTitles = [
        "#",
        "First",
        "Last",
        "Handle",
        "1",
        "2",
        "3",
        "Firstname",
        "Lastname",
        "Age"
    ]
    const actualTitles = [];
    const tableHeaderTitles = await $$("//table//th");
    for (const title of tableHeaderTitles) {
      //console.log(await title.getText());
      actualTitles.push(await title.getText());
    }
    expect(expectTitles).toEqual(actualTitles);
  });
});
