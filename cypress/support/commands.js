// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("goToTalaronChic", () => {
  /* Description: This command navigates to the Talaron Chic website with embedded credentials. */
  const url = "http://sidewalk:elementary@smiling-glove.localsite.io/";
  cy.visit(url);
});

Cypress.Commands.add("goToWebsite", (url) => {
  /* Description: This command navigates to a specified website URL. */
  cy.visit(url);
});

Cypress.Commands.add("accessProduitViaImage2", (produit, extension) => {
  /* Description: Cette commande vise à représenter les étapes du test https://arthurmeric4.atlassian.net/browse/SCRUM-117 */
  const urldistanciel =
    "https://sidewalk:elementary@smiling-glove.localsite.io/";
  const urldistanciel2 = "https://smiling-glove.localsite.io/";
  const listeProduits = ["Alias.", "Commodi.", "Eum qui."];
  const listeExtensions = ["alias", "commodi", "eum-qui"];
  cy.visit(urldistanciel);
  //cy.contains : To find this element by its contents
  //Localiser le produit "${Produit}" dans la liste de produits.
  //Le produit "${Produit}" a été localisé
  cy.contains(produit).should("be.visible");
  //Cliquer sur l'image de "${Produit}".
  cy.get('#main img[alt="' + produit + '"]').click();
  //Une page s’ouvre.
  cy.url().should("not.equal", urldistanciel2);
  // Vérifier que la nouvelle page est la fiche produit de "${Produit}".
  cy.get("#static_header_banner h1.page-title-text").should(
    "have.text",
    produit
  );
  // La nouvelle page est bien celle de la fiche de "${Produit}".
  cy.url().should("eq", urldistanciel2 + "produit/" + extension + "/");
});
