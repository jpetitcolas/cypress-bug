export const selectValue = (name, value) => {
  cy.get(`[label="${name}"] [role="button"]`).click();
  cy.get('ul[role="listbox"]')
    .contains(value)
    .click();
};

describe("Test", function() {
  it("should allow to get a refund estimate for a given age, product and department", function() {
    cy.visit("http://localhost:3000/");
    selectValue("Age", "Twenty");
    cy.get('button[type="submit"]').click(); // comment or uncomment this line to see the bug
  });
});
