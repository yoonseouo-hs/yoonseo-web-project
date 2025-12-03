// 명품 브랜드 데이터
const brandData = {
  louisvuitton: {
    name: 'Louis Vuitton',
    official: 'https://www.louisvuitton.com',
    category: 'Fashion & Leather Goods',
    image: 'https://kr.louisvuitton.com/content/dam/lv/online/high-end/men/fashion_show/M_Fa_Show_MenSS26.html/jcr:content/assets/looks/MEN_SS26_SHOW_LOOKS_LVCOM_1600x2000_DII_02.jpg?imwidth=2400',
    collections: [
      { year: 2025, items: ['Neverfull MM', 'Speedy 30', 'Alma'] },
      { year: 2024, items: ['Twist Bag', 'Capucines', 'Favorite'] },
      { year: 2023, items: ['Noé Bag', 'Montaigne', 'Pont-Neuf'] }
    ]
  },
  hermes: {
    name: 'Hermès',
    official: 'https://www.hermes.com',
    category: 'Fashion & Leather Goods',
    image: 'https://assets.hermes.com/is/image/hermesedito/HERMES_WRTW_SS26_Runway_FilippoFior_10?fit=wrap%2C0&wid=768&resMode=sharp2&op_usm=1%2C1%2C6%2C0',
    collections: [
      { year: 2025, items: ['Birkin 35', 'Kelly Bag', 'Evelyne'] },
      { year: 2024, items: ['Picotin Lock', 'Constance', 'Roulis'] },
      { year: 2023, items: ['Béarn Wallet', 'Garden Party', 'Lindy'] }
    ]
  },
  chanel: {
    name: 'Chanel',
    official: 'https://www.chanel.com',
    category: 'Fashion & Leather Goods',
    image: 'https://www.chanel.com/images/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_786/FSH-1751995856150-fall-winter-2025-26-haute-couture-046.jpg',
    collections: [
      { year: 2025, items: ['Classic Flap', 'GST Bag', 'Camera Bag'] },
      { year: 2024, items: ['Coco Handle', 'Boy Bag', 'Wallet on Chain'] },
      { year: 2023, items: ['Vanity Case', '2.55 Reissue', 'Quilted Bag'] }
    ]
  },
  gucci: {
    name: 'Gucci',
    official: 'https://www.gucci.com',
    category: 'Fashion & Leather Goods',
    collections: [
      { year: 2025, items: ['Marmont Bag', 'GG Supreme', 'Dionysus'] },
      { year: 2024, items: ['Hobo Bag', 'Crossbody', 'Clutch'] },
      { year: 2023, items: ['Jackie Bag', 'Soho Bag', 'Bamboo'] }
    ]
  },
  dior: {
    name: 'Dior',
    official: 'https://www.dior.com',
    category: 'Fashion & Leather Goods',
    image: 'https://www.dior.com/en_us/fashion',
    collections: [
      { year: 2025, items: ['Saddle Bag', 'Book Tote', 'DiorTravel'] },
      { year: 2024, items: ['30 Montaigne', 'Caro Bag', 'Diorissimo'] },
      { year: 2023, items: ['Oblique Bag', 'Dior Addict', 'Lady Dior'] }
    ]
  },
  ysl: {
    name: 'Saint Laurent (YSL)',
    official: 'https://www.ysl.com',
    category: 'Fashion & Leather Goods',
    collections: [
      { year: 2025, items: ['Muse Bag', 'Monogramme', 'LouLou'] },
      { year: 2024, items: ['Betty Bag', 'Kate Bag', 'Sac de Jour'] },
      { year: 2023, items: ['Roady Bag', 'Tributes', 'Uptown'] }
    ]
  },
  prada: {
    name: 'Prada',
    official: 'https://www.prada.com',
    category: 'Fashion & Leather Goods',
    collections: [
      { year: 2025, items: ['Re-Edition 2005', 'Galleria Bag', 'Cahier'] },
      { year: 2024, items: ['Symbag', 'Re-Nylon Bag', 'Prada Tote'] },
      { year: 2023, items: ['Saffiano Leather', 'Tessuto Bag', 'Sidecar'] }
    ]
  },
  fendi: {
    name: 'Fendi',
    official: 'https://www.fendi.com',
    category: 'Fashion & Leather Goods',
    collections: [
      { year: 2025, items: ['Baguette Bag', 'Peekaboo', 'Zucca'] },
      { year: 2024, items: ['Sunshine Shopper', 'First', 'Pequin'] },
      { year: 2023, items: ['Selleria Bag', 'Zucca Frame', 'Canasta'] }
    ]
  },
  celine: {
    name: 'Céline',
    official: 'https://www.celine.com',
    category: 'Fashion & Leather Goods',
    collections: [
      { year: 2025, items: ['Luggage Tote', 'Trapeze Bag', 'Ring Bag'] },
      { year: 2024, items: ['Phantom Bag', 'Boston Bag', 'Trotteur'] },
      { year: 2023, items: ['Audrey Bag', 'Frame Bag', 'Cabas'] }
    ]
  },
  loewe: {
    name: 'Loewe',
    official: 'https://www.loewe.com',
    category: 'Fashion & Leather Goods',
    collections: [
      { year: 2025, items: ['Puzzle Bag', 'Amazona', 'Gate Bag'] },
      { year: 2024, items: ['Rainbow Bag', 'Small Satchel', 'Gate Pocket'] },
      { year: 2023, items: ['Barcelona Bag', 'Heel Pouch', 'Flamenco'] }
    ]
  },
  bottegaveneta: {
    name: 'Bottega Veneta',
    official: 'https://www.bottegaveneta.com',
    category: 'Fashion & Leather Goods',
    collections: [
      { year: 2025, items: ['Intrecciato', 'Arco Tote', 'Nodini'] },
      { year: 2024, items: ['Jodie Bag', 'Loop Bag', 'Pouch'] },
      { year: 2023, items: ['Knot Bag', 'Cabat', 'Campana'] }
    ]
  },
  balenciaga: {
    name: 'Balenciaga',
    official: 'https://www.balenciaga.com',
    category: 'Fashion & Leather Goods',
    collections: [
      { year: 2025, items: ['City Bag', 'Motorcycle', 'Neo Classic'] },
      { year: 2024, items: ['Work Bag', 'Triangle', 'Hourglass'] },
      { year: 2023, items: ['Box Bag', 'Giant', 'First'] }
    ]
  },
  givenchy: {
    name: 'Givenchy',
    official: 'https://www.givenchy.com',
    category: 'Fashion & Leather Goods',
    collections: [
      { year: 2025, items: ['Pandora Bag', 'Antigona', 'Obsedia'] },
      { year: 2024, items: ['Mystic Bag', 'Infinity', 'Wing'] },
      { year: 2023, items: ['Lucrezia', 'HDG', 'Tinsel'] }
    ]
  },
  burberry: {
    name: 'Burberry',
    official: 'https://www.burberry.com',
    category: 'Fashion & Leather Goods',
    collections: [
      { year: 2025, items: ['TB Bag', 'Lola', 'Note'] },
      { year: 2024, items: ['Knight', 'Rowe', 'Olympia'] },
      { year: 2023, items: ['Horseferry', 'Vintage Check', 'Society'] }
    ]
  },
  valentino: {
    name: 'Valentino',
    official: 'https://www.valentino.com',
    category: 'Fashion & Leather Goods',
    collections: [
      { year: 2025, items: ['Rockstud Bag', 'Garavani', 'Tote'] },
      { year: 2024, items: ['Demilune', 'Roman Stud', 'Rocklock'] },
      { year: 2023, items: ['Papillon', 'Vitello', 'Quilted'] }
    ]
  },
  moynat: {
    name: 'Moynat',
    official: 'https://www.moynat.com',
    category: 'Fashion & Leather Goods',
    collections: [
      { year: 2025, items: ['Turenne', 'Rejane', 'Gabrielle'] },
      { year: 2024, items: ['Madeleine', 'Dorsay', 'Noémie'] },
      { year: 2023, items: ['Capsule', 'Biarritz', 'Collection'] }
    ]
  },
  delvaux: {
    name: 'Delvaux',
    official: 'https://www.delvaux.com',
    category: 'Fashion & Leather Goods',
    collections: [
      { year: 2025, items: ['Brillant', 'Tempête', 'Madame'] },
      { year: 2024, items: ['Louise', 'Panacea', 'Amazone'] },
      { year: 2023, items: ['Talisman', 'Rarissime', 'Heritage'] }
    ]
  },
  bally: {
    name: 'Bally',
    official: 'https://www.bally.com',
    category: 'Fashion & Leather Goods',
    collections: [
      { year: 2025, items: ['Traveller Tote', 'Emblem Bag', 'Frame'] },
      { year: 2024, items: ['Leather Goods', 'Crossbody', 'Top Handle'] },
      { year: 2023, items: ['Satchel', 'Clutch', 'Shoulder'] }
    ]
  },
  etro: {
    name: 'Etro',
    official: 'https://www.etro.com',
    category: 'Fashion & Leather Goods',
    collections: [
      { year: 2025, items: ['Paisley Bag', 'Tote', 'Crossbody'] },
      { year: 2024, items: ['Printed Bag', 'Leather', 'Canvas'] },
      { year: 2023, items: ['Collection', 'Shoulder', 'Clutch'] }
    ]
  },
  brunellocucinelli: {
    name: 'Brunello Cucinelli',
    official: 'https://www.brunellocucinelli.com',
    category: 'Fashion & Leather Goods',
    collections: [
      { year: 2025, items: ['Monile Bag', 'Tote', 'Satchel'] },
      { year: 2024, items: ['Leather', 'Structured', 'Crossbody'] },
      { year: 2023, items: ['Collection', 'Hobo', 'Clutch'] }
    ]
  },
  zegna: {
    name: 'Ermenegildo Zegna',
    official: 'https://www.zegna.com',
    category: 'Fashion & Leather Goods',
    collections: [
      { year: 2025, items: ['Structured Bag', 'Tote', 'Crossbody'] },
      { year: 2024, items: ['Premium Leather', 'Business', 'Travel'] },
      { year: 2023, items: ['Collection', 'Weekend', 'Messenger'] }
    ]
  },
  tomford: {
    name: 'Tom Ford',
    official: 'https://www.tomford.com',
    category: 'Fashion & Leather Goods',
    collections: [
      { year: 2025, items: ['Jennifer Bag', 'Tote', 'Crossbody'] },
      { year: 2024, items: ['Luxury Leather', 'Sedgwick', 'Alix'] },
      { year: 2023, items: ['Natalia', 'Whitney', 'Fiesta'] }
    ]
  },
  mcm: {
    name: 'MCM',
    official: 'https://www.mcmworldwide.com',
    category: 'Fashion & Leather Goods',
    collections: [
      { year: 2025, items: ['Stark Bag', 'Visetos', 'Monogram'] },
      { year: 2024, items: ['Medium Bag', 'Crossbody', 'Backpack'] },
      { year: 2023, items: ['Collection', 'Travel', 'Tote'] }
    ]
  },
  tods: {
    name: 'Tod\'s',
    official: 'https://www.tods.com',
    category: 'Fashion & Leather Goods',
    collections: [
      { year: 2025, items: ['Gommini Bag', 'Tote', 'Leather'] },
      { year: 2024, items: ['D-Bag', 'D-Ring', 'Shoulder'] },
      { year: 2023, items: ['Collection', 'Hobo', 'Crossbody'] }
    ]
  },
  ferragamo: {
    name: 'Salvatore Ferragamo',
    official: 'https://www.ferragamo.com',
    category: 'Fashion & Leather Goods',
    collections: [
      { year: 2025, items: ['Tote Bag', 'Leather', 'Gancio'] },
      { year: 2024, items: ['Crossbody', 'Shoulder', 'Top Handle'] },
      { year: 2023, items: ['Collection', 'Clutch', 'Structured'] }
    ]
  },
  kenzo: {
    name: 'Kenzo',
    official: 'https://www.kenzo.com',
    category: 'Fashion & Leather Goods',
    collections: [
      { year: 2025, items: ['Tiger Bag', 'Tote', 'Crossbody'] },
      { year: 2024, items: ['Printed Bag', 'Leather', 'Canvas'] },
      { year: 2023, items: ['Collection', 'Shoulder', 'Clutch'] }
    ]
  },
  marni: {
    name: 'Marni',
    official: 'https://www.marni.com',
    category: 'Fashion & Leather Goods',
    collections: [
      { year: 2025, items: ['Trunk Bag', 'Tote', 'Crossbody'] },
      { year: 2024, items: ['Structured', 'Leather', 'Colorful'] },
      { year: 2023, items: ['Collection', 'Shoulder', 'Clutch'] }
    ]
  },
  isabelmarant: {
    name: 'Isabel Marant',
    official: 'https://www.isabelmarant.com',
    category: 'Fashion & Leather Goods',
    collections: [
      { year: 2025, items: ['Leather Bag', 'Tote', 'Crossbody'] },
      { year: 2024, items: ['Structured', 'Boho', 'Contemporary'] },
      { year: 2023, items: ['Collection', 'Shoulder', 'Clutch'] }
    ]
  },
  missoni: {
    name: 'Missoni',
    official: 'https://www.missoni.com',
    category: 'Fashion & Leather Goods',
    collections: [
      { year: 2025, items: ['Knit Bag', 'Tote', 'Shoulder'] },
      { year: 2024, items: ['Striped', 'Colorful', 'Canvas'] },
      { year: 2023, items: ['Collection', 'Crossbody', 'Clutch'] }
    ]
  },
  // High Fashion & Couture
  armani: {
    name: 'Giorgio Armani',
    official: 'https://www.giorgioarmani.com',
    category: 'High Fashion & Couture',
    collections: [
      { year: 2025, items: ['Classic Tailoring', 'Evening Wear', 'Accessories'] },
      { year: 2024, items: ['Collection', 'Suit', 'Dress'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Signature'] }
    ]
  },
  versace: {
    name: 'Versace',
    official: 'https://www.versace.com',
    category: 'High Fashion & Couture',
    collections: [
      { year: 2025, items: ['Baroque Print', 'Medusa', 'Iconic'] },
      { year: 2024, items: ['Dress', 'Suit', 'Gown'] },
      { year: 2023, items: ['Collection', 'Statement', 'Luxury'] }
    ]
  },
  maisonmargiela: {
    name: 'Maison Margiela',
    official: 'https://www.maisonmargiela.com',
    category: 'High Fashion & Couture',
    collections: [
      { year: 2025, items: ['Artisanal', 'Replica', 'Tabi'] },
      { year: 2024, items: ['Collection', 'Avant-Garde', 'Luxury'] },
      { year: 2023, items: ['Heritage', 'Contemporary', 'Fashion'] }
    ]
  },
  mcqueen: {
    name: 'Alexander McQueen',
    official: 'https://www.alexandermcqueen.com',
    category: 'High Fashion & Couture',
    collections: [
      { year: 2025, items: ['Skull', 'Daring', 'Elegant'] },
      { year: 2024, items: ['Collection', 'Dress', 'Couture'] },
      { year: 2023, items: ['Iconic', 'Modern', 'Luxury'] }
    ]
  },
  balmain: {
    name: 'Balmain',
    official: 'https://www.balmain.com',
    category: 'High Fashion & Couture',
    collections: [
      { year: 2025, items: ['Gold Button', 'Luxe', 'Structured'] },
      { year: 2024, items: ['Collection', 'Dress', 'Couture'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Signature'] }
    ]
  },
  lanvin: {
    name: 'Lanvin',
    official: 'https://www.lanvin.com',
    category: 'High Fashion & Couture',
    collections: [
      { year: 2025, items: ['Heritage', 'Modern', 'Luxury'] },
      { year: 2024, items: ['Collection', 'Dress', 'Couture'] },
      { year: 2023, items: ['Iconic', 'Elegant', 'Fashion'] }
    ]
  },
  ralphlauren: {
    name: 'Ralph Lauren Purple Label',
    official: 'https://www.ralphlauren.com',
    category: 'High Fashion & Couture',
    collections: [
      { year: 2025, items: ['Tailored', 'Luxury', 'Premium'] },
      { year: 2024, items: ['Collection', 'Suit', 'Heritage'] },
      { year: 2023, items: ['Iconic', 'Modern', 'Elegant'] }
    ]
  },
  zuhairmurad: {
    name: 'Zuhair Murad',
    official: 'https://www.zuhairmurad.com',
    category: 'High Fashion & Couture',
    collections: [
      { year: 2025, items: ['Evening Gown', 'Bridal', 'Luxe'] },
      { year: 2024, items: ['Collection', 'Couture', 'Dress'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Luxury'] }
    ]
  },
  eliesaab: {
    name: 'Elie Saab',
    official: 'https://www.eliesaab.com',
    category: 'High Fashion & Couture',
    collections: [
      { year: 2025, items: ['Couture', 'Evening', 'Bridal'] },
      { year: 2024, items: ['Collection', 'Gown', 'Luxury'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Fashion'] }
    ]
  },
  oscardelarenta: {
    name: 'Oscar de la Renta',
    official: 'https://www.oscardelarenta.com',
    category: 'High Fashion & Couture',
    collections: [
      { year: 2025, items: ['Elegance', 'Gown', 'Couture'] },
      { year: 2024, items: ['Collection', 'Evening', 'Bridal'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Luxury'] }
    ]
  },
  carolinaherrera: {
    name: 'Carolina Herrera',
    official: 'https://www.carolinaherrera.com',
    category: 'High Fashion & Couture',
    collections: [
      { year: 2025, items: ['Elegance', 'Timeless', 'Luxury'] },
      { year: 2024, items: ['Collection', 'Dress', 'Couture'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Fashion'] }
    ]
  },
  maxmara: {
    name: 'Max Mara',
    official: 'https://www.maxmara.com',
    category: 'High Fashion & Couture',
    collections: [
      { year: 2025, items: ['Timeless', 'Elegant', 'Premium'] },
      { year: 2024, items: ['Collection', 'Coat', 'Heritage'] },
      { year: 2023, items: ['Modern', 'Luxury', 'Fashion'] }
    ]
  },
  alaia: {
    name: 'Alaïa',
    official: 'https://www.alaia.com',
    category: 'High Fashion & Couture',
    collections: [
      { year: 2025, items: ['Sculptural', 'Bodycon', 'Luxury'] },
      { year: 2024, items: ['Collection', 'Dress', 'Couture'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Fashion'] }
    ]
  },
  driesvannoten: {
    name: 'Dries Van Noten',
    official: 'https://www.driesvannoten.be',
    category: 'High Fashion & Couture',
    collections: [
      { year: 2025, items: ['Print', 'Luxe', 'Contemporary'] },
      { year: 2024, items: ['Collection', 'Modern', 'Fashion'] },
      { year: 2023, items: ['Heritage', 'Elegant', 'Luxury'] }
    ]
  },
  lemaire: {
    name: 'Lemaire',
    official: 'https://www.lemaire.com',
    category: 'High Fashion & Couture',
    collections: [
      { year: 2025, items: ['Minimalist', 'Luxury', 'Contemporary'] },
      { year: 2024, items: ['Collection', 'Modern', 'Fashion'] },
      { year: 2023, items: ['Heritage', 'Elegant', 'Timeless'] }
    ]
  },
  // High Jewelry
  cartier: {
    name: 'Cartier',
    official: 'https://www.cartier.com',
    category: 'High Jewelry',
    collections: [
      { year: 2025, items: ['Panthere', 'Juste un Clou', 'Trinity'] },
      { year: 2024, items: ['Collection', 'Diamond', 'Gold'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Luxury'] }
    ]
  },
  vancleef: {
    name: 'Van Cleef & Arpels',
    official: 'https://www.vancleefarpels.com',
    category: 'High Jewelry',
    collections: [
      { year: 2025, items: ['Alhambra', 'Vintage', 'Poetic'] },
      { year: 2024, items: ['Collection', 'Diamond', 'Gold'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Luxury'] }
    ]
  },
  tiffany: {
    name: 'Tiffany & Co.',
    official: 'https://www.tiffany.com',
    category: 'High Jewelry',
    collections: [
      { year: 2025, items: ['Blue Book', 'Diamond', 'Iconic'] },
      { year: 2024, items: ['Collection', 'Ring', 'Necklace'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Luxury'] }
    ]
  },
  bulgari: {
    name: 'Bulgari',
    official: 'https://www.bulgari.com',
    category: 'High Jewelry',
    collections: [
      { year: 2025, items: ['Serpenti', 'B.zero1', 'Divas Dream'] },
      { year: 2024, items: ['Collection', 'Diamond', 'Gold'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Luxury'] }
    ]
  },
  chopard: {
    name: 'Chopard',
    official: 'https://www.chopard.com',
    category: 'High Jewelry',
    collections: [
      { year: 2025, items: ['Happy Diamonds', 'L.U.C', 'Luxury'] },
      { year: 2024, items: ['Collection', 'Diamond', 'Gold'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Fashion'] }
    ]
  },
  graff: {
    name: 'Graff',
    official: 'https://www.graffdiamonds.com',
    category: 'High Jewelry',
    collections: [
      { year: 2025, items: ['Diamond', 'Luxury', 'Signature'] },
      { year: 2024, items: ['Collection', 'High Jewelry', 'Rare'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Iconic'] }
    ]
  },
  harrywinston: {
    name: 'Harry Winston',
    official: 'https://www.harrywinston.com',
    category: 'High Jewelry',
    collections: [
      { year: 2025, items: ['Winston Legacy', 'Diamond', 'Icon'] },
      { year: 2024, items: ['Collection', 'High Jewelry', 'Luxury'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Signature'] }
    ]
  },
  piaget: {
    name: 'Piaget',
    official: 'https://www.piaget.com',
    category: 'High Jewelry',
    collections: [
      { year: 2025, items: ['Luxury', 'Diamond', 'Iconic'] },
      { year: 2024, items: ['Collection', 'Watch', 'Jewelry'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Elegance'] }
    ]
  },
  boucheron: {
    name: 'Boucheron',
    official: 'https://www.boucheron.com',
    category: 'High Jewelry',
    collections: [
      { year: 2025, items: ['Quatre', 'Diamond', 'Luxury'] },
      { year: 2024, items: ['Collection', 'High Jewelry', 'Gold'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Iconic'] }
    ]
  },
  chaumet: {
    name: 'Chaumet',
    official: 'https://www.chaumet.com',
    category: 'High Jewelry',
    collections: [
      { year: 2025, items: ['Joséphine', 'Diamond', 'Luxury'] },
      { year: 2024, items: ['Collection', 'High Jewelry', 'Gold'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Elegance'] }
    ]
  },
  debeers: {
    name: 'De Beers',
    official: 'https://www.debeers.com',
    category: 'High Jewelry',
    collections: [
      { year: 2025, items: ['Forevermark', 'Diamond', 'Luxury'] },
      { year: 2024, items: ['Collection', 'High Jewelry', 'Ring'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Iconic'] }
    ]
  },
  mikimoto: {
    name: 'Mikimoto',
    official: 'https://www.mikimoto.com',
    category: 'High Jewelry',
    collections: [
      { year: 2025, items: ['Pearl', 'Luxury', 'Signature'] },
      { year: 2024, items: ['Collection', 'High Jewelry', 'Pearl'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Elegance'] }
    ]
  },
  swarovski: {
    name: 'Swarovski Atelier',
    official: 'https://www.swarovski.com',
    category: 'High Jewelry',
    collections: [
      { year: 2025, items: ['Crystal', 'Luxury', 'Contemporary'] },
      { year: 2024, items: ['Collection', 'High Jewelry', 'Crystal'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Fashion'] }
    ]
  },
  // Luxury Watches
  rolex: {
    name: 'Rolex',
    official: 'https://www.rolex.com',
    category: 'Luxury Watches',
    collections: [
      { year: 2025, items: ['Submariner', 'Daytona', 'GMT-Master II'] },
      { year: 2024, items: ['Datejust', 'Sky-Dweller', 'Day-Date'] },
      { year: 2023, items: ['Yacht-Master', 'Air-King', 'Explorer'] }
    ]
  },
  patekphilippe: {
    name: 'Patek Philippe',
    official: 'https://www.patek.com',
    category: 'Luxury Watches',
    collections: [
      { year: 2025, items: ['Nautilus', 'Aquanaut', 'Calatrava'] },
      { year: 2024, items: ['Twenty~4', 'Complications', 'Golden Ellipse'] },
      { year: 2023, items: ['Annual Calendar', 'Worldtime', 'Grand Complications'] }
    ]
  },
  ap: {
    name: 'Audemars Piguet',
    official: 'https://www.audemarspiguet.com',
    category: 'Luxury Watches',
    collections: [
      { year: 2025, items: ['Royal Oak', 'Offshore', 'Code 11.59'] },
      { year: 2024, items: ['Royal Oak Perpetual Calendar', 'Tourbillon', 'Chronograph'] },
      { year: 2023, items: ['Diver', 'Selfwinding', 'Minute Repeater'] }
    ]
  },
  vc: {
    name: 'Vacheron Constantin',
    official: 'https://www.vacheron-constantin.com',
    category: 'Luxury Watches',
    collections: [
      { year: 2025, items: ['Overseas', 'Patrimony', 'Historiques'] },
      { year: 2024, items: ['Malte', 'Fiftysix', 'Métiers d\'Art'] },
      { year: 2023, items: ['Quai de l\'Île', 'Haut Artisanat', 'Traditionelle'] }
    ]
  },
  omega: {
    name: 'Omega',
    official: 'https://www.omega.co.uk',
    category: 'Luxury Watches',
    collections: [
      { year: 2025, items: ['Seamaster', 'Speedmaster', 'Constellation'] },
      { year: 2024, items: ['DeVille', 'De Ville Hour Vision', 'Planet Ocean'] },
      { year: 2023, items: ['Aqua Terra', 'Globemaster', 'Olympic'] }
    ]
  },
  jaegerlecoultre: {
    name: 'Jaeger-LeCoultre',
    official: 'https://www.jaeger-lecoultre.com',
    category: 'Luxury Watches',
    collections: [
      { year: 2025, items: ['Reverso', 'Master', 'Polaris'] },
      { year: 2024, items: ['Rendez-Vous', 'Deep Sea', 'Atmos'] },
      { year: 2023, items: ['Duomètre', 'Grande Tradition', 'Tribute'] }
    ]
  },
  iwc: {
    name: 'IWC',
    official: 'https://www.iwc.com',
    category: 'Luxury Watches',
    collections: [
      { year: 2025, items: ['Portuguese', 'Pilot', 'Aquatimer'] },
      { year: 2024, items: ['Portofino', 'Engineering', 'Ingenieur'] },
      { year: 2023, items: ['Big Pilot', 'Mark', 'Da Vinci'] }
    ]
  },
  breitling: {
    name: 'Breitling',
    official: 'https://www.breitling.com',
    category: 'Luxury Watches',
    collections: [
      { year: 2025, items: ['Navitimer', 'Superocean', 'Chronomat'] },
      { year: 2024, items: ['Avenger', 'Premier', 'Colt'] },
      { year: 2023, items: ['Professional', 'Aerospace', 'Emergency'] }
    ]
  },
  tagheuer: {
    name: 'TAG Heuer',
    official: 'https://www.tagheuer.com',
    category: 'Luxury Watches',
    collections: [
      { year: 2025, items: ['Carrera', 'Monaco', 'Aquaracer'] },
      { year: 2024, items: ['Connected', 'Link', 'Autavia'] },
      { year: 2023, items: ['Formul 1', 'Alter Ego', 'Kirium'] }
    ]
  },
  richardmille: {
    name: 'Richard Mille',
    official: 'https://www.richardmille.com',
    category: 'Luxury Watches',
    collections: [
      { year: 2025, items: ['RM 27-03', 'RM 055', 'RM 011'] },
      { year: 2024, items: ['RM 35', 'RM 67', 'RM 072'] },
      { year: 2023, items: ['RM 50-03', 'RM 016', 'RM 010'] }
    ]
  },
  hublot: {
    name: 'Hublot',
    official: 'https://www.hublot.com',
    category: 'Luxury Watches',
    collections: [
      { year: 2025, items: ['Big Bang', 'Spirit of Big Bang', 'Classic Fusion'] },
      { year: 2024, items: ['Antikythera', 'Oceanographic', 'Masterpieces'] },
      { year: 2023, items: ['UEFA Euro', 'Ferrari', 'Laferrari'] }
    ]
  },
  blancpain: {
    name: 'Blancpain',
    official: 'https://www.blancpain.com',
    category: 'Luxury Watches',
    collections: [
      { year: 2025, items: ['Fifty Fathoms', 'Villeret', 'Aqua Lung'] },
      { year: 2024, items: ['Moonwatch', 'Métiers d\'Art', 'Ultraplate'] },
      { year: 2023, items: ['GMT', 'Tourbillon', 'Carrousel'] }
    ]
  },
  breguet: {
    name: 'Breguet',
    official: 'https://www.breguet.com',
    category: 'Luxury Watches',
    collections: [
      { year: 2025, items: ['Classique', 'Marine', 'Tradition'] },
      { year: 2024, items: ['Type XX', 'Heritage', 'Reine de Naples'] },
      { year: 2023, items: ['Perpetual Calendar', 'Minute Repeater', 'Tourbillon'] }
    ]
  },
  langesohne: {
    name: 'A. Lange & Söhne',
    official: 'https://www.alange-soehne.com',
    category: 'Luxury Watches',
    collections: [
      { year: 2025, items: ['Lange 1', 'Saxonia', 'Richard Lange'] },
      { year: 2024, items: ['Datograph', 'Zeitwerk', 'Grand Complication'] },
      { year: 2023, items: ['Moonphase', 'Tourbograph', 'Pour le Mérite'] }
    ]
  },
  panerai: {
    name: 'Panerai',
    official: 'https://www.panerai.com',
    category: 'Luxury Watches',
    collections: [
      { year: 2025, items: ['Luminor', 'Submersible', 'Due'] },
      { year: 2024, items: ['Radiomir', 'Quaranta', 'Goldtech'] },
      { year: 2023, items: ['Chronograph', 'Annual Calendar', 'Tourbillon'] }
    ]
  },
  zenith: {
    name: 'Zenith',
    official: 'https://www.zenith-watches.com',
    category: 'Luxury Watches',
    collections: [
      { year: 2025, items: ['El Primero', 'Chronomaster', 'Pilot'] },
      { year: 2024, items: ['Defy', 'Captain', 'Port Royal'] },
      { year: 2023, items: ['Chrono', 'Academy', 'Moonwatch'] }
    ]
  },
  // Street & Contemporary
  offwhite: {
    name: 'Off-White',
    official: 'https://www.off---white.com',
    category: 'Street & Contemporary',
    collections: [
      { year: 2025, items: ['Diagonal Stripes', 'Industrial', 'Contemporary'] },
      { year: 2024, items: ['Collection', 'Streetwear', 'Luxury'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Fashion'] }
    ]
  },
  fearofgod: {
    name: 'Fear of God',
    official: 'https://www.fearofgod.com',
    category: 'Street & Contemporary',
    collections: [
      { year: 2025, items: ['Essentials', 'Streetwear', 'Luxury'] },
      { year: 2024, items: ['Collection', 'Modern', 'Contemporary'] },
      { year: 2023, items: ['Heritage', 'Casual', 'Fashion'] }
    ]
  },
  palmangels: {
    name: 'Palm Angels',
    official: 'https://www.palmangels.com',
    category: 'Street & Contemporary',
    collections: [
      { year: 2025, items: ['Palm Print', 'Streetwear', 'Urban'] },
      { year: 2024, items: ['Collection', 'Contemporary', 'Casual'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Fashion'] }
    ]
  },
  rickOwens: {
    name: 'Rick Owens',
    official: 'https://www.rickowens.com',
    category: 'Street & Contemporary',
    collections: [
      { year: 2025, items: ['Avant-Garde', 'Darkwear', 'Luxury'] },
      { year: 2024, items: ['Collection', 'Experimental', 'Contemporary'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Fashion'] }
    ]
  },
  amiparis: {
    name: 'Ami Paris',
    official: 'https://www.amiparis.com',
    category: 'Street & Contemporary',
    collections: [
      { year: 2025, items: ['De Coeur', 'Parisian', 'Chic'] },
      { year: 2024, items: ['Collection', 'Contemporary', 'Elegant'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Fashion'] }
    ]
  },
  apc: {
    name: 'A.P.C.',
    official: 'https://www.apc.fr',
    category: 'Street & Contemporary',
    collections: [
      { year: 2025, items: ['Denim', 'Minimal', 'Essentials'] },
      { year: 2024, items: ['Collection', 'Contemporary', 'Casual'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Fashion'] }
    ]
  },
  kitsune: {
    name: 'Maison Kitsuné',
    official: 'https://www.kitsune.fr',
    category: 'Street & Contemporary',
    collections: [
      { year: 2025, items: ['Tri-Colour', 'Parisian', 'Chic'] },
      { year: 2024, items: ['Collection', 'Contemporary', 'Modern'] },
      { year: 2023, items: ['Heritage', 'Elegant', 'Fashion'] }
    ]
  },
  acnestudios: {
    name: 'Acne Studios',
    official: 'https://www.acnestudios.com',
    category: 'Street & Contemporary',
    collections: [
      { year: 2025, items: ['Blue Label', 'Minimal', 'Scandinavian'] },
      { year: 2024, items: ['Collection', 'Contemporary', 'Modern'] },
      { year: 2023, items: ['Heritage', 'Casual', 'Fashion'] }
    ]
  },
  y3: {
    name: 'Y-3',
    official: 'https://www.y-3.com',
    category: 'Street & Contemporary',
    collections: [
      { year: 2025, items: ['Adidas Tech', 'Sportswear', 'Urban'] },
      { year: 2024, items: ['Collection', 'Contemporary', 'Athletic'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Fashion'] }
    ]
  },
  stoneisland: {
    name: 'Stone Island',
    official: 'https://www.stoneisland.com',
    category: 'Street & Contemporary',
    collections: [
      { year: 2025, items: ['Compass Badge', 'Technical', 'Streetwear'] },
      { year: 2024, items: ['Collection', 'Contemporary', 'Urban'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Fashion'] }
    ]
  },
  thombrowne: {
    name: 'Thom Browne',
    official: 'https://www.thombrowne.com',
    category: 'Street & Contemporary',
    collections: [
      { year: 2025, items: ['RWB Stripe', 'Tailored', 'Iconic'] },
      { year: 2024, items: ['Collection', 'Contemporary', 'Modern'] },
      { year: 2023, items: ['Heritage', 'Casual', 'Fashion'] }
    ]
  },
  sacai: {
    name: 'Sacai',
    official: 'https://www.sacai.jp',
    category: 'Street & Contemporary',
    collections: [
      { year: 2025, items: ['Deconstruction', 'Luxury Streetwear', 'Contemporary'] },
      { year: 2024, items: ['Collection', 'Modern', 'Innovative'] },
      { year: 2023, items: ['Heritage', 'Experimental', 'Fashion'] }
    ]
  },
  undercover: {
    name: 'Undercover',
    official: 'https://www.undercoverism.com',
    category: 'Street & Contemporary',
    collections: [
      { year: 2025, items: ['Chaos', 'Urban', 'Contemporary'] },
      { year: 2024, items: ['Collection', 'Modern', 'Artistic'] },
      { year: 2023, items: ['Heritage', 'Experimental', 'Fashion'] }
    ]
  },
  // Eyewear
  gentlemonster: {
    name: 'Gentle Monster',
    official: 'https://www.gentlemonster.com',
    category: 'Eyewear',
    collections: [
      { year: 2025, items: ['Bold Frames', 'Artistic', 'Contemporary'] },
      { year: 2024, items: ['Collection', 'Sunglasses', 'Luxury'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Fashion'] }
    ]
  },
  oliverpeoples: {
    name: 'Oliver Peoples',
    official: 'https://www.oliverpeoples.com',
    category: 'Eyewear',
    collections: [
      { year: 2025, items: ['Classic', 'Timeless', 'Luxury'] },
      { year: 2024, items: ['Collection', 'Sunglasses', 'Optical'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Fashion'] }
    ]
  },
  thombrowneeyewear: {
    name: 'Thom Browne Eyewear',
    official: 'https://www.thombrowne.com',
    category: 'Eyewear',
    collections: [
      { year: 2025, items: ['RWB Stripe', 'Tailored', 'Iconic'] },
      { year: 2024, items: ['Collection', 'Sunglasses', 'Contemporary'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Fashion'] }
    ]
  },
  cutlerandgross: {
    name: 'Cutler and Gross',
    official: 'https://www.cutlerandgross.com',
    category: 'Eyewear',
    collections: [
      { year: 2025, items: ['British Craftsmanship', 'Luxury', 'Timeless'] },
      { year: 2024, items: ['Collection', 'Sunglasses', 'Optical'] },
      { year: 2023, items: ['Heritage', 'Modern', 'Fashion'] }
    ]
  }
};

// 카테고리 목록
const categories = [
  'Fashion & Leather Goods',
  'High Fashion & Couture',
  'High Jewelry',
  'Luxury Watches',
  'Street & Contemporary',
  'Eyewear'
];

// SPA 메인 앱 객체
const app = {
  currentPage: 'home',
  currentBrand: null,
  currentYear: '',
  allBrands: Object.keys(brandData),
  
  // 초기화
  init() {
    this.renderHome();
    this.setupMenuBrands();
    this.setupSearchListener();
  },

  // 최근 본 브랜드 저장 (최대 3개)
  saveRecentBrand(brand) {
    let recentBrands = JSON.parse(localStorage.getItem('recentBrands')) || [];
    
    // 이미 존재하면 제거
    recentBrands = recentBrands.filter(b => b !== brand);
    
    // 맨 앞에 추가
    recentBrands.unshift(brand);
    
    // 최대 3개까지만 유지
    if (recentBrands.length > 3) {
      recentBrands = recentBrands.slice(0, 3);
    }
    
    localStorage.setItem('recentBrands', JSON.stringify(recentBrands));
  },

  // 최근 본 브랜드 불러오기
  getRecentBrands() {
    return JSON.parse(localStorage.getItem('recentBrands')) || [];
  },

  // 페이지 네비게이션
  navigate(page, brand = null) {
    // 모든 페이지 숨기기
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    this.currentPage = page;
    
    switch(page) {
      case 'home':
        document.getElementById('home-page').classList.remove('hidden');
        this.renderHome();
        break;
      case 'category':
        document.getElementById('category-page').classList.remove('hidden');
        this.renderCategory();
        break;
      case 'collection':
        // brand가 없으면 최근 본 브랜드 사용
        if (!brand) {
          const recentBrands = this.getRecentBrands();
          brand = recentBrands.length > 0 ? recentBrands[0] : this.allBrands[0];
        }
        this.currentBrand = brand;
        this.currentYear = '';
        document.getElementById('collection-page').classList.remove('hidden');
        this.renderCollection();
        break;
    }
    window.scrollTo(0, 0);
  },

  // 홈 페이지 렌더링
  renderHome() {
    const container = document.getElementById('recommendedCollections');
    container.innerHTML = '';
    
    const recommended = ['chanel', 'dior', 'hermes'];
    recommended.forEach(brand => {
      const brandInfo = brandData[brand];
      const card = document.createElement('div');
      card.className = 'collection-card';
      
      // 이미지가 있으면 배경으로 설정
      if (brandInfo.image) {
        card.style.backgroundImage = `url('${brandInfo.image}')`;
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';
      }
      
      card.innerHTML = `
        <div class="collection-card-img" style="background: rgba(0, 0, 0, 0.3); display: flex; align-items: center; justify-content: center; height: 100%;">
          <div style="text-align: center; color: white;">
            <h3 style="margin-bottom: 0.5rem;">${brandInfo.name}</h3>
            <p>최신 컬렉션 보기</p>
          </div>
        </div>
      `;
      card.onclick = () => this.navigate('collection', brand);
      container.appendChild(card);
    });
  },

  // 카테고리 페이지 렌더링
  renderCategory() {
    const container = document.getElementById('categoryGallery');
    container.innerHTML = '';
    
    this.allBrands.forEach(brand => {
      const brandInfo = brandData[brand];
      const card = document.createElement('div');
      card.className = 'gallery-card';
      card.textContent = brandInfo.name;
      
      // 이미지가 있으면 배경으로 설정
      if (brandInfo.image) {
        card.style.backgroundImage = `url('${brandInfo.image}')`;
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';
        card.style.color = 'white';
        card.style.textShadow = '0 2px 4px rgba(0, 0, 0, 0.5)';
      }
      
      card.onclick = () => this.navigate('collection', brand);
      container.appendChild(card);
    });
  },

  // 컬렉션 페이지 렌더링
  renderCollection() {
    if (!this.currentBrand) return;
    
    const brandInfo = brandData[this.currentBrand];
    
    // 최근 본 브랜드 저장
    this.saveRecentBrand(this.currentBrand);
    
    // 최근 본 컬렉션 메시지 및 카드 표시
    this.renderRecentBrands();
    
    // 제목과 공식 사이트 링크 설정
    document.getElementById('collectionTitle').textContent = brandInfo.name;
    document.getElementById('officialSite').href = brandInfo.official;
    
    // 연도 필터 초기화
    const yearFilter = document.getElementById('yearFilter');
    yearFilter.value = this.currentYear;
    
    // 컬렉션 아이템 렌더링
    this.renderCollectionItems();
  },

  // 최근 본 브랜드들 렌더링
  renderRecentBrands() {
    const recentBrands = this.getRecentBrands();
    const msgContainer = document.getElementById('recentCollectionMsg');
    
    if (recentBrands.length === 0) {
      msgContainer.style.display = 'none';
      return;
    }
    
    msgContainer.style.display = 'block';
    msgContainer.innerHTML = '';
    
    const titleDiv = document.createElement('div');
    titleDiv.style.marginBottom = '1rem';
    titleDiv.style.fontSize = '1rem';
    titleDiv.textContent = '최근에 본 컬렉션';
    msgContainer.appendChild(titleDiv);
    
    const cardsContainer = document.createElement('div');
    cardsContainer.style.display = 'flex';
    cardsContainer.style.gap = '1rem';
    cardsContainer.style.flexWrap = 'wrap';
    cardsContainer.style.justifyContent = 'center';
    
    recentBrands.forEach(brand => {
      const brandInfo = brandData[brand];
      const card = document.createElement('button');
      card.style.cssText = `
        background: white;
        border: 2px solid white;
        padding: 0.75rem 1.5rem;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.95rem;
        font-weight: 500;
        transition: all 0.3s ease;
        color: #111;
      `;
      card.textContent = brandInfo.name;
      
      card.onmouseover = () => {
        card.style.background = 'rgba(255, 255, 255, 0.2)';
        card.style.transform = 'scale(1.05)';
      };
      
      card.onmouseout = () => {
        card.style.background = 'white';
        card.style.transform = 'scale(1)';
      };
      
      card.onclick = () => {
        this.currentBrand = brand;
        this.currentYear = '';
        this.renderCollection();
      };
      
      cardsContainer.appendChild(card);
    });
    
    msgContainer.appendChild(cardsContainer);
  },

  // 컬렉션 아이템 렌더링
  renderCollectionItems() {
    const container = document.getElementById('collectionItems');
    container.innerHTML = '';
    
    const brandInfo = brandData[this.currentBrand];
    
    // 필터링된 컬렉션 데이터
    let filteredCollections = brandInfo.collections;
    if (this.currentYear) {
      filteredCollections = brandInfo.collections.filter(c => c.year.toString() === this.currentYear);
    }
    
    filteredCollections.forEach(collection => {
      const yearSection = document.createElement('div');
      yearSection.style.marginBottom = '2rem';
      
      const yearTitle = document.createElement('h3');
      yearTitle.textContent = `${collection.year}년 컬렉션`;
      yearTitle.style.marginBottom = '1rem';
      yearTitle.style.textAlign = 'center';
      yearSection.appendChild(yearTitle);
      
      const itemsGrid = document.createElement('div');
      itemsGrid.className = 'collection-grid';
      
      collection.items.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
          <div class="item-card-img">${item}</div>
          <div class="item-card-info">
            <h3>${item}</h3>
            <p>${brandData[this.currentBrand].name} ${collection.year}</p>
          </div>
        `;
        itemsGrid.appendChild(card);
      });
      
      yearSection.appendChild(itemsGrid);
      container.appendChild(yearSection);
    });
  },

  // 연도별 필터링
  filterByYear() {
    this.currentYear = document.getElementById('yearFilter').value;
    this.renderCollectionItems();
  },

  // 메뉴 드롭다운 브랜드 설정
  setupMenuBrands() {
    const menuBrands = document.querySelector('.menu-brands');
    menuBrands.innerHTML = '';
    
    categories.forEach(category => {
      // 카테고리 헤더 생성
      const categoryHeader = document.createElement('div');
      categoryHeader.style.cssText = `
        padding: 0.75rem 1rem;
        font-weight: bold;
        background: #f5f5f5;
        border-bottom: 1px solid #e0e0e0;
        margin-top: 0.5rem;
      `;
      categoryHeader.textContent = category;
      menuBrands.appendChild(categoryHeader);
      
      // 해당 카테고리의 브랜드들 찾기
      const brandsInCategory = Object.keys(brandData).filter(brand => 
        brandData[brand].category === category
      );
      
      // 해당 카테고리에 브랜드가 없으면 "준비 중" 표시
      if (brandsInCategory.length === 0) {
        const emptyItem = document.createElement('div');
        emptyItem.className = 'menu-brand-item';
        emptyItem.style.opacity = '0.6';
        emptyItem.textContent = '준비 중...';
        menuBrands.appendChild(emptyItem);
      } else {
        // 브랜드 항목 추가
        brandsInCategory.forEach(brand => {
          const brandInfo = brandData[brand];
          const item = document.createElement('div');
          item.className = 'menu-brand-item';
          item.textContent = brandInfo.name;
          item.onclick = () => {
            this.navigate('collection', brand);
            this.toggleMenu();
          };
          menuBrands.appendChild(item);
        });
      }
    });
  },

  // 메뉴 토글
  toggleMenu() {
    const menu = document.getElementById('menuDropdown');
    menu.classList.toggle('show');
  },

  // 검색 기능
  search() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) return;
    
    // 브랜드 검색
    const brand = this.allBrands.find(b => 
      brandData[b].name.toLowerCase().includes(searchTerm)
    );
    
    if (brand) {
      this.navigate('collection', brand);
      searchInput.value = '';
    } else {
      alert('검색 결과가 없습니다. 다시 시도해주세요.');
    }
  },

  // 검색 리스너 설정
  setupSearchListener() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.search();
      }
    });
  }
};

// 페이지 로드 시 앱 초기화
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});

// 문서 외부 클릭 시 메뉴 닫기
document.addEventListener('click', (e) => {
  const menu = document.getElementById('menuDropdown');
  const toggle = document.querySelector('.menu-toggle');
  
  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.classList.remove('show');
  }
});