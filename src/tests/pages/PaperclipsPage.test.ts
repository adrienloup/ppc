describe('paperclips page', () => {
  it('should display the paperclips page with its title', () => {
    cy.visit('/');
    cy.contains('paperclips').should('be.visible');
  });
});
