describe('template spec', () => {
  it('clicks the link "digital"', () => {
    cy.visit('https://pt-br.facebook.com/login/device-based/regular/login/')
    cy.get("#email").type("gleidsondeveloper@gmail.com")
    cy.get("#pass").type("123456")
    cy.get("#loginbutton").click({multiple: true})
  })
})
