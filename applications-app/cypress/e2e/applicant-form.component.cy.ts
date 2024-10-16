describe('applicant-form spec', () => {

    describe('navega a la ruta esperada', () => {
        it('renderiza la página applicant-form.component.html', () => {
          cy.url().should('eq', 'http://localhost:4200');
    
          cy.contains('Cunchis Doe');
        });
      });
  
    describe('"Enviar" button behaviour', () => {
      it('by clicking "Enviar" without accomplishing form requirements', () => {
        cy.get('[data-test="button-create"]').should('be.disabled');
      });
    });

/*     describe('"Enviar" button behaviour', () => {
      it('by clicking "Enviar" without accomplishing form requirements', () => {
        cy.get('[data-test="button-create"]').click()
        .find('[data-test="form-age-span-error"]').contains('La edad es obligatoria y debe ser un número entre 18 y 120.');
      });
    }); */

/*     describe('"Enviar" button behaviour', () => {
        it('by clicking "Enviar" without accomplishing form requirements', () => {
          cy.get('[data-test="button-create"]').click()
          .find('[data-test="form-age-span-error"]').contains('La edad es obligatoria y debe ser un número entre 18 y 120.');
        });
      }); */

  })