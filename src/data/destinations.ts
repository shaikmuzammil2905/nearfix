export interface Destination {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  heroImage: string;
  overview: string;
  topAttractions: string[];
  bestTimeToVisit: string;
  howToReach: string;
  popularPackages: string[];
  hotelInfo: string;
  campingInfo: string;
  taxiInfo: string;
  faqs: { question: string; answer: string }[];
}

export const DESTINATIONS: Destination[] = [
  {
    id: "dest-araku",
    slug: "araku-valley",
    name: "Araku Valley",
    subtitle: "The Princess of Eastern Ghats - Coffee Hills, Waterfalls & Million-Year Caves",
    metaTitle: "Araku Valley Tourism, Tour Packages, Hotels & Taxi Booking | Since T20",
    metaDescription: "Discover Araku Valley Tourism. Book Araku Valley tour packages, hotels, resorts, tent camping, taxis & car rental from Visakhapatnam & Paderu. Explore Borra Caves & Katiki Waterfalls.",
    keywords: "Araku Valley Tourism, Araku Valley Tour Packages, Araku Valley Travel Services, Araku Valley Hotel Booking, Araku Valley Resorts, Araku Valley Tent Booking, Araku Valley Camping, Araku Valley Homestays, Araku Valley Taxi Booking, Araku Valley Trip Planner, Araku Valley Tour Packages from Visakhapatnam, Araku Valley One Day Trip, Araku Valley Weekend Trip, Best Places to Visit in Araku Valley, Araku Valley Tourist Places, Araku Valley Adventure Tourism",
    heroImage: "/hero-bg-araku.png",
    overview: "Araku Valley is a magnificent hill station located in Alluri Sitharama Raju district of Andhra Pradesh, surrounded by high mountains, thick forests, and lush coffee plantations. Located about 115 km from Visakhapatnam, Araku is renowned for its organic Araku Coffee, rich tribal heritage, million-year-old Borra Caves, and gushing waterfalls.",
    topAttractions: [
      "Borra Caves (Million-year-old Stalactite & Stalagmite natural caves)",
      "Katiki Waterfalls (Jungle waterfall trek near Borra Caves)",
      "Chaparai Water Cascades (Natural water slide over smooth rocks)",
      "Araku Coffee Plantations & Organic Coffee Tasting",
      "Tribal Museum & Araku Art Gallery",
      "Padmapuram Botanical Gardens & Tree House Cottages",
      "Ananthagiri Hills & Coffee Estates",
      "Galikonda View Point (Highest viewpoint in Vizag-Araku route)"
    ],
    bestTimeToVisit: "September to March (Crisp chilly winter & lush post-monsoon greens)",
    howToReach: "By Rail: Scenic Vistadome train ride from Visakhapatnam to Araku Station. By Road: 115 km drive via NH516E (approx 3.5 hrs by private taxi or car rental).",
    popularPackages: [
      "Araku Valley Tour Package from Visakhapatnam",
      "Araku + Vanajangi + Deomali Tour Package",
      "Visakhapatnam + Araku + Vanajangi Tour Package"
    ],
    hotelInfo: "Since T20 Services offers instant booking for Budget Hotels, Luxury Hill Resorts, AP Tourism Haritha Resorts, Heritage Cottages, and Homestays in Araku Valley.",
    campingInfo: "Experience adventure camping in Araku Valley coffee estates, hilltop tent stays, bonfire, BBQ, and Dhimsa dance arrangements.",
    taxiInfo: "Book Araku Taxi Services, Car Rental (Sedan, Dzire, Ertiga, Innova, Tempo Traveller) for local sightseeing and outstation trips from Vizag, Paderu & Kirandul.",
    faqs: [
      {
        question: "What is the best way to travel from Visakhapatnam to Araku Valley?",
        answer: "Hiring a private AC taxi from Since T20 Services or taking the scenic Vistadome morning train ride from Visakhapatnam Railway Station."
      },
      {
        question: "How many days are required to visit Araku Valley?",
        answer: "A 2-Day 1-Night tour package is ideal to comfortably explore all major tourist places including Borra Caves, Chaparai, Katiki, and Coffee Plantations."
      }
    ]
  },
  {
    id: "dest-vanajangi",
    slug: "vanajangi",
    name: "Vanajangi Hills",
    subtitle: "The Cloud Ocean Peak of Andhra Pradesh - 3,400 ft Altitude Sunrise Paradise",
    metaTitle: "Vanajangi Tourism, Sunrise Tour Packages, Camping & Tent Booking | Since T20",
    metaDescription: "Vanajangi Tourism & Sunrise Trip Guide. Book Vanajangi tent camping, sunrise tour packages, taxi service, hotels & homestays near Paderu & Araku. Watch the famous Ocean of Clouds.",
    keywords: "Vanajangi Tourism, Vanajangi Travel, Vanajangi Trip, Vanajangi Tour Packages, Vanajangi Sunrise, Vanajangi Camping, Vanajangi Tent Booking, Vanajangi Hotel Booking, Vanajangi Homestay, Vanajangi Tourist Places, Vanajangi Travel Packages, Vanajangi Weekend Trip, Vanajangi Trip from Visakhapatnam, Vanajangi Trip from Araku, Camping in Vanajangi, Tent Booking in Vanajangi",
    heroImage: "/hero-bg-araku.png",
    overview: "Vanajangi, situated near Paderu in Alluri Sitharama Raju district, is South India's premier cloud ocean destination. Resting at an altitude of 3,400 feet, visitors trek up early morning to witness a spectacular blanket of white clouds floating below the golden morning sun.",
    topAttractions: [
      "Vanajangi Sunrise Viewpoint (Meghalaya of Andhra Pradesh)",
      "Cloud Ocean (Dense sea of white clouds floating between mountain peaks)",
      "Summit Ridge Camping & Night Bonfire",
      "Stargazing under pollution-free mountain sky",
      "Nearby Paderu Modamamba Temple & Coffee Plantations"
    ],
    bestTimeToVisit: "October to February (Peak cloud ocean formation between 5:30 AM and 7:30 AM)",
    howToReach: "Vanajangi is located 6 km from Paderu town, 100 km from Visakhapatnam, and 85 km from Araku Valley. Road access via private taxi or cab rental from Paderu/Vizag.",
    popularPackages: [
      "Vanajangi Sunrise Tour Package",
      "Araku + Vanajangi + Paderu Tour Package",
      "Araku + Vanajangi + Deomali Tour Package"
    ],
    hotelInfo: "Budget hotels, lodges, and tribal homestays are available in nearby Paderu town (6 km from Vanajangi base camp).",
    campingInfo: "Overnight tent camping at Vanajangi base camp with sleeping bags, campfire, tribal dinner, and security escort provided by Since T20 Services.",
    taxiInfo: "Book Vizag to Vanajangi taxi, Paderu to Vanajangi local taxi, or Araku to Vanajangi taxi rental with 24/7 driver support.",
    faqs: [
      {
        question: "What time should we start the trek for Vanajangi sunrise?",
        answer: "Trek should start at 4:00 AM from the base camp. The easy 45-minute climb reaches the summit right before the 5:30 AM sunrise."
      },
      {
        question: "Is tent camping available at Vanajangi?",
        answer: "Yes, Since T20 Services arranges high-quality waterproof tent camping with campfire, sleeping mats, and warm blankets."
      }
    ]
  },
  {
    id: "dest-maredumilli",
    slug: "maredumilli",
    name: "Maredumilli",
    subtitle: "Tropical Rainforest Eco-Tourism, Cascading Waterfalls & Forest Resorts",
    metaTitle: "Maredumilli Tourism, Resort Booking, Camping & Tour Packages | Since T20",
    metaDescription: "Plan your Maredumilli trip! Book Maredumilli resorts, jungle tent camping, forest tour packages & taxis. Visit Jalatarangini, Amruthadhara Waterfalls & enjoy authentic Bamboo Chicken.",
    keywords: "Maredumilli Tourism, Maredumilli Tour Packages, Maredumilli Travel Services, Maredumilli Resorts, Maredumilli Resort Booking, Maredumilli Tent Booking, Maredumilli Camping, Maredumilli Hotels, Maredumilli Homestays, Maredumilli Tourist Places, Maredumilli Waterfalls, Maredumilli Forest Tourism, Maredumilli Weekend Trip, Maredumilli Family Trip, Maredumilli Adventure Tourism",
    heroImage: "/hero-bg-30.png",
    overview: "Maredumilli is a haven of biodiversity situated in the Eastern Ghats. Covered in dense jungle, perennial streams, and roaring waterfalls, Maredumilli is famous for eco-tourism resorts, canopy walks, forest trekking trails, and traditional Bongu La Kozhi (Bamboo Chicken).",
    topAttractions: [
      "Jalatarangini Waterfalls (Clear jungle stream over step rocks)",
      "Amruthadhara Waterfalls (Thundering deep forest waterfall)",
      "Swarnadhara & Rampa Waterfalls",
      "Valamuru River & Jungle Eco Park",
      "Manyam Viewpoint (Deep forest valley panoramic view)",
      "Rampachodavaram Forest Trail & Tribal Cuisine Outlets"
    ],
    bestTimeToVisit: "August to March (Monsoon flow & post-monsoon green canopy)",
    howToReach: "Maredumilli is located 85 km from Rajahmundry, 220 km from Visakhapatnam. Easily reached via Rajahmundry-Rampachodavaram highway.",
    popularPackages: [
      "Maredumilli Nature Tour Package",
      "Maredumilli Eco Resort & Waterfalls Weekend Trip"
    ],
    hotelInfo: "Book Maredumilli Jungle Resorts, AP Forest Dept Eco-Cottages, Wooden Treehouses, and Forest Homestays through Since T20 Services.",
    campingInfo: "Forest camping near river streams with night campfire, BBQ, and guided jungle treks.",
    taxiInfo: "Book Rajahmundry to Maredumilli taxi, Vizag to Maredumilli cab, or local sightseeing vehicle rentals.",
    faqs: [
      {
        question: "How far is Maredumilli from Rajahmundry?",
        answer: "Maredumilli is approximately 85 km from Rajahmundry and takes about 2 hours by car."
      }
    ]
  },
  {
    id: "dest-tarabu",
    slug: "tarabu-waterfalls",
    name: "Tarabu Waterfalls",
    subtitle: "Pristine Hidden Gem Waterfalls in Alluri Sitharama Raju District",
    metaTitle: "Tarabu Waterfalls Tourism, Camping & Trip Packages | Since T20 Services",
    metaDescription: "Explore Tarabu Waterfalls near Paderu & Araku. Book Tarabu Waterfalls camping, tent booking, travel packages, tour guide & local taxi transfers.",
    keywords: "Tarabu Waterfalls, Tarabu Waterfalls Tourism, Tarabu Waterfalls Trip, Tarabu Waterfalls Travel, Tarabu Waterfalls Tour Package, Tarabu Waterfalls Camping, Tarabu Waterfalls Tent Booking, Tarabu Waterfalls Tourist Guide, Tarabu Waterfalls Nearby Hotels, Tarabu Waterfalls Travel Package, Tarabu Waterfalls Weekend Trip",
    heroImage: "/hero-bg-30.png",
    overview: "Tarabu Waterfalls is an undiscovered natural waterfall nestled deep in the forest valleys of ASR District. Perfect for adventure seekers, nature lovers, and offbeat campers looking to escape crowded commercial tourist spots.",
    topAttractions: [
      "Tarabu Main Waterfall Cascade & Natural Pool Bathing",
      "Off-road Forest Jeep Trail & Nature Trek",
      "Riverside Tent Camping & Bonfire",
      "Birdwatching & Photography"
    ],
    bestTimeToVisit: "September to February",
    howToReach: "Accessible via Paderu / Araku road route. Private SUV taxi or 4x4 vehicle recommended.",
    popularPackages: ["Tarabu Waterfalls Camping & Offbeat Explorer Package"],
    hotelInfo: "Stay in nearby Paderu town hotels or Araku resorts, or camp directly at Tarabu base camp.",
    campingInfo: "Riverside tent camping with barbecue, local tribal guide, and campfire organized by Since T20 Services.",
    taxiInfo: "Local taxi booking available from Paderu, Araku, and Visakhapatnam.",
    faqs: [
      {
        question: "Is Tarabu Waterfalls safe for swimming?",
        answer: "Yes, designated natural pool areas are safe under the guidance of our local tour guide."
      }
    ]
  },
  {
    id: "dest-balda-caves",
    slug: "balda-caves",
    name: "Balda Caves",
    subtitle: "Mystical Limestone Caves & High Altitude Adventure Camping",
    metaTitle: "Balda Caves Tourism, Adventure Tour Packages & Camping | Since T20",
    metaDescription: "Visit Balda Caves near Araku Valley & Paderu. Book Balda Caves tour packages, tent camping, adventure guide, nearby hotels & taxi service.",
    keywords: "Balda Caves Tourism, Balda Caves Travel, Balda Caves Trip, Balda Caves Tour Package, Balda Caves Tourist Guide, Balda Caves Adventure Tourism, Balda Caves Camping, Balda Caves Nearby Hotels, Balda Caves Travel Package, Balda Caves Weekend Trip",
    heroImage: "/hero-bg-araku.png",
    overview: "Balda Caves is an off-grid archaeological and natural cave system near Araku Valley and Paderu. Famous for intriguing cave formations, ancient tribal legends, and surrounding green meadows perfect for night camping.",
    topAttractions: [
      "Balda Limestone Cave Exploration with Flashlight Guide",
      "Cave Valley Stargazing & Hilltop Camping",
      "Tribal Heritage Trails & Village Photography"
    ],
    bestTimeToVisit: "October to March",
    howToReach: "Short drive from Araku Valley / Paderu route followed by a 20-minute village trek.",
    popularPackages: ["Balda Caves Adventure & Camping Package"],
    hotelInfo: "Hotels available in Araku Valley (25 km) or Paderu (30 km).",
    campingInfo: "Hillside dome tent camping with campfire and local dinner.",
    taxiInfo: "Taxi rental available from Araku Valley & Visakhapatnam.",
    faqs: [
      {
        question: "Do we need a guide to explore Balda Caves?",
        answer: "Yes, Since T20 Services provides experienced local guides for safe exploration inside the caves."
      }
    ]
  },
  {
    id: "dest-deomali",
    slug: "deomali",
    name: "Deomali Peak",
    subtitle: "Highest Mountain Peak of the Eastern Ghats (1,672 meters altitude)",
    metaTitle: "Deomali Tourism, Trekking Packages, Camping & Hotel Booking | Since T20",
    metaDescription: "Conquer Deomali Peak (1672m)! Book Deomali trekking packages, mountain tent camping, hotel booking, homestays & taxi rental from Araku Valley & Visakhapatnam.",
    keywords: "Deomali Tourism, Deomali Travel, Deomali Tour Package, Deomali Trekking, Deomali Camping, Deomali Tent Booking, Deomali Tourist Places, Deomali Trip, Deomali Adventure Tourism, Deomali Trekking Package, Deomali Weekend Trip, Deomali Travel Package, Deomali Hotel Booking, Deomali Homestay",
    heroImage: "/hero-bg-araku.png",
    overview: "Standing tall at 1,672 meters above sea level, Deomali Peak in the Chandragiri range of Eastern Ghats is a paradise for trekkers and mountain lovers. Located near the Araku/Koraput border, Deomali offers cold winds, lush green ridges, and sweeping valley views.",
    topAttractions: [
      "Deomali Peak Summit Viewpoint (1,672m Altitude)",
      "Mountain Ridge Trekking & Sunset Point",
      "High Altitude Tent Camping & Stargazing",
      "Rani Duduma Waterfalls & Tribal Villages"
    ],
    bestTimeToVisit: "September to March (Chilly mountain climate & clear skies)",
    howToReach: "Located 90 km from Araku Valley, 160 km from Visakhapatnam. Reachable by SUV taxi or private car rental.",
    popularPackages: [
      "Deomali Trekking & Camping Package",
      "Araku + Vanajangi + Deomali Tour Package"
    ],
    hotelInfo: "Homestays in nearby Semiliguda/Pottangi, resorts in Araku Valley, or summit tent camping.",
    campingInfo: "Thermal sleeping bags, windproof tents, campfire, and dinner provided at summit camping ground.",
    taxiInfo: "Book Vizag to Deomali taxi, Araku to Deomali car rental with mountain-trained drivers.",
    faqs: [
      {
        question: "How high is Deomali peak?",
        answer: "Deomali Peak stands at 1,672 meters (5,486 ft), making it the highest mountain peak in Odisha & the Eastern Ghats."
      }
    ]
  },
  {
    id: "dest-visakhapatnam",
    slug: "visakhapatnam",
    name: "Visakhapatnam (Vizag)",
    subtitle: "The Jewel of the East Coast - Beaches, Submarine Museum & Gateway to Araku",
    metaTitle: "Visakhapatnam Tourism, Tour Packages, Hotels & Taxi Booking | Since T20",
    metaDescription: "Discover Visakhapatnam Tourism. Book Vizag tour packages, hotel & resort booking, taxi service, Vizag to Araku taxi, Vizag to Vanajangi trip & car rentals.",
    keywords: "Visakhapatnam Tourism, Visakhapatnam Travel Services, Visakhapatnam Tour Packages, Visakhapatnam Tourist Places, Visakhapatnam Hotel Booking, Visakhapatnam Resort Booking, Visakhapatnam Taxi Booking, Visakhapatnam Travel Agency, Visakhapatnam Weekend Trips, Visakhapatnam to Araku Tour, Visakhapatnam to Araku Taxi, Visakhapatnam to Vanajangi Trip, Visakhapatnam to Deomali Trip, Visakhapatnam Travel Packages",
    heroImage: "/hero-bg-custom.png",
    overview: "Visakhapatnam, known as Vizag, is the largest city in Andhra Pradesh and the gateway to the Eastern Ghats. Famed for pristine golden sand beaches, naval submarine museum, hill parks, and ancient temples, Vizag seamlessly connects coastal luxury with hill station tourism.",
    topAttractions: [
      "RK Beach & Rushikonda Beach (Water sports & speed boats)",
      "INS Kursura Submarine Museum & TU 142 Aircraft Museum",
      "Kailasagiri Hill Park & Sea View Ropeway",
      "Simhachalam Sri Varaha Lakshmi Narasimha Swamy Temple",
      "Dolphin's Nose Lighthouse & Ross Hill",
      "Tenneti Park & Shipwreck Viewpoint",
      "Yarada Beach & Thotlakonda Buddhist Complex"
    ],
    bestTimeToVisit: "October to March",
    howToReach: "Connected globally via Visakhapatnam International Airport (VTZ), major Railway Junction (VSKP), and NH16 highway.",
    popularPackages: [
      "Visakhapatnam + Araku + Vanajangi Tour Package",
      "Araku Valley Tour Package from Visakhapatnam"
    ],
    hotelInfo: "Luxury 5-Star Beach Resorts, 3-Star Business Hotels, Budget Stays & Service Apartments across Beach Road, MVP Colony & Gajuwaka.",
    campingInfo: "Beachfront camping packages available near Rushikonda & Bheemili beaches.",
    taxiInfo: "24/7 Visakhapatnam Taxi Service, Outstation Cabs to Araku, Vanajangi, Deomali, Maredumilli & Airport Pickups.",
    faqs: [
      {
        question: "Can we hire a taxi from Visakhapatnam to Araku Valley?",
        answer: "Yes! Since T20 Services offers instant online taxi booking for Vizag to Araku, Vizag to Vanajangi, and Vizag to Deomali."
      }
    ]
  },
  {
    id: "dest-paderu",
    slug: "paderu",
    name: "Paderu",
    subtitle: "District Headquarters of Alluri Sitharama Raju District & Cultural Capital",
    metaTitle: "Paderu Tourism, Online Services, Taxi & Hotel Booking | Since T20 Services",
    metaDescription: "Discover Paderu in ASR District! Book Paderu taxi service, Modamamba temple visits, Vanajangi trip, GST services, RTA, ITR filing, electrician & plumber in Paderu.",
    keywords: "Paderu, Services in Paderu, Online Services in Paderu, Business Services in Paderu, GST Services in Paderu, ITR Filing in Paderu, Udyam Registration in Paderu, RTA Services in Paderu, Home Services in Paderu, Electrician in Paderu, Plumber in Paderu, AC Repair in Paderu, Taxi Services in Paderu, Paderu to Araku Taxi, Modamamba Temple Paderu",
    heroImage: "/hero-bg-30.png",
    overview: "Paderu is the principal headquarters of Alluri Sitharama Raju District (ASR District) in Andhra Pradesh. Known for the divine Sri Modamamba Ammavari Temple, lush green coffee hills, vibrant weekly tribal shandies (markets), and proximity to Vanajangi cloud ocean (6 km).",
    topAttractions: [
      "Sri Modamamba Ammavari Temple (Revered regional deity temple)",
      "Vanajangi Sunrise Point (6 km from Paderu town)",
      "Paderu Agency Weekly Tribal Shandy (Organic turmeric, honey & coffee)",
      "Lammasingi / Lambasingi Route (Chilly winter hill town)",
      "Coffee & Spice Plantations"
    ],
    bestTimeToVisit: "September to March",
    howToReach: "Paderu is 100 km from Visakhapatnam (via Chintapalli/Vadapalli route) and 85 km from Araku Valley.",
    popularPackages: [
      "Araku + Vanajangi + Paderu Tour Package",
      "Vanajangi Sunrise Tour Package from Paderu"
    ],
    hotelInfo: "Budget lodges, government guesthouses, and homestays available in Paderu town center.",
    campingInfo: "Vanajangi base camp tent accommodation 10 minutes from Paderu.",
    taxiInfo: "Paderu taxi booking, Paderu to Araku taxi, Paderu to Vizag cab service, and local auto/car rentals.",
    faqs: [
      {
        question: "What online and home services does Since T20 Services provide in Paderu?",
        answer: "In Paderu, Since T20 Services provides GST Registration, ITR Filing, Udyam, RTA Services, Labour Registration, Electricians, Plumbers, AC repair, Taxi booking & Real Estate."
      }
    ]
  }
];
