import "cypress-real-events";

// const username = "oliviernathanael";
// const password = "azerty";

const urldistanciel = "https://sidewalk:elementary@smiling-glove.localsite.io/";
const urldistanciel2 = "https://smiling-glove.localsite.io/";

const urlpresentiel = "https://landscape:somber@dull-ghost.localsite.io/";

describe("Tests du site talaron fashion", () => {
  beforeEach(() => {
    cy.visit(urldistanciel);
  });

  xit("Connexion à son compte", () => {
    //cy.visit('https://landscape:somber@dull-ghost.localsite.io/')
    cy.get(".icofont-user-alt-4").realHover();
    //cy.contains('Se déconnecter').click();
    cy.get(
      ".woocommerce-MyAccount-navigation-link.woocommerce-MyAccount-navigation-link--customer-logout"
    ).click();

    cy.fixture("credentials").then((credentials) => {
      cy.get('[name="username"]').click();
      cy.get('[name="username"]').type(credentials.username);
      cy.get("#password").click();
      cy.get("#password").type(credentials.password);
      cy.get('#customer_login [name="login"]').click();
      cy.get("#post-83 p:nth-child(2)").should(
        "have.text",
        "\n\tBonjour " +
          credentials.username +
          " (vous n’êtes pas " +
          credentials.username +
          " ? Déconnexion)"
      );
    });
  });

  xit("Ajout d'un article au panier", function () {
    //cy.visit('https://landscape:somber@dull-ghost.localsite.io/')
    cy.get('#main a[href="/?add-to-cart=2730"] span').click();
    cy.get("#main a.wc-forward").click();
    cy.get("#masthead span.quantity").should("have.text", "1 item");
  });

  const adresses1 = [
    urldistanciel,
    urldistanciel + "produit/ex/",
    urldistanciel +
      "categorie-produit/sport/sports_exterieur/planche_a_roulettes/",
    //urldistanciel+"letiquette-produit/vroum-vroum/",
    // "urldistancielmarque/louis-pasteur/",
    urldistanciel + "panier/",
    urldistanciel + "?s=&post_type=product&category=0",
    urldistanciel + "commander/",
    urldistanciel + "mon-compte/",
    urldistanciel + "mon-compte/mes_commandes/",
    urldistanciel + "mon-compte/mes_telechargements/",
    urldistanciel + "mon-compte/mes_adresses/",
    urldistanciel + "mon-compte/mes_adresses/facturation/",
    urldistanciel + "mon-compte/mes_adresses/livraison/",
    urldistanciel + "mon-compte/informations_personnelles/",
  ];

  const adresses2 = [
    urldistanciel2,
    urldistanciel2 + "produit/ex/",
    urldistanciel2 +
      "categorie-produit/sport/sports_exterieur/planche_a_roulettes/",
    //urldistanciel2+"etiquette-produit/vroum-vroum/",
    // urldistanciel2+"marque/louis-pasteur/",
    urldistanciel2 + "panier/",
    urldistanciel2 + "?s=&post_type=product&category=0",
    urldistanciel2 + "commander/",
    urldistanciel2 + "mon-compte/",
    urldistanciel2 + "mon-compte/mes_commandes/",
    urldistanciel2 + "mon-compte/mes_telechargements/",
    urldistanciel2 + "mon-compte/mes_adresses/",
    urldistanciel2 + "mon-compte/mes_adresses/facturation/",
    urldistanciel2 + "mon-compte/mes_adresses/livraison/",
    urldistanciel2 + "mon-compte/informations_personnelles/",
  ];

  xit("Présence d'un bouton d'accès à la barre de recherche", function () {
    cy.visit(urldistanciel);
    cy.get(".icofont-user-alt-4").realHover();
    //cy.contains('Se déconnecter').click();
    cy.get(
      ".woocommerce-MyAccount-navigation-link.woocommerce-MyAccount-navigation-link--customer-logout"
    ).click();
    cy.get('[name="username"]').click();
    cy.get('[name="username"]').type(username);
    cy.get("#password").click();
    cy.get("#password").type(password);
    cy.get('#customer_login [name="login"]').click();
    cy.get("#post-83 p:nth-child(2)").should(
      "have.text",
      "\n\tBonjour " +
        username +
        " (vous n’êtes pas " +
        username +
        " ? Déconnexion)"
    );

    let cpt = 0;
    while (cpt < adresses1.length) {
      //Ouvrir page
      cy.visit(adresses1[cpt]);
      //page est ouverte
      cy.url().should("eq", adresses2[cpt]);
      //Vérifier qu’un bouton en forme de loupe (voir image en pièce jointe) est présent en haut à droite de la page.
      //Un bouton en forme de loupe est bien présent en haut à droite de la page.
      cy.get("#masthead i.icofont-search-2").should("be.visible");
      //Cliquer sur le bouton en forme de loupe.
      cy.get("#masthead i.icofont-search-2").click();
      //Un ruban apparaît en haut de la page.
      cy.get("#search-bar").should("be.visible");
      //Vérifier que le ruban contient un champ interactible avec le texte "Rechercher un produit…" superposé dessus .
      cy.get('#search-bar [name="s"]').should("be.visible");
      //Vérifier que le ruban contient un bouton en forme de loupe à droite du champ (voir l’image en pièce jointe).
      cy.get("#Capa_1").should("be.visible");
      //Le ruban contient bien une barre de recherche.
      cy.get('#search-bar [name="s"]').should("be.visible");
      cpt = cpt + 1;
    }
  });

  //https://arthurmeric4.atlassian.net/browse/SCRUM-117
  const listeProduits = ["Alias.", "Commodi.", "Eum qui."];
  const listeExtensions = ["alias", "commodi", "eum-qui"];
  xit("Accès à fiche produit via son image", function () {
    let cpt = 0;
    while (cpt < listeProduits.length) {
      // URL de la page à tester : https://dull-ghost.localsite.io/
      cy.visit(urldistanciel);
      //cy.contains : To find this element by its contents
      //Localiser le produit "${Produit}" dans la liste de produits.
      //Le produit "${Produit}" a été localisé
      cy.contains(listeProduits[cpt]).should("be.visible");
      //Cliquer sur l'image de "${Produit}".
      cy.get('#main img[alt="' + listeProduits[cpt] + '"]').click();
      //Une page s’ouvre.
      cy.url().should("not.equal", urldistanciel2);
      // Vérifier que la nouvelle page est la fiche produit de "${Produit}".
      cy.get("#static_header_banner h1.page-title-text").should(
        "have.text",
        listeProduits[cpt]
      );
      // La nouvelle page est bien celle de la fiche de "${Produit}".
      cy.url().should(
        "eq",
        urldistanciel2 + "produit/" + listeExtensions[cpt] + "/"
      );
      cpt = cpt + 1;
    }
  });

  //https://arthurmeric4.atlassian.net/browse/SCRUM-117
  xit("Accès à fiche produit via son image 2", function () {
    let cpt = 0;
    while (cpt < listeProduits.length) {
      // URL de la page à tester : https://dull-ghost.localsite.io/
      cy.accessProduitViaImage2(listeProduits[cpt], listeExtensions[cpt]);
      cpt = cpt + 1;
    }
  });

  const pages = [
    urldistanciel,
    urldistanciel + "produit/ex/",
    urldistanciel +
      "categorie-produit/sport/sports_exterieur/planche_a_roulettes/",
  ];

  it("Visiter plusieurs pages", function () {
    let cpt = 0;
    while (cpt < pages.length) {
      cy.visit(pages[cpt]);
      cpt = cpt + 1;
    }
  });
});
