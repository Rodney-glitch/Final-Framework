/// <reference types= "cypress" />

class LoginPage{
    getUsername(){
        return cy.get('#email')
    }

    getPassword(){
        return cy.get('#password')
    }

    getLogin(){
        return cy.get('#login-btn')
    }
    getLoginError(){
        return cy.get('strong')
    }
}

export default LoginPage;