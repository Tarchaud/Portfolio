export const projectsFr = [
    {
      id:"pfe",
      name: "Projet de fin d'étude - PFE",
      technologies: 'Angular, Java, SpringBoot, Docker, MongoDB',
      images: [
          {
              title:'liste des items',
              src: "assets/images/pfe/pfe_liste_items.png",
          },
          {
              title:'formulaire de création de page d\'équipement',
              src: "assets/images/pfe/pfe_form_build.png",
          },
          {
              title:'page d\'équipement créée',
              src: "assets/images/pfe/pfe_page_build.png",
          },
      ],
      url: "https://github.com/Tarchaud/PFE",
      detail:"Le projet est une application qui permet de générer automatique des pages d'équipement pour le jeu MMORPG Wakfu selon les effects démandé par l'utilisateur mais aussi de pouvoir voir tout les équipements du jeu et voir les page d'équipement créées par les autres utilisateurs.",
      codeSourceUrl:'https://github.com/Tarchaud/PFE',
      detailIsDisplayed: false,
    },
    {
        id:"TrackingGPS_Kafka",
        name: "Simulateur de tracking GPS",
        technologies: 'angular, Docker, Kafka, Postgres, WebSocket, Python, fastapi',
        images: [
            {
                title:'carte de tracking GPS',
                src: "assets/images/kafka/kafka_map.png",
            }
        ],
        url: "https://github.com/Tarchaud/TrackingGPS_Kafka",
        detail:"L'application est un simulateur de tracking GPS en temps réel qui permet de simuler des déplacements de 2 personnes sur une carte. Les données sont envoyées à un serveur Kafka qui les stocke dans une base de données Postgres. Les données sont ensuite récupérées par un client WebSocket qui les affiche sur une carte.",
        codeSourceUrl:'https://github.com/Tarchaud/TrackingGPS_Kafka',
        detailIsDisplayed: false,
    },
    {
        id:"blackjack",
        name: "Blackjack",
        technologies: 'C',
        images: [
            {
                title:'début de la partie',
                src: "assets/images/blackjack/blackjack_1.png",
            },
            {
                title:'fin de manche',
                src: "assets/images/blackjack/blackjack_2.png",
            }

        ],
        url:'https://github.com/Tarchaud/BlackJack_TP',
        detail:"Le projet est le jeu de cartes Blackjack. Le jeu se joue dans une terminal et plusieurs joueurs peuvent jouer en même temps contre le croupier. Le jeu est codé en C.",
        codeSourceUrl:'https://github.com/Tarchaud/BlackJack_TP',
        detailIsDisplayed: false,
    },
    {
      id:"cyfeast",
      name: "Cy-Events",
      technologies: 'Angular, firebase',
      images: [
          {
              title:'liste des évènements',
              src: "assets/images/cyfeast/cyfeast.png",
          },
          {
              title:'gestion des stocks',
              src: "assets/images/cyfeast/cyfeast_stock.png",
          },
      ],
      url:'https://cytech-cloud.web.app/',
      detail:"Cyfeast est une application web qui permet de voir les évènements, de s'inscrire à ces évènements, gerer les évènements et les stocks. L'application est codée en Angular et utilise Firebase pour la base de données et le déploiment.",
      codeSourceUrl:'https://cytech-cloud.web.app/',
      detailIsDisplayed: false,
    },
];

