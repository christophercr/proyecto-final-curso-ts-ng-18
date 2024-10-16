describe('Listado Solicitudes Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('Visitar la página principal', () => {
    cy.visit('/')
    cy.contains('Gestión de solicitudes')
  })

  describe('al hacer click en Nueva Solicitud', () => {
    it('carga debajo del listado el formulario para introducir una nueva solicitud', () => {
      cy.get('[data-test="Alta-solicitud-link"]').click();
      cy.url().should('eq', 'http://localhost:4200/alta-solicitud');
      cy.contains('Alta de solicitud');
    })
  })

  describe('al hacer click en modificar', () => {
    it('carga debajo del listado el formulario para modificar una nueva solicitud', () => {
      cy.get('[data-test="modificar-icon"]').first().click();
      cy.url().should('have.string','http://localhost:4200/modificar-solicitud/');
      cy.contains('Modificar Solicitud');
    })
  })
})