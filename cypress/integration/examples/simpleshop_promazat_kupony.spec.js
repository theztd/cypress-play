describe('Simpleshop - Delete all coupons',  () => {
    beforeEach( () => {
        cy.visit('https://app.simpleshop.cz/')
        /*
        
            LOGIN a HESLO

        */ 
        cy.get('input[name="login[l]"]').type('SEM_DEJ_LOGIN')
        cy.get('input[name="login[p]"]').type('SEM_DEJ_HESLO')
        cy.get('.submit').click()
        cy.wait(100)
        Cypress.on('uncaught:exception', () => false)
    })
        
    it("DELETE ALL COUPONS", () => {
        cy.visit('https://app.simpleshop.cz/produkty/')
        Cypress.on('uncaught:exception', () => false)
        cy.wait(900)
        cy.get("a").contains('Slevové kupóny').click()

        cy.get('span[data-title="Upravit"]').each(($button) => {
            cy.get('span[data-title="Upravit"]').eq(0).click()
            cy.wait(1000)
            cy.get("span").contains("Smazat kupón").click()
            cy.get('span[data-action="delete"]').click()
            cy.wait(2000)
        });

        cy.wait(5000)

    })

})
