describe('Landing Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      ok: true,
      fixture: 'reservations'
    })

    cy.visit('http://localhost:3000/')
  });

  it('Should display a title', () => {
    cy.get('h1')
      .should('contain', 'Turing Cafe Reservations')
      .should('be.visible')
  });

  it('Should display a form', () => {
    cy.get('form')
      .should('be.visible')
  });

  it('Should display all reservations', () => {
    cy.get('.resy-container')
      .get('article')
      .should('have.length', 9);
  });

  it('Should allow a user to make a new reservation', () => {
    cy.get('form')
      .get('#name')
      .type('Matt')
      .get('#number')
      .type('1')
      .get('#date')
      .type('2022-03-05')
      .get('#time')
      .type('11:04 PM')
  })
})