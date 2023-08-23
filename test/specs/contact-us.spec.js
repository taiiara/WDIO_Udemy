describe("webdriveruniversity - contact us page", () => {
  beforeEach(async () => {
    await browser.url(
      "https://www.webdriveruniversity.com/Contact-Us/contactus.html"
    );
  });
  it("valid submission - submit all information", async () => {
    await $(`[name="first_name"]`).setValue("John");
    await $(`[name="last_name"]`).setValue("Doe");
    await $(`[name="email"]`).setValue("johndoe@mail.com");
    await $(`[name="message"]`).setValue("Whatever");
    await $(`[type="submit"]`).click();
    await $("#contact_reply").waitForDisplayed();
    await expect($("#contact_reply")).toHaveTextContaining("Thank You for your Message!");
  });
  it("invalid submission - dont submit all information", async () => {
    await $(`[type="reset"]`).click();
    await $(`[name="first_name"]`).setValue("John");
    await $(`[name="last_name"]`).setValue("Doe");
    await $(`[name="message"]`).setValue("Whatever");
    await $(`[type="submit"]`).click();
    await $("#contact_reply").waitForDisplayed();
    await expect($("#contact_reply")).toHaveTextContaining("Thank You for your Message!");
  });
});
