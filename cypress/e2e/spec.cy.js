import "cypress-real-events";

const username = "oliviernathanael";
const password = "azerty";

describe("Tests du site talaron fashion", () => {
  beforeEach(() => {
    cy.visit("https://landscape:somber@dull-ghost.localsite.io/");
  });

  xit("Connexion à son compte", () => {
    //cy.visit('https://landscape:somber@dull-ghost.localsite.io/')
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
  });

  xit("Ajout d'un article au panier", function () {
    //cy.visit('https://landscape:somber@dull-ghost.localsite.io/')
    cy.get('#main a[href="/?add-to-cart=2730"] span').click();
    cy.get("#main a.wc-forward").click();
    cy.get("#masthead span.quantity").should("have.text", "1 item");
  });

  xit("Présence d'un bouton d'accès à la barre de recherche", function () {
    //Ouvrir page
    cy.visit("https://landscape:somber@dull-ghost.localsite.io/");
    //page est ouverte
    cy.url().should("eq", "https://dull-ghost.localsite.io/");
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
  });

  const adresses1 = [
    "https://landscape:somber@dull-ghost.localsite.io/",
    "https://landscape:somber@dull-ghost.localsite.io/produit/ex/",
    "https://landscape:somber@dull-ghost.localsite.io/categorie-produit/sport/sports_exterieur/planche_a_roulettes/",
    "https://landscape:somber@dull-ghost.localsite.io/etiquette-produit/vroum-vroum/",
    //"https://landscape:somber@dull-ghost.localsite.io/marque/louis-pasteur/",
    // "https://landscape:somber@dull-ghost.localsite.io/panier/",
    // "https://landscape:somber@dull-ghost.localsite.io/?s=&post_type=product&category=0",
    "https://landscape:somber@dull-ghost.localsite.io/commander/",
    "https://landscape:somber@dull-ghost.localsite.io/mon-compte/",
    "https://landscape:somber@dull-ghost.localsite.io/mon-compte/mes_commandes/",
    "https://landscape:somber@dull-ghost.localsite.io/mon-compte/mes_telechargements/",
    "https://landscape:somber@dull-ghost.localsite.io/mon-compte/mes_adresses/",
    "https://landscape:somber@dull-ghost.localsite.io/mon-compte/mes_adresses/facturation/",
    "https://landscape:somber@dull-ghost.localsite.io/mon-compte/mes_adresses/livraison/",
    "https://landscape:somber@dull-ghost.localsite.io/mon-compte/informations_personnelles/",
  ];

  const adresses2 = [
    "https://dull-ghost.localsite.io/",

    "https://dull-ghost.localsite.io/produit/ex/",

    "https://dull-ghost.localsite.io/categorie-produit/sport/sports_exterieur/planche_a_roulettes/",

    "https://dull-ghost.localsite.io/etiquette-produit/vroum-vroum/",

    //"https://dull-ghost.localsite.io/marque/louis-pasteur/",

    // "https://dull-ghost.localsite.io/panier/",

    // "https://dull-ghost.localsite.io/?s=&post_type=product&category=0",

    "https://dull-ghost.localsite.io/commander/",

    "https://dull-ghost.localsite.io/mon-compte/",

    "https://dull-ghost.localsite.io/mon-compte/mes_commandes/",

    "https://dull-ghost.localsite.io/mon-compte/mes_telechargements/",

    "https://dull-ghost.localsite.io/mon-compte/mes_adresses/",

    "https://dull-ghost.localsite.io/mon-compte/mes_adresses/facturation/",

    "https://dull-ghost.localsite.io/mon-compte/mes_adresses/livraison/",

    "https://dull-ghost.localsite.io/mon-compte/informations_personnelles/",
  ];

  xit("Présence d'un bouton d'accès à la barre de recherche 2", function () {
    let cpt = 0;
    while (cpt < adresses1.length) {
      cy.visit("https://landscape:somber@dull-ghost.localsite.io/");
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

  it("Présence d'un bouton d'accès à la barre de recherche 3", function () {
    cy.visit("https://landscape:somber@dull-ghost.localsite.io/");
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

    //Ouvrir page
    cy.visit("https://landscape:somber@dull-ghost.localsite.io/commander/");
    //page est ouverte
    cy.url().should("eq", "https://dull-ghost.localsite.io/commander/");
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
  });
});

/*
     cy.fixture("adresses").then((adresses) => {
       cy.get("#adresses1");
     });

     */
