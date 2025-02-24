describe("add product to cart", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should be able to navigate to the product page and add it to the cart", () => {
    cy.get('a[href^="/product"]').first().click();

    // validando que entrou em uma tela que em sua rota em /product
    cy.url().should("include", "/product");

    cy.contains("Adicionar ao carrinho").click();
    cy.contains("Cart (1)").should("exist");
  });

  it("should not count duplicated products on cart", () => {
    cy.get('a[href^="/product"]').first().click();

    cy.url().should("include", "/product");

    cy.contains("Adicionar ao carrinho").click();
    cy.contains("Adicionar ao carrinho").click();
    cy.contains("Cart (1)").should("exist");
  });

  it("should ble able to search for a product and add ot tp the cart", () => {
    cy.get("input[name=q]").type("moletom").parent("form").submit();

    cy.location("pathname").should("include", "/search");
    cy.location("search").should("include", "q=moletom");

    cy.get('a[href^="/product"]').first().click();
    cy.url().should("include", "/product");

    cy.contains("Adicionar ao carrinho").click();
    cy.contains("Cart (1)").should("exist");
  });
});
