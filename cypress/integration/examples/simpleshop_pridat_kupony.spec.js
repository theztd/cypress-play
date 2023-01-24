describe('Simpleshop - ADD coupons',  () => {
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

    // Sem vloz pole kuponu, nebo jejich generator dle potreby
    const KUPONY = ["KAZDY", "MA", "RAD", "KUPONY"];
        
    describe("CREATE COUPONS", () => {
        KUPONY.forEach( (KOD) => {
            it('Create token ' + KOD, () => {
            

                cy.visit('https://app.simpleshop.cz/produkty/')
                Cypress.on('uncaught:exception', () => false)
                cy.wait(900)
                cy.get("a").contains('Slevové kupóny').click()
                cy.get('span[data-popup="ss.product.coupon"]').contains('+ Přidat nový').click()


                /*

                        Tady se vyplnuji policka formulare s kupony
                        
                */ 
                cy.get('input[name="crud[vfcouponName]"]').type('slevomat-' + KOD)
                cy.get('.td_checkbox_label').contains('SEM_DEJ titulek kuponu').click()
                cy.get('input[name="crud[vfcouponCode]"]').type(KOD)
                cy.get('input[name="crud[vfcouponCount]"]').type('1')
                cy.get('input[name="crud[vfcouponDiscount]"]').type('100')
                cy.get('select[name="crud[vfcouponUseType]"]').select('2')

                // Toto uz je jen odeslani
                cy.get('span').contains('Vytvořit kupón').click()

                // wait 3s
                cy.wait(3000)

            })
        })
    })

})
