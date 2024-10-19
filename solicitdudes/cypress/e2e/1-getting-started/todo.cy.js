/// <reference types="cypress" />


describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200')
  })

  it('displays two todo items by default', () => {
    cy.get('#h1Home').should('have.length', 1)

    cy.get('#h1Home').first().should('have.text', 'APLICACION DE SOLICITUDES')
  })

  it('Check solicitudes', () => {
    cy.visit('http://localhost:4200/solicitudes')
    cy.get('#itemNombre').should('have.text','David Bartolome');
    cy.get('#nombre').type('Da',{ delay: 600 });
    cy.get('#tabla').find('tr').should('have.length',3)
    cy.get('#nombre').type('v',{ delay: 600 });
    cy.get('#tabla').find('tr').should('have.length',2)

    cy.get('#nombre').type('XXX');
    cy.get('#h2NoElementos').should('have.length',1)
  })

  it('Navigate to selected solicitud', () => {
    cy.visit('http://localhost:4200/solicitudes')
    cy.get('#tabla').find('tr').last().click()
    cy.get('#nombre').should('contain.value','Daniel Castiilo')

    cy.get('#puesto').type('test');


  })

  it('Update solicitud', () => {
    cy.visit('http://localhost:4200/editar/5c4e')
    cy.get('#nombre').should('contain.value','David Bartolome')

    cy.get('#puesto').clear().type('test');
    cy.get('#estado').select('rechazado')
    cy.get('#submit').click();
    cy.get('#tabla').find('tr').first().get('#estado').should('have.text','rechazado');
  })

  it('.new solicitante', () => {
    cy.visit('http://localhost:4200/nueva')
    cy.get('#nombre').focus().blur();
    cy.get('*[class^="colorError"]').should('have.text','El campo nombre es requerido.')
    cy.get('#submit').should('be.disabled',true)
  })

})
