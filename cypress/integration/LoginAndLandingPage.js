/// <reference types= "cypress" />

describe("Verified.ng", function(){


    this.beforeEach('Intialize Test Data', function(){
        cy.fixture('LoginTestData').then((data)=>{
            this.data = data
        })    
    })

    it('Enters website', function(){
        cy.openUrl()
    })

    it('Validates wrong username and wrong password', function(){
        cy.login(this.data.invalid_username, this.data.invalid_password)
        cy.assertLoginError()
    })

    it('Validates valid username and valid password', function(){
        cy.clearField()
        cy.login(this.data.valid_username, this.data.valid_password)
    })

})