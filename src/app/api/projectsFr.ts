export const projectsFr = [
    {
      id:"pfe",
      name: "Projet de fin d'étude - PFE",
      technologies: 'Angular, Java, SpringBoot, Docker, MongoDB',
      images: [
          {
              title:'',
              src: "assets/images/voyages.webp",
          },
          {
              title:'',
              src:"assets/images/voyage.webp",
          },
          {
              title:'',
              src: "assets/images/logements.webp",
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
                title:'',
                src: "assets/images/voyages.webp",
            },
            {
                title:'',
                src:"assets/images/voyage.webp",
            },
            {
                title:'',
                src: "assets/images/logements.webp",
            },
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
                title:'Compagnes de marketing',
                src:   "assets/images/compagnes.jpg",
            },
            {
                title:'Détail de la compagne',
                src :"assets/images/compagne-detail.jpg",
            },
            {
                title:"Performance d'un émail",
                src: "assets/images/email-detail.jpg",
            },
            {
                title:"Performance d'un Asset",
                src: "assets/images/asset-detail.jpg"
            },

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
              title:'Pokedex',
              src:   "assets/images/pokedex.png",
          },
          {
              title:'Trainers',
              src :"assets/images/trainers.png",
          },
          {
              title:"Profile",
              src: "assets/images/profile-trainer.png",
          },
      ],
      url:'https://cytech-cloud.web.app/',
      detail:"Cyfeast est une application web qui permet de voir les évènements, de s'inscrire à ces évènements, gerer les évènements et les stocks. L'application est codée en Angular et utilise Firebase pour la base de données et le déploiment.",
      codeSourceUrl:'https://cytech-cloud.web.app/',
      detailIsDisplayed: false,
    },
    {
        id:"pokedex",
        name: "Pokedex",
        technologies: 'Java, J2EE, SpringBoot, TDD, MySQL, BootStrap, Services, Deploiment',
        images: [
            {
                title:'Pokedex',
                src:   "assets/images/pokedex.png",
            },
            {
                title:'Trainers',
                src :"assets/images/trainers.png",
            },
            {
                title:"Profile",
                src: "assets/images/profile-trainer.png",
            },
        ],
        url:'#portfolio',
        detail:"<p>Affichage du détail des pokémons et de leurs drésseurs.</p> <p>L'application contient deux micro-service: pokemon management et trainer management, qui exposent un canal de communication REST/JSON.<br>Le 3éme micro-service WEB-UI se connecte aux deux micro-service.</p>",
        codeSourceUrl:'https://github.com/ifi-2019/trainer-ui-zinedineBenkhider',
        detailIsDisplayed: false,
    },
];

