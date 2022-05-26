describe('CRUD operations', () => {
  it('Creates a card', () => {
    cy.visit('http://localhost:3004')
    
    cy.get('#userName').type('Cookie Monster')
    cy.get('#jobTitle').type('Cookie Monster')
    cy.get('#image').type('https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg')
    cy.get('#desc').type('Me like cookie!')

    cy.contains('Create Card').click()

    cy.get('.contact-card').contains('Cookie Monster')
  })
})
