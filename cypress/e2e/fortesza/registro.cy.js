/// <reference types="cypress" />

describe('Validar Registro', () => {

    beforeEach(() => {

        cy.visit('https://staging.fortesza.com/register')
    })

    it('Validar registro exitoso', () => {
        
        cy.get('#input-email-register').type('test005@gmail.com')
        cy.get('#input-password-register').type('Qwe1234@')
        cy.get('.mat-checkbox-inner-container').click()
        cy.get('.mat-button-wrapper').click()
        cy.get('.title').should('contain.text','Elige tu plan')
    })
    it('Comprobar que aparece un mensaje de advertencia al intentar registrar un usuario con un correo existente', () => {
        
        cy.get('#input-email-register').type('test002@gmail.com')
        cy.get('#input-password-register').type('Qwe1234@')
        cy.get('.mat-checkbox-inner-container').click()
        cy.get('.mat-button-wrapper').click()
        cy.get('.toast-message').should('contain.text','Hemos detectado')
    })
    
})