import "cypress-real-events"


const username = 'oliviernathanael';
const password = 'azerty';

describe('Tests du site talaron fashion', () => {

  beforeEach(() => {
    cy.visit('https://landscape:somber@dull-ghost.localsite.io/')
    }
    )

  it('Connexion à son compte', () => {
    //cy.visit('https://landscape:somber@dull-ghost.localsite.io/')
    cy.get('.icofont-user-alt-4').realHover()
    cy.get('#masthead a[href="https://dull-ghost.localsite.io/mon-compte/deconnexion/?_wpnonce=adce3cb4f3"]').click();
    cy.get('[name="username"]').click();
    cy.get('[name="username"]').type(username);
    cy.get('#password').click();
    cy.get('#password').type(password);
    cy.get('#customer_login [name="login"]').click();
    cy.get('#post-83 p:nth-child(2)').should('have.text', '\n\tBonjour '+username+' (vous n’êtes pas oliviernathanael ? Déconnexion)');
  });

  it('Ajout d\'un article au panier', function() {
    //cy.visit('https://landscape:somber@dull-ghost.localsite.io/')
    cy.get('#main a[href="/?add-to-cart=2730"] span').click();
    cy.get('#main a.wc-forward').click();
    cy.get('#masthead span.quantity').should('have.text', '1 item');
  });

  



})