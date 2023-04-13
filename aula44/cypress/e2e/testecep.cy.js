describe('Testar pagina cep', () => {
  beforeEach(() => {
    cy.visit('https://alessandrofeitoza.github.io/endereco-via-cep/')
  })

  it('buscar o cep', () => {
    cy.get('#cep').type('60812450').blur()
    cy.wait(2000)
    cy.get('#logradouro').should('have.value', 'Rua Cidade Ecológica')
    cy.get('#bairro').should('have.value', 'Edson Queiroz')
    cy.get('#cidade').should('have.value', 'Fortaleza')
  })
})
