describe("Test the harvest report default values", () => {
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-school/e2e")
    })
      
    it("Check the page header", () => {
        cy.get("[data-cy=page-header]")
        .should("have.text", "Harvest Report")
    })

    it("Check the start date", () => {
        cy.get("[data-cy=start-date]")
        .should("have.value", "2020-05-05")
    })

    it("Check the end date", () => {
        cy.get("[data-cy=end-date]")
        .should("have.value", "2020-05-15")
    })

    it("Check the crop dropdown", () => {
        cy.get("[data-cy=crop-dropdown]")
        .should("exist")

        cy.get("[data-cy=crop-dropdown]").children().eq(0)
        .should("have.text", " ARUGULA ")

        cy.get("[data-cy=crop-dropdown]").children().eq(4)
        .should("have.text", " BEAN-FAVA ")

        cy.get("[data-cy=crop-dropdown]").children().last()
        .should("have.text", " ZUCCHINI ")

        cy.get("[data-cy=crop-dropdown]").children()
        .should("have.length", 111)
    })
})
