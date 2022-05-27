const {
  calculateChange,
  addToBalance,
} = require("../src/utils/helpers/balanceHelpers");

test("Adds fund to balance", () => {
  expect(addToBalance(9.99, 49.99)).toBe("59.98");
});

test("Calculates change after purchase", () => {
  expect(calculateChange(40, 10)).toBe("30.00");
});
