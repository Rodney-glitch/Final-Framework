/// <reference types= "cypress" />

import LoginPage from "../pageObjects/LoginPage";

const lp = new LoginPage();

Cypress.Commands.add('login', (getUsername, getPassword) =>{
    lp.getUsername().type(getUsername)

    lp.getPassword().type(getPassword)

    lp.getLogin().click()
})

Cypress.Commands.add('clearField', () =>{
    lp.getUsername().clear()

    lp.getPassword().clear()
})


