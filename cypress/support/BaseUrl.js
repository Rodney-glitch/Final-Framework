/// <reference types= "cypress" />


Cypress.Commands.add('openUrl', ()=>{

    cy.visit(Cypress.env('testUrl'));
})