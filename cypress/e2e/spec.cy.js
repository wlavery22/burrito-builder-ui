describe('What user sees on home page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});
  
	it('Should show header, name input, ingredient buttons, order status, submit order button, and orders placed', () => {
		cy.intercept('GET', 'http://localhost:3001/api/v1/orders', {
			statusCode: 200,
			fixture: 'example.json'
		})
    cy.get('header').contains("Burrito Builder").should("be.visible");
    cy.get('input[name="name"]').should('have.attr', 'placeholder', 'Name').should("be.visible");
    cy.get('button').should('have.attr', 'name', 'beans').should("be.visible");
    cy.get('p').contains("Order:").should("be.visible");
    cy.get('button').contains("Submit Order").should("be.visible");
    cy.visit('http://localhost:3000');
    cy.get('input[name="name"]').clear();
    // cy.get('input[name="name"]').type('Dave');
    cy.get('input[name="type"]').focus().clear().type('Dave');
  })
  });


