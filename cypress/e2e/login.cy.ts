

describe('LoginComponent', () => {
    it('Should not login if the form is invalid', () => {
      cy.visit('/login');
      cy.url().should('includes', 'login');
      cy.get('[formControlName="username"]').type('aa');
      cy.get('button').click();
      cy.url().should('not.include', 'dashboard');
    });
    it('Should login if the form is valid', () => {
      cy.login("aa","aa");
      cy.url().should('include', 'dashboard');
    });
  })