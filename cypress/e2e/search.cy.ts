describe("search product", () => {
  it("should be able to search for products", () => {
    cy.searchByQuery("moletom");
    cy.location("search").should("include", "q=moletom");

    cy.get('a[href^="/product"]').should("exist");
  });

  it("should not be able to search page without a query", () => {
    cy.on("uncaught:exception", () => {
      return false;
    });

    cy.visit("/search");
    cy.location("pathname").should("equal", "/");
  });
});
