describe("Description of test suite", () => {
  before(() => {
    console.log("Runs once before the first test in this block");
  });
  after(() => {
    console.log("Runs once after the last test in this block");
  });
  it("Individual test 1", () => {
    console.log("Execute code: Individual test 1");
  });
  it("Individual test 2", () => {});
  console.log("Execute code: Individual test 2");
});
