describe('Testar pagina de login', () => {
    beforeEach(() => {
        cy.visit('https://instagram.com');
    });

    it('testar se o login retorna senha incorreta', () => {
        //vai encontrar um button com o texto "Log In" e vai clicar nele
        cy.get('button').contains('Log In').click();

        cy.wait(2000);

        //garantindo que tem um "button" com o texto "Log In"
        cy.get('button').contains('Log in');

        cy.contains('Forgot password');

        cy.get('[name="username"]').type('chico_pezao_caucaia');

        cy.get('[name="password"]').type('12345678');
        
        // cy.get('[name="password"]').type('12345678{enter}');

        cy.get('[type="submit"]').click();

        cy.wait(2000);

        cy.contains('Sua senha está incorreta');
    });
});
