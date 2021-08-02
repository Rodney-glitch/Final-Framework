/// <reference types= "cypress" />

import LoginPage from '../pageObjects/LoginPage'

const lp = new LoginPage()

Cypress.Commands.add('assertLoginError', ()=>{
    lp.getLoginError().should('be.visible');
})
