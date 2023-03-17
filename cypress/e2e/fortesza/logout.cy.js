/// <reference types="cypress" />

describe('Validar Logout', () => {

    beforeEach(() => {

        cy.visit('https://staging.fortesza.com')
    })

    it('Validar logout exitoso', () => {
        
        cy.get('#btn-sesion > .mat-button-wrapper > .litle-text > span').click()
        cy.get('#txt-email-or-user').type('test004@gmail.com')
        cy.get('#txt-password').type('Qwe1234@')
        cy.get('.mat-button-wrapper').click()
        cy.get('.title').should('contain.text','Elige tu plan')
    // Pasamos hacer logout 
    cy.get('.mat-menu-trigger > .md').click()
    cy.get(':nth-child(8) > .mat-focus-indicator').click()
    cy.get('#btn-sesion > .mat-button-wrapper > .litle-text > span').should('be.visible')
        
        
    })
            
})