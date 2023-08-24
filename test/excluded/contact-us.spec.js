const firstName = `input[name="first_name"]`;
const lastName = `input[name="last_name"]`;
const email = `input[name="email"]`;
const message = `textarea[name="message"]`;
const submitButton = `input[type="submit"]`;
const contactReply = "#contact_reply > h1";
const contactError = "body";

describe("webdriveruniversity - contact us page", () => {
  beforeEach(async () => {
    await browser.maximizeWindow();
    await browser.url(
      "https://www.webdriveruniversity.com/Contact-Us/contactus.html"
    );
    console.log(`>>Browser Object: + ${JSON.stringify(browser)}`);
  });
  it("valid submission - submit all information", async () => {
    await $(firstName).setValue("John");
    await $(lastName).setValue("Doe");
    await $(email).setValue("johndoe@mail.com");
    await $(message).setValue("Whatever");
    await $(submitButton).click();
    await $(contactReply).waitForDisplayed();
    await expect($(contactReply)).toHaveText("Thank You for your Message!");
  });
  it("invalid submission - dont submit all information", async () => {
    await $(firstName).setValue("John");
    await $(lastName).setValue("Doe");
    await $(message).setValue("Whatever");
    await $(submitButton).click();
    await expect($(contactError)).toHaveTextContaining(
      "Error: all fields are required",
      "Error: Invalid email address"
    );
  });
});
