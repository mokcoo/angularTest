import { LoginComponent } from './login.component'

describe('LoginComponent', () => {
  it('should mount', () => {
    cy.mount(LoginComponent)
  });
  it('Should not login if the form is invalid', () => {
    cy.visit('/');
    cy.url().should('includes', 'login');
    cy.get('[formControlName="username"]').type('aa');
    cy.get('button').click();
    cy.url().should('not.include', 'dashboard');
  });
})