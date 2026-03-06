export type Language = 'en' | 'fr';

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      menu: "Menu",
      reviews: "Reviews",
      visit: "Visit Us",
      reserve: "RESERVE"
    },
    hero: {
      since: "Since 1920",
      subtitle: "PTV – Lifelong Pamplona",
      description: "In the heart of Pamplona, in the mythical Plaza del Castillo.",
      viewMenu: "VIEW MENU",
      reserveTable: "BOOK A TABLE"
    },
    about: {
      tag: "Our History",
      title: "The authentic PTV",
      p1: "Open since <1>1920</1>, at Bar Txoko we are the living concept of <em>\"Lifelong Pamplona\"</em> (PTV). Our history is intrinsically linked to the San Fermín festivities and the daily heartbeat of Plaza del Castillo.",
      p2: "Our historic terrace has been a meeting point for generations. It was here that <1>Ernest Hemingway</1> himself became a regular visitor after the bullfights, popularizing his peculiar and famous order: a <2>\"vanilla milkshake with cognac\"</2>.",
      p3: "A tradition that has transcended decades and today continues to attract American tourists and curious people from all over the world looking to relive that piece of history.",
      quote: "\"Tradition, authenticity, and local culture. The undisputed meeting point in the heart of Pamplona.\""
    },
    menu: {
      tag: "Our Offer",
      title: "The Menu",
      tabs: {
        pintxos: "Pintxos",
        food: "Food",
        drinks: "Drinks",
        gallery: "Gallery"
      },
      categories: {
        pintxos: {
          title: "Pintxos",
          items: [
            { title: "Number 1 – Salmon Tartare with Fresh Cheese and Pickles", price: "4,90 €" },
            { title: "Number 2 – Green Pepper with Mushroom and Prawn Béchamel", price: "4,50 €" },
            { title: "Number 3 – Potato Stuffed with Prawns and Béchamel", price: "4,20 €" },
            { title: "Number 4 – Premium Fresh Foie Toast", price: "7,00 €" },
            { title: "Number 5 – Homemade Navarre Txistorra Pintxo", price: "3,30 €" },
            { title: "Number 6 – Potato Omelette", price: "3,00 €" },
            { title: "Number 7 – Potato Omelette with York Ham and Cheese", price: "3,50 €" },
            { title: "Number 8 – Navarre Vegetable Omelette", price: "3,50 €" },
            { title: "Number 9 – Shepherd's Migas with Organic Fried Egg and Txistorra", price: "5,00 €" },
            { title: "Number 10 – Anchovy \"Pajarico\" (White)", price: "3,50 €" },
            { title: "Number 11 – Anchovy \"Pajarico\" (Brown)", price: "3,50 €" },
            { title: "Number 12 – Prawn and Octopus Skewer", price: "5,50 €" },
            { title: "Number 13 – Truffled Blood Sausage with Foie and Mashed Potatoes", price: "5,50 €" },
            { title: "Number 14 – Zucchini Stuffed with Iberian Ham, Prawns and Piquillo Peppers", price: "4,90 €" },
            { title: "Number 15 – Navarre Veal Ribeye Pintxo", price: "6,50 €" },
            { title: "Number 16 – Ajoarriero Cod Casserole with Quail Egg", price: "4,50 €" },
            { title: "Number 17 – Iberian Sirloin with Bacon and Black Mushroom in Cider Sauce", price: "5,00 €" },
            { title: "Number 18 – Goat Cheese with Grilled Tomato in Port Sauce", price: "4,70 €" },
            { title: "Number 19 – Txacka (Crab stick) Toast Pintxo", price: "4,00 €" },
            { title: "Number 20 – Pig Trotters Stuffed with Mushrooms and Foie", price: "5,50 €" },
            { title: "Number 21 – Piquillo Peppers Stuffed with Angus Mince", price: "5,00 €" },
            { title: "Number 22 – Brioche Stuffed with Ajoarriero and Quail Egg", price: "5,50 €" }
          ]
        },
        platosCombinados: {
          title: "Combined Plates",
          items: [
            { title: "Navarre Veal Entrecôte with Fries, Piquillo Peppers and Salad", price: "25 €" },
            { title: "«Urtain» 2 Fried Eggs with Ham, Fries and Homemade Tomato", price: "18 €" },
            { title: "Grilled Baby Squid with Baked Potatoes, Padrón Peppers, Fried Ham and Cheese, and Ali-Oli", price: "25 €" },
            { title: "Pork Loin with Fries, 2 Croquettes, Piquillo Peppers and Salad", price: "18 €" },
            { title: "Angus Veal Cachopo with Ham and Cheese, Fries and Salad", price: "20 €" }
          ]
        },
        ensaladas: {
          title: "Salads",
          items: [
            { title: "Mixed Salad", price: "15 €" },
            { title: "Smoked Salmon Salad", price: "18 €" }
          ]
        },
        picoteo: {
          title: "Snacks",
          items: [
            { title: "Fried Squid Rings (Rabas)", price: "15 €" },
            { title: "Patatas Bravas", price: "8 €" },
            { title: "Basket of Assorted Mini Croquettes", price: "12 €" },
            { title: "Iberian Ham with Tomato Toasts", price: "25 €" },
            { title: "Homemade Navarre Txistorra", price: "14 €" },
            { title: "Crispy Zucchini Sticks", price: "15 €" },
            { title: "Chicken Wings with Dips", price: "15 €" },
            { title: "Migas with Txistorra and Fried Egg", price: "15 €" }
          ]
        },
        tostadas: {
          title: "Toasts",
          items: [
            { title: "Iberian Ham with Arbequina Oil and Fresh Tomato", price: "15 €" },
            { title: "Oven-Gratinated Vegetables with Cheese", price: "12 €" }
          ]
        },
        bocadillos: {
          title: "Sandwiches (Baguette)",
          items: [
            { title: "Zucchini, Iberian Pancetta, Gouda Cheese and Fresh Tomato", price: "9 €" },
            { title: "Iberian Ham with Pan Tumaca", price: "12 €" },
            { title: "Ham with Green Peppers", price: "8 €" },
            { title: "Pork Loin with Green Peppers and Cheese", price: "9 €" }
          ]
        },
        hamburguesas: {
          title: "Burgers",
          items: [
            { title: "Vegan Burger", price: "16 €", description: "Fresh spinach, mushrooms, piquillo peppers and caramelized onion" },
            { title: "Complete Navarre Veal Burger", price: "16 €", description: "Veal, lettuce, tomato, pancetta, cheese, fried egg and fries" }
          ]
        },
        sandwich: {
          title: "Sandwiches",
          items: [
            { title: "Ham and Cheese with Chips", price: "8 €" },
            { title: "Ham and Cheese with Fried Egg and Chips", price: "9 €" },
            { title: "Vegetable with Chips", price: "8 €" }
          ]
        },
        postres: {
          title: "Desserts",
          intro: "Something sweet to finish!",
          items: [
            { title: "Nougat Ice Cream with Tolosa Tile and Hot Chocolate", price: "8 €" },
            { title: "Waffle with Nutella", price: "8 €" },
            { title: "Chocolate Coulant with Strawberries", price: "8 €" }
          ]
        }
      },
      drinks: {
        intro: "\"For those who enjoy a good after-dinner chat...\"",
        ginebras: "Gins",
        rones: "Rums",
        whiskys: "Whiskies",
        mojitos: "Mojitos",
        otras: "Other Drinks",
        vinosCervezasTitle: "Wines and Beers",
        vinosRecomendados: "Recommended Wines",
        cervezas: "Beers",
        barril: "Draft",
        botellin: "Bottle"
      },
      gallery: {
        intro: "\"A picture is worth a thousand words...\""
      }
    },
    reviews: {
      tag: "Rating based on real Google experiences",
      title: "What our customers say",
      leaveReview: "👉 Leave your review on Google",
      data: [
        { quote: "Excellent food. But the best part is the staff's attention.", name: "Gustavo Jorge Schenzer Oiz" },
        { quote: "Very good food and service. The cheese coulant was incredible.", name: "Istvan Romhany" },
        { quote: "Great place to eat, pleasant treatment and good advice from the waiter.", name: "Oscar Alonso" },
        { quote: "Very tasty tapas and great service despite the crowd.", name: "Aitana Rebollar" },
        { quote: "Fast service and good product. Recommended.", name: "MAYPI GOMEZ" },
        { quote: "A lifelong classic. Good pintxos and wines.", name: "Pepe Pepe" },
        { quote: "Luxury dining. Excellent quality and fair price.", name: "Laura Fuente" },
        { quote: "They let us in with a dog. Attentive service and excellent food.", name: "Vero Bazaco" },
        { quote: "Emblematic bar in Plaza del Castillo. Good atmosphere.", name: "JGR" },
        { quote: "Mandatory stop. Very good squid rings and pintxos.", name: "Edurne Conde" },
        { quote: "We ate very well. Great and friendly service.", name: "Maite Mata" },
        { quote: "Very good attention and spectacular terrace.", name: "Rosa B" },
        { quote: "Good weekend menu, delicious dishes and pleasant atmosphere.", name: "Boris Nogales" },
        { quote: "Excellent place, good food and good attention.", name: "Bryan Qzada" },
        { quote: "We were surprised by the quality and the staff's treatment.", name: "Pedro Saz" },
        { quote: "Good coffee and awesome pintxos. Emblematic bar.", name: "Armando Rodriguez" },
        { quote: "Incredible atmosphere in the square and very good food.", name: "Natalia Bienvenida" },
        { quote: "100% recommended. Good food and professional service.", name: "Natàlia Giné" }
      ]
    },
    location: {
      tag: "Visit Us",
      title: "Where we are",
      addressTitle: "Address",
      hoursTitle: "Opening Hours",
      contactTitle: "Contact",
      days: {
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday",
        sun: "Sunday"
      }
    },
    reservation: {
      tag: "Make your Reservation",
      title: "Call us to secure your table",
      desc: "To offer you the best attention and confirm availability instantly, we manage all our reservations by phone."
    },
    footer: {
      since: "Since 1920",
      location: "Location",
      contact: "Contact",
      hours: "Opening Hours",
      weekdays: "Mon - Fri",
      weekend: "Sat - Sun",
      rights: "ALL RIGHTS RESERVED.",
      legal: "LEGAL NOTICE",
      privacy: "PRIVACY POLICY"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      menu: "Menu",
      reviews: "Avis",
      visit: "Visitez-nous",
      reserve: "RÉSERVER"
    },
    hero: {
      since: "Depuis 1920",
      subtitle: "PTV – Pampelune de Toute la Vie",
      description: "Au cœur de Pampelune, sur la mythique Plaza del Castillo.",
      viewMenu: "VOIR LE MENU",
      reserveTable: "RÉSERVER UNE TABLE"
    },
    about: {
      tag: "Notre Histoire",
      title: "L'authentique PTV",
      p1: "Ouvert depuis <1>1920</1>, au Bar Txoko nous sommes le concept vivant de <em>\"Pampelune de Toute la Vie\"</em> (PTV). Notre histoire est intrinsèquement liée aux fêtes de San Fermín et au rythme quotidien de la Plaza del Castillo.",
      p2: "Notre terrasse historique a été un point de rencontre pour des générations. C'est ici qu'<1>Ernest Hemingway</1> lui-même est devenu un visiteur régulier après les corridas, popularisant sa commande particulière et célèbre : un <2>\"milk-shake à la vanille avec du cognac\"</2>.",
      p3: "Une tradition qui a traversé les décennies et qui continue aujourd'hui d'attirer les touristes américains et les curieux du monde entier cherchant à revivre ce morceau d'histoire.",
      quote: "\"Tradition, authenticité et culture locale. Le point de rencontre incontestable au cœur de Pampelune.\""
    },
    menu: {
      tag: "Notre Offre",
      title: "Le Menu",
      tabs: {
        pintxos: "Pintxos",
        food: "Nourriture",
        drinks: "Boissons",
        gallery: "Galerie"
      },
      categories: {
        pintxos: {
          title: "Pintxos",
          items: [
            { title: "Numéro 1 – Tartare de Saumon au Fromage Frais et Cornichons", price: "4,90 €" },
            { title: "Numéro 2 – Poivron Vert avec Béchamel aux Champignons et Crevettes", price: "4,50 €" },
            { title: "Numéro 3 – Pomme de Terre Farcie aux Crevettes et Béchamel", price: "4,20 €" },
            { title: "Numéro 4 – Toast de Foie Frais de Premier Choix", price: "7,00 €" },
            { title: "Numéro 5 – Pintxo de Txistorra Maison de Navarre", price: "3,30 €" },
            { title: "Numéro 6 – Omelette aux Pommes de Terre", price: "3,00 €" },
            { title: "Numéro 7 – Omelette aux Pommes de Terre avec Jambon Blanc et Fromage", price: "3,50 €" },
            { title: "Numéro 8 – Omelette aux Légumes de Navarre", price: "3,50 €" },
            { title: "Numéro 9 – Migas de Berger avec Œuf Frit Bio et Txistorra", price: "5,00 €" },
            { title: "Numéro 10 – \"Pajarico\" d'Anchois Blanc", price: "3,50 €" },
            { title: "Numéro 11 – \"Pajarico\" d'Anchois", price: "3,50 €" },
            { title: "Numéro 12 – Brochette de Crevettes et Poulpe", price: "5,50 €" },
            { title: "Numéro 13 – Boudin Truffé au Foie et Purée de Pommes de Terre", price: "5,50 €" },
            { title: "Numéro 14 – Courgette Farcie au Jambon Ibérique, Crevettes et Poivrons Piquillo", price: "4,90 €" },
            { title: "Numéro 15 – Pintxo de Faux-filet de Veau de Navarre", price: "6,50 €" },
            { title: "Numéro 16 – Cassolette de Morue Ajoarriero avec Œuf de Caille", price: "4,50 €" },
            { title: "Numéro 17 – Faux-filet Ibérique avec Bacon et Champignon Noir Sauce au Cidre", price: "5,00 €" },
            { title: "Numéro 18 – Fromage de Chèvre avec Tomate Grillée Sauce au Porto", price: "4,70 €" },
            { title: "Numéro 19 – Toast de Txacka (Surimi)", price: "4,00 €" },
            { title: "Numéro 20 – Pieds de Porc Farcis aux Champignons et Foie", price: "5,50 €" },
            { title: "Numéro 21 – Poivrons Piquillo Farcis au Hachis d'Angus", price: "5,00 €" },
            { title: "Numéro 22 – Brioche Farcie à l'Ajoarriero et Œuf de Caille", price: "5,50 €" }
          ]
        },
        platosCombinados: {
          title: "Assiettes Composées",
          items: [
            { title: "Entrecôte de Veau de Navarre avec Frites, Poivrons Piquillo et Salade", price: "25 €" },
            { title: "«Urtain» 2 Œufs Frits avec Jambon, Frites et Tomate Maison", price: "18 €" },
            { title: "Petits Calamars Grillés avec Pommes de Terre Boulangères, Poivrons de Padrón, Frit de Jambon et Fromage, et Aïoli", price: "25 €" },
            { title: "Longe de Porc avec Frites, 2 Croquettes, Poivrons Piquillo et Salade", price: "18 €" },
            { title: "Cachopo de Veau Angus avec Jambon et Fromage, Frites et Salade", price: "20 €" }
          ]
        },
        ensaladas: {
          title: "Salades",
          items: [
            { title: "Salade Mixte", price: "15 €" },
            { title: "Salade de Saumon Fumé", price: "18 €" }
          ]
        },
        picoteo: {
          title: "Grignotages",
          items: [
            { title: "Anneaux de Calamar Frits (Rabas)", price: "15 €" },
            { title: "Patatas Bravas", price: "8 €" },
            { title: "Panier de Mini Croquettes Assorties", price: "12 €" },
            { title: "Jambon Ibérique avec Toasts à la Tomate", price: "25 €" },
            { title: "Txistorra Maison de Navarre", price: "14 €" },
            { title: "Bâtonnets de Courgette Croustillants", price: "15 €" },
            { title: "Ailes de Poulet avec Sauces", price: "15 €" },
            { title: "Migas avec Txistorra et Œuf Frit", price: "15 €" }
          ]
        },
        tostadas: {
          title: "Toasts",
          items: [
            { title: "Jambon Ibérique avec Huile d'Arbequina et Tomate Fraîche", price: "15 €" },
            { title: "Légumes Gratinés au Four avec Fromage", price: "12 €" }
          ]
        },
        bocadillos: {
          title: "Sandwiches (Baguette)",
          items: [
            { title: "Courgette, Pancetta Ibérique, Fromage Gouda et Tomate Fraîche", price: "9 €" },
            { title: "Jambon Ibérique avec Pan Tumaca", price: "12 €" },
            { title: "Jambon aux Poivrons Verts", price: "8 €" },
            { title: "Longe de Porc aux Poivrons Verts et Fromage", price: "9 €" }
          ]
        },
        hamburguesas: {
          title: "Burgers",
          items: [
            { title: "Burger Vegan", price: "16 €", description: "Épinards frais, champignons, poivrons piquillo et oignon caramélisé" },
            { title: "Burger Complet de Veau de Navarre", price: "16 €", description: "Veau, laitue, tomate, pancetta, fromage, œuf frit et frites" }
          ]
        },
        sandwich: {
          title: "Sandwiches",
          items: [
            { title: "Jambon et Fromage avec Chips", price: "8 €" },
            { title: "Jambon et Fromage avec Œuf Frit et Chips", price: "9 €" },
            { title: "Végétarien avec Chips", price: "8 €" }
          ]
        },
        postres: {
          title: "Desserts",
          intro: "Quelque chose de doux pour terminer !",
          items: [
            { title: "Glace au Nougat avec Tuile de Tolosa et Chocolat Chaud", price: "8 €" },
            { title: "Gaufre au Nutella", price: "8 €" },
            { title: "Coulant au Chocolat avec Fraises", price: "8 €" }
          ]
        }
      },
      drinks: {
        intro: "\"Pour ceux qui aiment discuter après le repas...\"",
        ginebras: "Gins",
        rones: "Rhums",
        whiskys: "Whiskys",
        mojitos: "Mojitos",
        otras: "Autres Boissons",
        vinosCervezasTitle: "Vins et Bières",
        vinosRecomendados: "Vins Recommandés",
        cervezas: "Bières",
        barril: "Pression",
        botellin: "Bouteille"
      },
      gallery: {
        intro: "\"Une image vaut mille mots...\""
      }
    },
    reviews: {
      tag: "Évaluation basée sur des expériences Google réelles",
      title: "Ce que disent nos clients",
      leaveReview: "👉 Laissez votre avis sur Google",
      data: [
        { quote: "Excellente nourriture. Mais le meilleur, c'est l'attention du personnel.", name: "Gustavo Jorge Schenzer Oiz" },
        { quote: "Nourriture et service très bons. Le coulant au fromage était incroyable.", name: "Istvan Romhany" },
        { quote: "Très bon endroit pour manger, traitement agréable et bons conseils du serveur.", name: "Oscar Alonso" },
        { quote: "Tapas très savoureuses et super service malgré le monde.", name: "Aitana Rebollar" },
        { quote: "Service rapide et bon produit. Recommandé.", name: "MAYPI GOMEZ" },
        { quote: "Un classique de toute une vie. Bons pintxos et vins.", name: "Pepe Pepe" },
        { quote: "Repas de luxe. Excellente qualité et prix juste.", name: "Laura Fuente" },
        { quote: "Ils nous ont laissés entrer avec un chien. Service attentionné et excellente nourriture.", name: "Vero Bazaco" },
        { quote: "Bar emblématique sur la Plaza del Castillo. Bonne ambiance.", name: "JGR" },
        { quote: "Arrêt obligatoire. Très bons anneaux de calmar et pintxos.", name: "Edurne Conde" },
        { quote: "Nous avons très bien mangé. Service génial et aimable.", name: "Maite Mata" },
        { quote: "Très bonne attention et terrasse spectaculaire.", name: "Rosa B" },
        { quote: "Bon menu de week-end, plats délicieux et ambiance agréable.", name: "Boris Nogales" },
        { quote: "Excellent endroit, bonne nourriture et bonne attention.", name: "Bryan Qzada" },
        { quote: "Nous avons été surpris par la qualité et le traitement du personnel.", name: "Pedro Saz" },
        { quote: "Bon café et pintxos géniaux. Bar emblématique.", name: "Armando Rodriguez" },
        { quote: "Ambiance incroyable sur la place et très bonne nourriture.", name: "Natalia Bienvenida" },
        { quote: "Recommandé à 100%. Bonne nourriture et service professionnel.", name: "Natàlia Giné" }
      ]
    },
    location: {
      tag: "Visitez-nous",
      title: "Où nous sommes",
      addressTitle: "Adresse",
      hoursTitle: "Horaires",
      contactTitle: "Contact",
      days: {
        mon: "Lundi",
        tue: "Mardi",
        wed: "Mercredi",
        thu: "Jeudi",
        fri: "Vendredi",
        sat: "Samedi",
        sun: "Dimanche"
      }
    },
    reservation: {
      tag: "Faites votre Réservation",
      title: "Appelez-nous pour réserver votre table",
      desc: "Pour vous offrir la meilleure attention et confirmer la disponibilité instantanément, nous gérons toutes nos réservations par téléphone."
    },
    footer: {
      since: "Depuis 1920",
      location: "Emplacement",
      contact: "Contact",
      hours: "Horaires",
      weekdays: "Lun - Ven",
      weekend: "Sam - Dim",
      rights: "TOUS DROITS RÉSERVÉS.",
      legal: "MENTIONS LÉGALES",
      privacy: "POLITIQUE DE CONFIDENTIALITÉ"
    }
  }
};
