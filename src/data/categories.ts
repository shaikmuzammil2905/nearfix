export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  description: string;
  shortDesc: string;
  iconName: string;
  benefits: string[];
  commonRequirements: string[];
  isEmergency?: boolean;
}

export interface CategoryItem {
  id: string;
  slug: string;
  name: string;
  description: string;
  iconName: string;
  color: string;
  bgColor: string;
  image?: string;
  badge?: string;
  isEmergency?: boolean;
  services: ServiceItem[];
}

export const CATEGORIES: CategoryItem[] = [
  {
    id: "cat-1",
    slug: "home-services",
    name: "Home Services",
    description: "Everyday services for homes and offices.",
    iconName: "Wrench",
    color: "text-blue-600",
    bgColor: "bg-blue-50 border-blue-100",
    image: "/categories/home-services.jpg",
    services: [
      {
        id: "electrician",
        slug: "electrician",
        name: "Electrician",
        categorySlug: "home-services",
        categoryName: "Home Services",
        description: "Professional electrical wiring, repairs, short circuit fixes, fan and light installations in Araku Valley.",
        shortDesc: "Wiring, repairs, light & fan installations",
        iconName: "Zap",
        benefits: ["Fast response time", "Verified local electricians", "Safe & reliable workmanship", "Transparent estimates"],
        commonRequirements: ["Switchboard repair", "MCB replacement", "Complete house wiring", "Fan/Chandelier installation"]
      },
      {
        id: "plumber",
        slug: "plumber",
        name: "Plumber",
        categorySlug: "home-services",
        categoryName: "Home Services",
        description: "Expert plumbing services for pipe leaks, tap replacements, drainage blockages, and bathroom fittings.",
        shortDesc: "Pipe leak fixes, tap & bathroom fittings",
        iconName: "Droplet",
        benefits: ["Leak detection expertise", "Quality spare parts", "Same-day service in Araku", "Clean post-repair work"],
        commonRequirements: ["Tap repair/replacement", "Pipe leak sealing", "Drainage unblocking", "Bathroom sanitary fitting"]
      },
      {
        id: "carpenter",
        slug: "carpenter",
        name: "Carpenter",
        categorySlug: "home-services",
        categoryName: "Home Services",
        description: "Skilled woodwork, furniture assembly, door hinge repair, lock fixing, and custom cabinet making.",
        shortDesc: "Furniture assembly, door & lock repairs",
        iconName: "Hammer",
        benefits: ["Custom woodworking", "Durable repairs", "Door & window fitting", "Punctual service"],
        commonRequirements: ["Door lock repair", "Bed/Table assembly", "Cupboard hinge fix", "Custom wood shelves"]
      },
      {
        id: "painter",
        slug: "painter",
        name: "Painter",
        categorySlug: "home-services",
        categoryName: "Home Services",
        description: "Interior and exterior house painting, wall putty work, texture design, and waterproofing solutions.",
        shortDesc: "Interior/exterior wall painting & putty",
        iconName: "Paintbrush",
        benefits: ["Premium paint choices", "Neat wall preparation", "On-time project completion", "Waterproofing guarantee"],
        commonRequirements: ["Full house painting", "Wall touch-up & putty", "Waterproofing", "Texture art painting"]
      },
      {
        id: "cleaning",
        slug: "cleaning",
        name: "Cleaning",
        categorySlug: "home-services",
        categoryName: "Home Services",
        description: "Deep house cleaning, sofa shampooing, bathroom sanitization, and office deep clean services.",
        shortDesc: "Deep home, kitchen & bathroom cleaning",
        iconName: "Sparkles",
        benefits: ["Eco-friendly disinfectants", "Professional equipment", "Deep spot removal", "Flexible scheduling"],
        commonRequirements: ["Full home deep clean", "Kitchen degreasing", "Bathroom sanitization", "Sofa & mattress cleaning"]
      },
      {
        id: "pest-control",
        slug: "pest-control",
        name: "Pest Control",
        categorySlug: "home-services",
        categoryName: "Home Services",
        description: "Effective extermination of termites, cockroaches, rodents, bed bugs, and mosquitoes.",
        shortDesc: "Termite, cockroach & bug treatment",
        iconName: "Bug",
        benefits: ["Odorless chemical treatment", "Long-lasting protection", "Safe for kids & pets", "Government approved products"],
        commonRequirements: ["Anti-termite piping", "Cockroach gel treatment", "Bed bug spray", "Rodent baiting"]
      },
      {
        id: "water-tank-cleaning",
        slug: "water-tank-cleaning",
        name: "Water Tank Cleaning",
        categorySlug: "home-services",
        categoryName: "Home Services",
        description: "Hygienic overhead and underground water tank cleaning using high-pressure jet sprays and anti-bacterial treatment.",
        shortDesc: "High-pressure jet & anti-bacterial clean",
        iconName: "Container",
        benefits: ["99.9% bacteria elimination", "Sludge removal", "Pressure jet technology", "UV sanitization process"],
        commonRequirements: ["Overhead plastic tank", "Underground sump cleaning", "Commercial water tank", "Routine 6-month maintenance"]
      },
      {
        id: "ro-water-purifier-service",
        slug: "ro-water-purifier-service",
        name: "RO/Water Purifier Service",
        categorySlug: "home-services",
        categoryName: "Home Services",
        description: "Filter replacement, membrane cleaning, TDS adjustment, and repair for all RO water purifier brands.",
        shortDesc: "Filter replacement & TDS adjustment",
        iconName: "Filter",
        benefits: ["Genuine filter spare parts", "TDS level balancing", "Quick repair service", "All brand support"],
        commonRequirements: ["Filter candle change", "RO membrane replacement", "Water leakage repair", "New RO installation"]
      },
      {
        id: "cctv-installation",
        slug: "cctv-installation",
        name: "CCTV Installation",
        categorySlug: "home-services",
        categoryName: "Home Services",
        description: "HD Security camera setup, DVR configuration, mobile remote viewing connection for homes and shops.",
        shortDesc: "HD Security camera & DVR setup",
        iconName: "Camera",
        benefits: ["Mobile live stream setup", "Night-vision camera install", "Clean wire management", "Warranty guidance"],
        commonRequirements: ["4-camera home package", "Shop CCTV installation", "DVR hard disk upgrade", "Wi-Fi camera setup"]
      },
      {
        id: "internet-wifi-setup",
        slug: "internet-wifi-setup",
        name: "Internet/Wi-Fi Setup",
        categorySlug: "home-services",
        categoryName: "Home Services",
        description: "Wi-Fi router installation, LAN cabling, signal booster setup, and dead-zone removal.",
        shortDesc: "Router setup, cabling & Wi-Fi boosters",
        iconName: "Wifi",
        benefits: ["Zero dead-zone coverage", "High-speed Ethernet routing", "Multi-floor setup", "Quick troubleshooting"],
        commonRequirements: ["New router configuration", "Wi-Fi extender setup", "Office LAN cabling", "Network drop fix"]
      },
      {
        id: "appliance-installation",
        slug: "appliance-installation",
        name: "Appliance Installation",
        categorySlug: "home-services",
        categoryName: "Home Services",
        description: "Safe mounting and setup for TV, chimney, geyser, washing machine, and dishwasher.",
        shortDesc: "TV wall mount, geyser & chimney setup",
        iconName: "Tv",
        benefits: ["Precision wall mounting", "Safe electrical hookups", "Vibration-free install", "Demonstration included"],
        commonRequirements: ["TV wall mount installation", "Kitchen chimney setup", "Geyser wall fitting", "Washing machine inlet setup"]
      }
    ]
  },
  {
    id: "cat-2",
    slug: "ac-appliance-services",
    name: "AC & Appliance Services",
    description: "AC repair, gas filling, refrigerator & washing machine fixes.",
    iconName: "Wind",
    color: "text-sky-600",
    bgColor: "bg-sky-50 border-sky-100",
    image: "/categories/ac-appliance.jpg",
    services: [
      {
        id: "ac-repair",
        slug: "ac-repair",
        name: "AC Repair",
        categorySlug: "ac-appliance-services",
        categoryName: "AC & Appliance Services",
        description: "Expert split and window AC repair, cooling issue fix, noise reduction, and PCB repairs in Araku Valley.",
        shortDesc: "Cooling fix, PCB repair & noise fix",
        iconName: "Snowflake",
        benefits: ["Experienced AC technicians", "Prompt cooling diagnostics", "Genuine spare parts", "Warranty on repairs"],
        commonRequirements: ["AC not cooling", "Water dripping indoors", "Unusual compressor noise", "PCB circuit failure"]
      },
      {
        id: "ac-installation",
        slug: "ac-installation",
        name: "AC Installation",
        categorySlug: "ac-appliance-services",
        categoryName: "AC & Appliance Services",
        description: "New and old AC indoor/outdoor unit installation, copper piping, and uninstallation.",
        shortDesc: "Split & window AC mounting & piping",
        iconName: "PenTool",
        benefits: ["Leak-proof copper piping", "Sturdy outdoor bracket fitting", "Proper vacuuming", "Clean wall drilling"],
        commonRequirements: ["New AC installation", "AC uninstallation", "Re-installation at new home", "Extended copper pipe fitting"]
      },
      {
        id: "ac-service",
        slug: "ac-service",
        name: "AC Service",
        categorySlug: "ac-appliance-services",
        categoryName: "AC & Appliance Services",
        description: "Jet pump cleaning service, filter wash, coil cleaning, and overall health checkup for AC units.",
        shortDesc: "High pressure jet foam cleaning",
        iconName: "RefreshCw",
        benefits: ["Deep jet water spray", "Better air quality", "Reduced power bills", "Extended compressor life"],
        commonRequirements: ["Seasonal maintenance", "Dusty coil cleaning", "Drain pipe jet flush", "Cooling performance check"]
      },
      {
        id: "ac-gas-filling",
        slug: "ac-gas-filling",
        name: "AC Gas Filling",
        categorySlug: "ac-appliance-services",
        categoryName: "AC & Appliance Services",
        description: "R32, R410, and R22 refrigerant leak testing and full gas top-up for maximum cooling efficiency.",
        shortDesc: "Refrigerant gas top-up & leak testing",
        iconName: "Flame",
        benefits: ["Pressure gauge leak test", "Pure R32 / R410 gas refill", "Optimal cooling restore", "100% safety check"],
        commonRequirements: ["Gas leak repair", "R32 gas refill", "R410 gas refill", "Low cooling due to low gas"]
      },
      {
        id: "refrigerator-repair",
        slug: "refrigerator-repair",
        name: "Refrigerator Repair",
        categorySlug: "ac-appliance-services",
        categoryName: "AC & Appliance Services",
        description: "Single door, double door, and side-by-side fridge repairs, thermostat fix, and compressor replacement.",
        shortDesc: "Single & double door fridge fix",
        iconName: "Box",
        benefits: ["Fast technician visit", "Gas charging available", "Thermostat & relay replacement", "All major brands"],
        commonRequirements: ["Fridge not cooling", "Excess ice formation", "Gas leak repair", "Compressor not starting"]
      },
      {
        id: "washing-machine-repair",
        slug: "washing-machine-repair",
        name: "Washing Machine Repair",
        categorySlug: "ac-appliance-services",
        categoryName: "AC & Appliance Services",
        description: "Front load, top load, and semi-automatic washing machine drum, motor, and PCB repair.",
        shortDesc: "Top & front load motor, drum & PCB fix",
        iconName: "RotateCcw",
        benefits: ["Drum noise troubleshooting", "Original motor belts", "Water inlet valve repair", "Door latch fix"],
        commonRequirements: ["Spin cycle not working", "Water drainage issue", "Excessive shaking noise", "Error code PCB repair"]
      },
      {
        id: "tv-repair",
        slug: "tv-repair",
        name: "TV Repair",
        categorySlug: "ac-appliance-services",
        categoryName: "AC & Appliance Services",
        description: "LED, LCD, and Smart TV screen backlight repair, sound issues, motherboard, and HDMI port fixes.",
        shortDesc: "LED/Smart TV backlight & board fix",
        iconName: "Tv",
        benefits: ["Display strip replacement", "Power board repair", "Original LED strips", "Doorstep repair in Araku"],
        commonRequirements: ["Sound okay but no display", "Display lines on screen", "TV not turning on", "Wi-Fi smart board issue"]
      },
      {
        id: "microwave-repair",
        slug: "microwave-repair",
        name: "Microwave Repair",
        categorySlug: "ac-appliance-services",
        categoryName: "AC & Appliance Services",
        description: "Solo, grill, and convection microwave oven repair, heating magnetron replacement, and touchpad fix.",
        shortDesc: "Heating magnetron & touchpad repair",
        iconName: "Zap",
        benefits: ["Safe high-voltage repair", "Magnetron replacement", "Touchpanel repair", "Sparking fix"],
        commonRequirements: ["Microwave not heating", "Sparking inside chamber", "Turntable plate not rotating", "Buttons not working"]
      },
      {
        id: "water-heater-repair",
        slug: "water-heater-repair",
        name: "Water Heater Repair",
        categorySlug: "ac-appliance-services",
        categoryName: "AC & Appliance Services",
        description: "Geyser heating element replacement, thermostat repair, water leak fix, and new geyser mounting.",
        shortDesc: "Geyser heating element & thermostat fix",
        iconName: "Flame",
        benefits: ["Safe electrical grounding", "Heavy-duty coil spares", "Pressure valve repair", "Quick service"],
        commonRequirements: ["Water not heating", "Geyser tripping MCB", "Water leaking from bottom", "Thermostat replacement"]
      },
      {
        id: "cooler-repair",
        slug: "cooler-repair",
        name: "Cooler Repair",
        categorySlug: "ac-appliance-services",
        categoryName: "AC & Appliance Services",
        description: "Air cooler motor rewind, water pump replacement, honeycomb pad fitting, and wiring repair.",
        shortDesc: "Cooler motor, pump & honeycomb pad replace",
        iconName: "Wind",
        benefits: ["Heavy-duty water pump", "Cooler motor rewinding", "Honeycomb pad fitment", "Low cost repair"],
        commonRequirements: ["Cooler fan motor repair", "Submersible pump replacement", "Honeycomb pad change", "Body leak repair"]
      }
    ]
  },
  {
    id: "cat-3",
    slug: "vehicle-services",
    name: "Vehicle Services",
    description: "Quick assistance for two-wheelers and four-wheelers.",
    iconName: "Car",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 border-emerald-100",
    image: "/categories/vehicle-services.jpg",
    services: [
      {
        id: "bike-repair",
        slug: "bike-repair",
        name: "Bike Repair",
        categorySlug: "vehicle-services",
        categoryName: "Vehicle Services",
        description: "Two-wheeler engine servicing, clutch plate replacement, brake overhaul, and chain lubing in Araku Valley.",
        shortDesc: "Two-wheeler engine, clutch & brake service",
        iconName: "Bike",
        benefits: ["Experienced mechanics", "Doorstep pickup in Araku", "Genuine spare parts", "Quick turn-around time"],
        commonRequirements: ["General bike service", "Brake pad replacement", "Clutch cable fix", "Engine oil change"]
      },
      {
        id: "car-repair",
        slug: "car-repair",
        name: "Car Repair",
        categorySlug: "vehicle-services",
        categoryName: "Vehicle Services",
        description: "Complete four-wheeler mechanics, suspension overhaul, brake disc replacement, and engine diagnostics.",
        shortDesc: "Engine tuning, suspension & brake repair",
        iconName: "Car",
        benefits: ["OBD Scanner diagnostic", "Quality lubricants", "Experienced multi-brand mechanics", "Transparent billing"],
        commonRequirements: ["Full car servicing", "Brake pad replacement", "Suspension noise fix", "Clutch plate overhaul"]
      },
      {
        id: "mechanic",
        slug: "mechanic",
        name: "Mechanic",
        categorySlug: "vehicle-services",
        categoryName: "Vehicle Services",
        description: "On-demand local auto mechanics for breakdown repair, starting trouble, and belt replacements.",
        shortDesc: "On-demand breakdown & starting repair",
        iconName: "Tool",
        benefits: ["On-site technician visit", "Emergency repair ready", "Multi-vehicle knowledge", "Affordable rates"],
        commonRequirements: ["Car starting trouble", "Self-starter motor fix", "Alternator issue", "Radiator overheating"]
      },
      {
        id: "puncture-service",
        slug: "puncture-service",
        name: "Puncture Service",
        categorySlug: "vehicle-services",
        categoryName: "Vehicle Services",
        description: "Mobile tubeless puncture repair, tube vulcanizing, and air pressure refill at home or roadside.",
        shortDesc: "Mobile tubeless & tube puncture repair",
        iconName: "Disc",
        benefits: ["Roadside mobile visit", "Tubeless strip puncture fix", "Air compressor support", "Fast arrival"],
        commonRequirements: ["Roadside flat tire", "Tubeless tire puncture", "Tire valve replacement", "Air top-up"]
      },
      {
        id: "battery-replacement",
        slug: "battery-replacement",
        name: "Battery Replacement",
        categorySlug: "vehicle-services",
        categoryName: "Vehicle Services",
        description: "Instant car and bike battery jumpstart, battery testing, and new battery replacement with warranty.",
        shortDesc: "Battery jumpstart & new battery install",
        iconName: "BatteryCharging",
        benefits: ["Emergency jumpstart boost", "Exide / Amaron authorized sales", "Old battery exchange discount", "Free doorstep fitting"],
        commonRequirements: ["Car dead battery jumpstart", "New bike battery installation", "Battery terminal cleaning", "Alternator charge test"]
      },
      {
        id: "car-bike-towing",
        slug: "car-bike-towing",
        name: "Car/Bike Towing",
        categorySlug: "vehicle-services",
        categoryName: "Vehicle Services",
        description: "Flatbed towing and wheel-lift towing service for breakdown or accident vehicles around Araku Ghat roads.",
        shortDesc: "Flatbed & breakdown towing assistance",
        iconName: "Truck",
        benefits: ["Safe damage-free towing", "Ghat road assistance", "24/7 availability", "Transport to desired garage"],
        commonRequirements: ["Ghat road vehicle breakdown", "Accident vehicle recovery", "Out-of-state car towing", "Bike flatbed transport"]
      },
      {
        id: "car-washing",
        slug: "car-washing",
        name: "Car Washing",
        categorySlug: "vehicle-services",
        categoryName: "Vehicle Services",
        description: "High-pressure foam wash, interior vacuuming, dashboard polishing, and underbody cleaning.",
        shortDesc: "Pressure foam wash, vacuum & polish",
        iconName: "Droplets",
        benefits: ["Snow foam technology", "Deep interior vacuuming", "Tire polish finish", "Doorstep washing option"],
        commonRequirements: ["Full body foam wash", "Interior vacuum cleaning", "Underbody mud wash", "Ceramic polish application"]
      },
      {
        id: "roadside-assistance",
        slug: "roadside-assistance",
        name: "Roadside Assistance",
        categorySlug: "vehicle-services",
        categoryName: "Vehicle Services",
        description: "24/7 emergency roadside help for lockouts, fuel delivery, towing, and flat tires in Araku Valley region.",
        shortDesc: "24/7 Emergency lockout, fuel & tire help",
        iconName: "LifeBuoy",
        isEmergency: true,
        benefits: ["Fastest response in Araku", "Fuel delivery service", "Key unlock support", "Towing coordination"],
        commonRequirements: ["Out of fuel on highway", "Keys locked inside car", "Night breakdown", "Engine overheating"]
      },
      {
        id: "car-ac-repair",
        slug: "car-ac-repair",
        name: "Car AC Repair",
        categorySlug: "vehicle-services",
        categoryName: "Vehicle Services",
        description: "Auto AC gas filling, compressor repair, cooling coil replacement, and AC filter cleaning.",
        shortDesc: "Auto AC gas leak fix & cooling restore",
        iconName: "Wind",
        benefits: ["Automotive gas refill", "Leak detection dye test", "Cabin filter cleaning", "Cooling performance test"],
        commonRequirements: ["Car AC not blowing cold air", "Bad odor from vents", "AC compressor clutch fix", "Gas leak repair"]
      },
      {
        id: "vehicle-pickup-drop",
        slug: "vehicle-pickup-drop",
        name: "Vehicle Pickup & Drop",
        categorySlug: "vehicle-services",
        categoryName: "Vehicle Services",
        description: "Convenient doorstep pickup of bike or car for garage servicing and safe return to your home.",
        shortDesc: "Doorstep pickup & drop for garage service",
        iconName: "MapPin",
        benefits: ["Save your time", "Insured driver pickup", "Live status updates", "Zero hassle service"],
        commonRequirements: ["Periodic car service pickup", "Bike service & drop", "Pre-tour vehicle checkup pickup", "Repair shop transit"]
      }
    ]
  },
  {
    id: "cat-4",
    slug: "taxi-travel",
    name: "Taxi & Travel",
    description: "Local & outstation taxis, Araku Valley tours & rentals.",
    iconName: "Navigation",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 border-emerald-100",
    image: "/categories/taxi-travel.jpg",
    services: [
      {
        id: "local-taxi",
        slug: "local-taxi",
        name: "Local Taxi",
        categorySlug: "taxi-travel",
        categoryName: "Taxi & Travel",
        description: "Clean, comfortable local cabs for city rides, shopping trips, and point-to-point drop-offs in Araku Valley.",
        shortDesc: "Point-to-point local cab service in Araku",
        iconName: "Car",
        benefits: ["Polite local drivers", "Clean sanitized cars", "Fair local meter rates", "Quick arrival"],
        commonRequirements: ["Araku market pickup", "Hotel to railway station drop", "Local sightseeing drop", "Hospital commute"]
      },
      {
        id: "airport-taxi",
        slug: "airport-taxi",
        name: "Airport Taxi",
        categorySlug: "taxi-travel",
        categoryName: "Taxi & Travel",
        description: "Reliable airport transfers between Araku Valley and Visakhapatnam (Vizag) International Airport (VTZ).",
        shortDesc: "Araku to Vizag Airport transfers",
        iconName: "Plane",
        benefits: ["Punctual pickup guarantee", "Luggage carrier options", "24/7 midnight ride availability", "Experienced ghat drivers"],
        commonRequirements: ["Vizag Airport to Araku ride", "Araku to Vizag Airport drop", "Flight delay cushion", "Family sedan / SUV"]
      },
      {
        id: "outstation-taxi",
        slug: "outstation-taxi",
        name: "Outstation Taxi",
        categorySlug: "taxi-travel",
        categoryName: "Taxi & Travel",
        description: "One-way and round-trip outstation cabs from Araku to Vizag, Hyderabad, Vijayawada, and Odisha points.",
        shortDesc: "One-way & round-trip intercity cabs",
        iconName: "Map",
        benefits: ["Transparent toll/driver allowance", "Sedan, Innova, Ertiga choices", "Clean comfortable long drives", "Safe hill driving"],
        commonRequirements: ["Araku to Vizag one-way", "Araku to Koraput / Jeypore", "Multi-day round trip", "Family holiday car"]
      },
      {
        id: "araku-valley-tours",
        slug: "araku-valley-tours",
        name: "Araku Valley Tours",
        categorySlug: "taxi-travel",
        categoryName: "Taxi & Travel",
        description: "Customized guided sightseeing tours for Borra Caves, Katiki Waterfalls, Chaparai, Coffee Plantation, and Tribal Museum.",
        shortDesc: "Borra Caves, Katiki, Chaparai & Museum tours",
        iconName: "Compass",
        benefits: ["Local guide drivers", "Cover all 8 tourist spots", "Custom tour schedule", "Photo-stop flexibilities"],
        commonRequirements: ["Full-day Araku sight-seeing", "2-Day complete tour", "Borra Caves & Katiki trip", "Coffee plantation visit"]
      },
      {
        id: "vizag-araku-taxi",
        slug: "vizag-araku-taxi",
        name: "Vizag–Araku Taxi",
        categorySlug: "taxi-travel",
        categoryName: "Taxi & Travel",
        description: "Dedicated daily taxi service operating between Visakhapatnam Railway Station/City and Araku Valley.",
        shortDesc: "Daily transfers Vizag Railway Station <-> Araku",
        iconName: "CornerUpRight",
        benefits: ["Ghat road specialist drivers", "Station pickup timing sync", "Fixed clear pricing", "Individual or group seats"],
        commonRequirements: ["Vizag station pickup", "Hill route sightseeing stops", "Return trip booking", "Innova Crysta booking"]
      },
      {
        id: "car-rental",
        slug: "car-rental",
        name: "Car Rental",
        categorySlug: "taxi-travel",
        categoryName: "Taxi & Travel",
        description: "Self-drive or driver-assisted car rentals for daily, weekly, or tour itineraries in Araku.",
        shortDesc: "Daily & weekly car rental options",
        iconName: "Key",
        benefits: ["Well-maintained vehicles", "Flexible rental terms", "Clean documentation", "Roadside breakdown cover"],
        commonRequirements: ["Daily self-drive car", "Weekly SUV rental", "VIP Innova rental", "Corporate vehicle lease"]
      },
      {
        id: "tempo-traveller",
        slug: "tempo-traveller",
        name: "Tempo Traveller",
        categorySlug: "taxi-travel",
        categoryName: "Taxi & Travel",
        description: "12-seater, 17-seater, and 26-seater luxury AC Tempo Travellers for large family tours and college trips.",
        shortDesc: "12, 17 & 26 seater luxury group travellers",
        iconName: "Users",
        benefits: ["Reclining push-back seats", "Stereo sound system", "Ample luggage space", "Expert group trip drivers"],
        commonRequirements: ["12-seater AC Tempo Traveller", "College reunion trip", "Wedding guest transport", "Corporate team outing"]
      },
      {
        id: "tourist-vehicles",
        slug: "tourist-vehicles",
        name: "Tourist Vehicles",
        categorySlug: "taxi-travel",
        categoryName: "Taxi & Travel",
        description: "Jeeps for off-road Katiki Waterfalls trip, open-top vehicles, and tourist buses.",
        shortDesc: "Off-road Katiki Jeeps & tourist buses",
        iconName: "Shield",
        benefits: ["Katiki off-road Jeep specialists", "High-ground clearance vehicles", "Experienced forest drivers", "Group discounts"],
        commonRequirements: ["4x4 Jeep for Katiki Falls", "Open safari jeep", "Mini tourist bus", "Dhimsa dance venue ride"]
      },
      {
        id: "driver-services",
        slug: "driver-services",
        name: "Driver Services",
        categorySlug: "taxi-travel",
        categoryName: "Taxi & Travel",
        description: "Hire experienced local hill drivers by the hour or by the day to drive your personal vehicle.",
        shortDesc: "Hire skilled local hill drivers for your car",
        iconName: "UserCheck",
        benefits: ["Ghat road hill driving expertise", "Verified safe drivers", "Hourly & daily options", "Polite behavior"],
        commonRequirements: ["Hill driver for private car", "Outstation driver hire", "Night driver service", "Local sightseeing driver"]
      },
      {
        id: "tour-packages",
        slug: "tour-packages",
        name: "Tour Packages",
        categorySlug: "taxi-travel",
        categoryName: "Taxi & Travel",
        description: "All-inclusive Araku travel packages covering cab, hotel stay, food guide, and entry tickets.",
        shortDesc: "Complete cab + hotel + tour packages",
        iconName: "Package",
        benefits: ["Zero hassle itinerary", "Best resort stays included", "Dedicated cab throughout", "Budget to luxury options"],
        commonRequirements: ["2N/3D Araku Package", "Honeymoon special package", "Family weekend trip", "Vizag-Araku-Tyda tour"]
      }
    ]
  },
  {
    id: "cat-5",
    slug: "hotels-stays",
    name: "Hotels & Stays",
    description: "Resorts, hotels, homestays & lodges booking.",
    iconName: "Building",
    color: "text-purple-600",
    bgColor: "bg-purple-50 border-purple-100",
    image: "/categories/hotels-stays.jpg",
    services: [
      {
        id: "hotels",
        slug: "hotels",
        name: "Hotels",
        categorySlug: "hotels-stays",
        categoryName: "Hotels & Stays",
        description: "Book verified 2-star, 3-star, and luxury hotels in central Araku Valley with modern amenities.",
        shortDesc: "Verified central hotels & luxury stays",
        iconName: "Building2",
        benefits: ["Clean rooms & sanitized linen", "In-house restaurants", "Scenic balcony views", "Easy cancellation support"],
        commonRequirements: ["Deluxe AC Room", "Family Suite Hotel", "Central market location", "Hot water & Wi-Fi amenities"]
      },
      {
        id: "resorts",
        slug: "resorts",
        name: "Resorts",
        categorySlug: "hotels-stays",
        categoryName: "Hotels & Stays",
        description: "Nature resorts, coffee garden stays, wooden cottages, and campfire resort experiences.",
        shortDesc: "Coffee plantation & hill view resorts",
        iconName: "Trees",
        benefits: ["Campfire & Dhimsa tribal dance", "Lush green coffee gardens", "Swimming pool / play areas", "Peaceful mountain view"],
        commonRequirements: ["Wooden cottage stay", "Campfire resort package", "Coffee estate resort", "Luxury pool resort"]
      },
      {
        id: "homestays",
        slug: "homestays",
        name: "Homestays",
        categorySlug: "hotels-stays",
        categoryName: "Hotels & Stays",
        description: "Authentic local host homestays offering home-cooked traditional Andhra meals and cozy warmth.",
        shortDesc: "Cozy local host stays & homemade meals",
        iconName: "Home",
        benefits: ["Authentic home-cooked food", "Local culture experience", "Affordable tariff", "Hospitable local hosts"],
        commonRequirements: ["Full house homestay for group", "Private room in homestay", "Kitchen access homestay", "Farm homestay"]
      },
      {
        id: "lodges",
        slug: "lodges",
        name: "Lodges",
        categorySlug: "hotels-stays",
        categoryName: "Hotels & Stays",
        description: "Budget-friendly lodges near Araku Railway Station and Bus Stand for quick transit stays.",
        shortDesc: "Near station budget transit lodges",
        iconName: "DoorOpen",
        benefits: ["24/7 check-in", "Near Railway station & Bus stand", "Pocket-friendly prices", "Hot water facility"],
        commonRequirements: ["Single room transit lodge", "Overnight stay near station", "Budget double room", "Quick freshen-up booking"]
      },
      {
        id: "budget-rooms",
        slug: "budget-rooms",
        name: "Budget Rooms",
        categorySlug: "hotels-stays",
        categoryName: "Hotels & Stays",
        description: "Clean non-AC and AC budget room rentals for backpackers, solo travelers, and students.",
        shortDesc: "Backpacker & solo traveler budget rooms",
        iconName: "DollarSign",
        benefits: ["Best low cost guarantee", "Basic clean amenities", "Safe for solo travelers", "Central location"],
        commonRequirements: ["Under ₹1000 rooms", "Backpacker single bed", "Student group room", "1-night budget room"]
      },
      {
        id: "family-stays",
        slug: "family-stays",
        name: "Family Stays",
        categorySlug: "hotels-stays",
        categoryName: "Hotels & Stays",
        description: "Spacious multi-bedroom suites, interconnected rooms, and child-friendly play environments.",
        shortDesc: "Multi-bedroom suites & child friendly stays",
        iconName: "Users",
        benefits: ["Extra mattresses available", "Kid safe environment", "In-room dining option", "Spacious parking"],
        commonRequirements: ["2-Bedroom family suite", "Connecting room for 6 people", "Garden view family room", "Kids play zone hotel"]
      },
      {
        id: "couple-friendly-stays",
        slug: "couple-friendly-stays",
        name: "Couple-Friendly Stays",
        categorySlug: "hotels-stays",
        categoryName: "Hotels & Stays",
        description: "Private, safe, and romantic room stays accepting valid government IDs for couples.",
        shortDesc: "Private, safe & couple friendly hotel rooms",
        iconName: "Heart",
        benefits: ["100% privacy & safety", "Easy check-in with valid ID", "Romantic view balconies", "Prompt room service"],
        commonRequirements: ["Honeymoon room setup", "Weekend getaway stay", "Private cottage for couple", "Scenic hill balcony room"]
      },
      {
        id: "tourist-accommodation",
        slug: "tourist-accommodation",
        name: "Tourist Accommodation",
        categorySlug: "hotels-stays",
        categoryName: "Hotels & Stays",
        description: "Special tourist lodges, APTDC Haritha resort guidance, and seasonal stay arrangements.",
        shortDesc: "APTDC & hill tourist accommodation help",
        iconName: "MapPin",
        benefits: ["Near main tourist spots", "Help with sightseeing transport", "Group booking discounts", "Local travel advice"],
        commonRequirements: ["Near Chaparai stays", "Near Borra Caves stays", "Seasonal peak room booking", "APTDC nearby alternative"]
      },
      {
        id: "group-accommodation",
        slug: "group-accommodation",
        name: "Group Accommodation",
        categorySlug: "hotels-stays",
        categoryName: "Hotels & Stays",
        description: "Dormitories, hall stays, and bulk room bookings for school trips, college tours, and wedding parties.",
        shortDesc: "Dormitories & bulk hall bookings for groups",
        iconName: "Building",
        benefits: ["Large dormitory beds", "Separate bath blocks", "Catering alignment", "Discounted per-head rates"],
        commonRequirements: ["30-bed dormitory", "Wedding guest hotel block", "College industrial tour stay", "School excursion booking"]
      }
    ]
  },
  {
    id: "cat-6",
    slug: "construction-home-improvement",
    name: "Construction & Home Improvement",
    description: "Contractors, architects, interior design and structural works.",
    iconName: "HardHat",
    color: "text-orange-600",
    bgColor: "bg-orange-50 border-orange-100",
    image: "/categories/construction.jpg",
    services: [
      {
        id: "building-contractors",
        slug: "building-contractors",
        name: "Building Contractors",
        categorySlug: "construction-home-improvement",
        categoryName: "Construction & Home Improvement",
        description: "Turnkey residential house construction, commercial building execution, foundation work, and structural concrete.",
        shortDesc: "Turnkey house construction & RCC structure",
        iconName: "Hammer",
        benefits: ["Quality cement & steel standards", "On-time milestone delivery", "Experienced civil engineers", "Clear contract terms"],
        commonRequirements: ["G+2 House construction", "Commercial shop construction", "RCC frame structure", "Boundary wall construction"]
      },
      {
        id: "civil-contractors",
        slug: "civil-contractors",
        name: "Civil Contractors",
        categorySlug: "construction-home-improvement",
        categoryName: "Construction & Home Improvement",
        description: "Masonry work, brickwork, slab casting, plastering, compound walls, and foundation digging.",
        shortDesc: "Brickwork, plastering, slab & masonry work",
        iconName: "Trowel",
        benefits: ["Experienced masons", "Strong structural integrity", "Raw material estimation", "Renovation repair work"],
        commonRequirements: ["Slab casting", "External wall plastering", "Compound wall masonry", "Room extension"]
      },
      {
        id: "architects",
        slug: "architects",
        name: "Architects",
        categorySlug: "construction-home-improvement",
        categoryName: "Construction & Home Improvement",
        description: "2D Floor planning, 3D elevation renders, Vastu-compliant blueprints, and municipal permission drawings.",
        shortDesc: "2D house plans, 3D elevations & Vastu layouts",
        iconName: "Compass",
        benefits: ["Vastu-compliant designs", "Photorealistic 3D renders", "Space optimization", "Structural engineer stamp"],
        commonRequirements: ["House 2D floor plan", "3D Front elevation design", "Vastu layout checking", "Government approval plan"]
      },
      {
        id: "interior-designers",
        slug: "interior-designers",
        name: "Interior Designers",
        categorySlug: "construction-home-improvement",
        categoryName: "Construction & Home Improvement",
        description: "Complete home and office interior design, modular furniture, lighting design, and wallpaper installation.",
        shortDesc: "Complete living room, bedroom & office interiors",
        iconName: "Palette",
        benefits: ["Modern aesthetic concepts", "Custom modular woodwork", "Turnkey execution", "3D visualization prior to build"],
        commonRequirements: ["Living room interior design", "Full 3BHK home interior", "Office interior decor", "Custom wardrobe & bed design"]
      },
      {
        id: "electrical-contractors",
        slug: "electrical-contractors",
        name: "Electrical Contractors",
        categorySlug: "construction-home-improvement",
        categoryName: "Construction & Home Improvement",
        description: "Commercial building electrical contracting, 3-phase wiring, transformer setup, and panel board installation.",
        shortDesc: "3-Phase commercial wiring & panel boards",
        iconName: "Zap",
        benefits: ["Licensed electrical master", "Heavy load calculation", "Safety earthing setup", "Industrial grade wiring"],
        commonRequirements: ["New building wiring contract", "Main distribution board setup", "Earthing pit installation", "Commercial shop wiring"]
      },
      {
        id: "plumbing-contractors",
        slug: "plumbing-contractors",
        name: "Plumbing Contractors",
        categorySlug: "construction-home-improvement",
        categoryName: "Construction & Home Improvement",
        description: "Complete building plumbing line layout, underground drainage piping, overhead tank connection, and pump setups.",
        shortDesc: "Building concealed plumbing & drainage lines",
        iconName: "Droplet",
        benefits: ["CPVC / PVC concealed piping", "Pressure testing before tile", "Proper slope drainage", "Long-life warranty"],
        commonRequirements: ["New house plumbing line", "Overhead tank pipe connection", "Drainage pit connection", "Commercial toilet layout"]
      },
      {
        id: "painting",
        slug: "painting",
        name: "Painting",
        categorySlug: "construction-home-improvement",
        categoryName: "Construction & Home Improvement",
        description: "Contract painting for new buildings, Royal Asian Paints finishes, exterior weather-proof coating.",
        shortDesc: "New building contract painting & apex weather coat",
        iconName: "Paintbrush",
        benefits: ["Airless spray paint option", "Weatherproof exterior coating", "Smooth wall putty sanding", "Clean site hand-over"],
        commonRequirements: ["New building contract paint", "Exterior Apex coating", "Royale interior finish", "Texture wall art"]
      },
      {
        id: "flooring",
        slug: "flooring",
        name: "Flooring",
        categorySlug: "construction-home-improvement",
        categoryName: "Construction & Home Improvement",
        description: "Vitrified tile laying, marble polishing, granite kitchen counter fitting, and wooden flooring.",
        shortDesc: "Tile laying, marble polish & granite countertops",
        iconName: "Grid",
        benefits: ["Precision laser level tiling", "Mirror marble polishing", "Sturdy granite counter cut", "Zero tile slope flaw"],
        commonRequirements: ["Vitrified tile laying", "Kitchen granite platform fitting", "Marble polishing work", "Stairway granite steps"]
      },
      {
        id: "false-ceiling",
        slug: "false-ceiling",
        name: "False Ceiling",
        categorySlug: "construction-home-improvement",
        categoryName: "Construction & Home Improvement",
        description: "Gypsum board false ceiling, POP design, cove lighting channels, and acoustic ceiling panels.",
        shortDesc: "Gypsum board, POP false ceiling & cove lights",
        iconName: "Layers",
        benefits: ["Saint-Gobain gypsum boards", "Modern LED channel grooves", "Thermal insulation benefit", "Elegant hall designs"],
        commonRequirements: ["Living room false ceiling", "Bedroom POP design", "LED cove lighting strip box", "Commercial office ceiling"]
      },
      {
        id: "aluminium-work",
        slug: "aluminium-work",
        name: "Aluminium Work",
        categorySlug: "construction-home-improvement",
        categoryName: "Construction & Home Improvement",
        description: "Aluminium sliding windows, partition walls for offices, mosquito mesh frames, and shop front doors.",
        shortDesc: "Aluminium sliding windows & office partitions",
        iconName: "Maximize",
        benefits: ["Heavy-gauge powder coated aluminium", "Smooth sliding tracks", "Mosquito mesh integration", "Durable commercial doors"],
        commonRequirements: ["3-Track sliding windows", "Office aluminium partition", "Mosquito net window frames", "Shop aluminium glass door"]
      },
      {
        id: "glass-work",
        slug: "glass-work",
        name: "Glass Work",
        categorySlug: "construction-home-improvement",
        categoryName: "Construction & Home Improvement",
        description: "Toughened glass shop fronts, glass railings, shower cubicles, and decorative glass mirrors.",
        shortDesc: "Toughened glass shopfronts & shower cubicles",
        iconName: "Square",
        benefits: ["12mm Toughened safety glass", "Patch fitting glass doors", "Sturdy SS glass railing", "Custom mirror cutting"],
        commonRequirements: ["Commercial shop glass front", "Balcony glass railing", "Bathroom glass partition", "Custom LED mirror fitting"]
      },
      {
        id: "fabrication",
        slug: "fabrication",
        name: "Fabrication",
        categorySlug: "construction-home-improvement",
        categoryName: "Construction & Home Improvement",
        description: "Iron safety gates, window grills, shed structural fabrication, SS balcony railings, and metal stairs.",
        shortDesc: "Iron main gates, window grills & MS roof sheds",
        iconName: "Shield",
        benefits: ["Heavy iron structural welding", "Rust-proof primer coat", "Custom grill patterns", "SS 304 grade railings"],
        commonRequirements: ["Main entrance iron gate", "Window safety grills", "Terrace MS roof shed", "Stainless steel balcony railing"]
      },
      {
        id: "modular-kitchen",
        slug: "modular-kitchen",
        name: "Modular Kitchen",
        categorySlug: "construction-home-improvement",
        categoryName: "Construction & Home Improvement",
        description: "L-shape, U-shape, parallel modular kitchen design with marine ply, acrylic finishes, and soft-close hardware.",
        shortDesc: "L & U shape modular kitchen with soft-close drawers",
        iconName: "Layout",
        benefits: ["Waterproof BWP Marine Plywood", "Hettich / Hafele soft-close fittings", "Chimney & hob alignment", "10-Year warranty"],
        commonRequirements: ["L-Shaped modular kitchen", "Acrylic finish kitchen cabinets", "PULL-OUT basket organization", "Parallel kitchen design"]
      }
    ]
  },
  {
    id: "cat-7",
    slug: "real-estate",
    name: "Real Estate",
    description: "Connect property seekers with local property professionals.",
    iconName: "Home",
    color: "text-teal-600",
    bgColor: "bg-teal-50 border-teal-100",
    image: "/categories/real-estate.jpg",
    badge: "High Value Leads",
    services: [
      {
        id: "plots-for-sale",
        slug: "plots-for-sale",
        name: "Plots for Sale",
        categorySlug: "real-estate",
        categoryName: "Real Estate",
        description: "Residential layout plots, commercial highway plots, and clear title lands in and around Araku Valley.",
        shortDesc: "Residential & commercial layout plots for sale",
        iconName: "Map",
        benefits: ["100% clear title verification", "VMRDA / Panchayat approved options", "Road connectivity check", "Direct seller meeting"],
        commonRequirements: ["200 Sq yards residential plot", "Commercial highway plot", "Investments plots near Araku", "Corner plot inquiry"]
      },
      {
        id: "houses-for-sale",
        slug: "houses-for-sale",
        name: "Houses for Sale",
        categorySlug: "real-estate",
        categoryName: "Real Estate",
        description: "Independent houses, villas, duplex homes, and resort cottages available for purchase in Araku Valley.",
        shortDesc: "Independent houses, duplexes & cottages for sale",
        iconName: "Home",
        benefits: ["Ready-to-move properties", "Bank loan assistance", "Verified property documents", "Scenic location choices"],
        commonRequirements: ["2BHK Independent house", "3BHK Duplex villa", "Resort cottage property", "Newly constructed house"]
      },
      {
        id: "apartments",
        slug: "apartments",
        name: "Apartments",
        categorySlug: "real-estate",
        categoryName: "Real Estate",
        description: "2BHK and 3BHK flat sales in gated communities with elevator, parking, and security amenities.",
        shortDesc: "2BHK & 3BHK flat sales in Araku area",
        iconName: "Building2",
        benefits: ["Modern elevator & backup power", "Dedicated covered car parking", "Gated security", "Good rental return potential"],
        commonRequirements: ["2BHK Flat purchase", "3BHK Luxury apartment", "Under-construction flat", "Resale apartment"]
      },
      {
        id: "commercial-properties",
        slug: "commercial-properties",
        name: "Commercial Properties",
        categorySlug: "real-estate",
        categoryName: "Real Estate",
        description: "Commercial shops, complex floors, hotel buildings, and warehouse spaces for sale or lease.",
        shortDesc: "Shops, hotel buildings & commercial space",
        iconName: "Briefcase",
        benefits: ["High footfall market locations", "Ideal for tourism business", "Lease & sale agreements", "High ROI properties"],
        commonRequirements: ["Main road commercial shop", "Building for hotel setup", "Showroom space lease", "Storage warehouse land"]
      },
      {
        id: "rental-houses",
        slug: "rental-houses",
        name: "Rental Houses",
        categorySlug: "real-estate",
        categoryName: "Real Estate",
        description: "1BHK, 2BHK, and 3BHK family rental houses, employee quarters, and furnished executive accommodations.",
        shortDesc: "1BHK, 2BHK & 3BHK family houses for rent",
        iconName: "Key",
        benefits: ["24/7 Water supply homes", "Peaceful residential colonies", "Reasonable security deposit", "Immediate occupancy"],
        commonRequirements: ["2BHK Family rental home", "1BHK Bachelor/Teacher house", "Furnished rental house", "House near Govt Hospital"]
      },
      {
        id: "shop-rentals",
        slug: "shop-rentals",
        name: "Shop Rentals",
        categorySlug: "real-estate",
        categoryName: "Real Estate",
        description: "Retail shop spaces, restaurant locations, office space, and tourist market shutter rentals.",
        shortDesc: "Retail shutters & office spaces for rent",
        iconName: "ShoppingBag",
        benefits: ["Prime Araku market locations", "Heavy tourist traffic exposure", "Clear lease deeds", "Immediate key handover"],
        commonRequirements: ["Ground floor retail shop", "Restaurant setup location", "Office space on 1st floor", "Near Araku station shutter"]
      },
      {
        id: "land",
        slug: "land",
        name: "Land",
        categorySlug: "real-estate",
        categoryName: "Real Estate",
        description: "Large land parcels for institutions, eco-resorts, solar projects, and private retreats.",
        shortDesc: "Large land parcels for resorts & institutional projects",
        iconName: "Globe",
        benefits: ["Extent verification", "Survey & boundary marking", "Revenue record check", "Legal consultation"],
        commonRequirements: ["1-5 Acre resort land", "Institution land parcel", "Hill view land", "Road face extent land"]
      },
      {
        id: "farm-land",
        slug: "farm-land",
        name: "Farm Land",
        categorySlug: "real-estate",
        categoryName: "Real Estate",
        description: "Coffee plantation lands, organic agriculture plots, and mango/fruit farm property for sale.",
        shortDesc: "Coffee plantations & agricultural farm lands",
        iconName: "Trees",
        benefits: ["Rich fertile soil quality", "Abundant natural water source", "Coffee crop yield history", "Clear Pattadar Passbook"],
        commonRequirements: ["Coffee plantation land purchase", "2 Acre farm land", "Organic agriculture plot", "Farm house plot"]
      },
      {
        id: "property-dealers",
        slug: "property-dealers",
        name: "Property Dealers",
        categorySlug: "real-estate",
        categoryName: "Real Estate",
        description: "Trusted local real estate brokers assisting buyers and sellers with negotiation and documentation.",
        shortDesc: "Local real estate brokers & property consultants",
        iconName: "UserCheck",
        benefits: ["Deep Araku market knowledge", "Verified local property network", "Hassle-free document registration", "Fair commission"],
        commonRequirements: ["Property buyer agent", "Sell my plot/house agent", "Title deed consultation", "Valuation assistance"]
      },
      {
        id: "property-management",
        slug: "property-management",
        name: "Property Management",
        categorySlug: "real-estate",
        categoryName: "Real Estate",
        description: "Absentee owner property care, tenant management, rent collection, and plot fencing maintenance.",
        shortDesc: "Plot care, tenant management & rent collection",
        iconName: "Shield",
        benefits: ["Regular physical site inspection", "Tenant background check", "Fencing & encroachment protection", "On-time rent collection"],
        commonRequirements: ["Plot protection & boundary watch", "NRI property care", "Tenant rent management", "Vacant house maintenance"]
      }
    ]
  },
  {
    id: "cat-8",
    slug: "events-wedding",
    name: "Events & Wedding Services",
    description: "Photography, decoration, catering, DJ and complete event planning.",
    iconName: "Camera",
    color: "text-pink-600",
    bgColor: "bg-pink-50 border-pink-100",
    image: "/categories/event-services.jpg",
    services: [
      {
        id: "photography",
        slug: "photography",
        name: "Photography",
        categorySlug: "events-wedding",
        categoryName: "Events & Wedding Services",
        description: "Professional event photography, portrait shoots, birthday parties, and corporate event coverage.",
        shortDesc: "Event, birthday & portrait photography",
        iconName: "Camera",
        benefits: ["High-resolution Sony/Canon gear", "Color graded digital photos", "Fast photo delivery", "Album printing included"],
        commonRequirements: ["Birthday party photographer", "Pre-wedding shoot", "Product shoot", "Family function coverage"]
      },
      {
        id: "videography",
        slug: "videography",
        name: "Videography",
        categorySlug: "events-wedding",
        categoryName: "Events & Wedding Services",
        description: "4K Video recording, cinematic teasers, drone aerial shots, and live YouTube event streaming.",
        shortDesc: "4K Video, cinematic reels & drone coverage",
        iconName: "Video",
        benefits: ["Cinematic gimbal stabilization", "4K drone video coverage", "Teaser reel editing", "Live LED wall feed"],
        commonRequirements: ["Cinematic video shoot", "Drone video of outdoor venue", "Live YouTube streaming", "Function highlight film"]
      },
      {
        id: "wedding-photography",
        slug: "wedding-photography",
        name: "Wedding Photography",
        categorySlug: "events-wedding",
        categoryName: "Events & Wedding Services",
        description: "Candid wedding photography, traditional ceremony video, luxury photobook album, and pre-wedding hill shoots.",
        shortDesc: "Candid wedding photos, pre-wedding & luxury albums",
        iconName: "Heart",
        benefits: ["Candid emotion specialist", "Creative outdoor pre-wedding in Araku", "Flush mount glass cover albums", "Full wedding team"],
        commonRequirements: ["Full 2-Day wedding coverage", "Pre-wedding shoot at Araku hills", "Candid photo & video package", "Parent albums"]
      },
      {
        id: "decoration",
        slug: "decoration",
        name: "Decoration",
        categorySlug: "events-wedding",
        categoryName: "Events & Wedding Services",
        description: "Fresh flower wedding mandap decor, balloon party themes, LED entrance arches, and stage backdrops.",
        shortDesc: "Flower wedding mandap, stage & balloon theme decor",
        iconName: "Sparkles",
        benefits: ["Fresh natural flowers", "Custom theme concepts", "Punctual stage readiness", "Lighting integration"],
        commonRequirements: ["Wedding mandap flower decor", "Reception stage backdrop", "Birthday balloon decoration", "Haldi/Sangeet decor setup"]
      },
      {
        id: "catering",
        slug: "catering",
        name: "Catering",
        categorySlug: "events-wedding",
        categoryName: "Events & Wedding Services",
        description: "Delicious traditional Andhra vegetarian and non-vegetarian buffet catering for weddings, parties, and functions.",
        shortDesc: "Traditional Andhra veg & non-veg buffet catering",
        iconName: "Utensils",
        benefits: ["Hygiene certified kitchen", "Authentic regional taste", "Uniformed serving staff", "Live food counters (Dosa/Chat)"],
        commonRequirements: ["500-Guest wedding meal", "100-Guest house warming lunch", "Veg traditional leaf meal", "Non-veg buffet menu"]
      },
      {
        id: "dj",
        slug: "dj",
        name: "DJ",
        categorySlug: "events-wedding",
        categoryName: "Events & Wedding Services",
        description: "Professional party DJ with high-energy dance tracks, mobile console, fog machine, and disco light setup.",
        shortDesc: "High energy DJ with disco lights & fog effect",
        iconName: "Music",
        benefits: ["Latest Telugu, Hindi & English tracks", "Subwoofer bass sound system", "Laser & strobe lights", "Interactive crowd DJ"],
        commonRequirements: ["Sangeet night DJ", "Birthday party DJ console", "New Year party DJ", "College fest music DJ"]
      },
      {
        id: "sound-system",
        slug: "sound-system",
        name: "Sound System",
        categorySlug: "events-wedding",
        categoryName: "Events & Wedding Services",
        description: "JBL/RCF professional PA sound system rental, cordless mics, mixers, and audio tech support.",
        shortDesc: "JBL / RCF PA sound system & cordless mic rental",
        iconName: "Volume2",
        benefits: ["Crystal clear vocal clarity", "Heavy bass outdoor sound", "Backup generator support", "Audio technician present"],
        commonRequirements: ["Political meeting PA system", "Wedding reception audio setup", "School annual day sound", "Karaoke system setup"]
      },
      {
        id: "event-management",
        slug: "event-management",
        name: "Event Management",
        categorySlug: "events-wedding",
        categoryName: "Events & Wedding Services",
        description: "Complete end-to-end wedding, corporate conference, and cultural festival coordination.",
        shortDesc: "End-to-end wedding & corporate event planning",
        iconName: "Award",
        benefits: ["Single window coordination", "Budget optimization", "Vendor management", "Zero stress execution"],
        commonRequirements: ["Complete wedding planner", "Corporate conference setup", "Cultural festival management", "Destination event in Araku"]
      },
      {
        id: "makeup-artists",
        slug: "makeup-artists",
        name: "Makeup Artists",
        categorySlug: "events-wedding",
        categoryName: "Events & Wedding Services",
        description: "Bridal HD & Airbrush makeup, party saree draping, hairstyling, and makeover services.",
        shortDesc: "Bridal HD / Airbrush makeup & saree draping",
        iconName: "Smile",
        benefits: ["International cosmetics brands (MAC/Huda)", "Doorstep venue makeup", "Long-lasting waterproof makeup", "Trial makeup available"],
        commonRequirements: ["Bridal HD makeup package", "Engagement party makeup", "Saree draping & hair extension", "Family guest makeup"]
      },
      {
        id: "mehendi-artists",
        slug: "mehendi-artists",
        name: "Mehendi Artists",
        categorySlug: "events-wedding",
        categoryName: "Events & Wedding Services",
        description: "Arabic, Marwari, Indo-Western, and customized bridal Mehendi henna design experts.",
        shortDesc: "Bridal Arabic & Marwari Mehendi design",
        iconName: "Edit3",
        benefits: ["Dark stain natural henna paste", "Intricate portrait Mehendi", "Fast application speed", "Group team available"],
        commonRequirements: ["Full arm bridal Mehendi", "Guest Mehendi party package", "Arabic palm design", "Haldi function mehendi"]
      },
      {
        id: "wedding-venues",
        slug: "wedding-venues",
        name: "Wedding Venues",
        categorySlug: "events-wedding",
        categoryName: "Events & Wedding Services",
        description: "Marriage halls, AC function halls, outdoor lawn venues, and resort wedding grounds in Araku.",
        shortDesc: "Marriage halls, AC function halls & open lawns",
        iconName: "Home",
        benefits: ["Spacious dining halls", "Ample vehicle parking", "Generator power backup", "Bride/Groom rooms"],
        commonRequirements: ["1000-Capacity Marriage hall", "AC Function hall for reception", "Outdoor lawn for resort wedding", "Budget community hall"]
      },
      {
        id: "invitation-design",
        slug: "invitation-design",
        name: "Invitation Design",
        categorySlug: "events-wedding",
        categoryName: "Events & Wedding Services",
        description: "Digital video invitations, WhatsApp wedding cards, luxury printed wedding box cards, and custom graphics.",
        shortDesc: "Digital video invites & luxury printed cards",
        iconName: "FileText",
        benefits: ["Animated video invites", "Instant WhatsApp share file", "Premium metallic foil printing", "Quick 24h design turnaround"],
        commonRequirements: ["WhatsApp wedding video invitation", "Printed wedding cards", "Housewarming digital invite", "Custom caricature card"]
      }
    ]
  },
  {
    id: "cat-9",
    slug: "business-digital-services",
    name: "Business & Digital Services",
    description: "Website development, branding, digital marketing, graphic design, and IT solutions.",
    iconName: "Monitor",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 border-indigo-100",
    image: "/categories/digital-tech.jpg",
    services: [
      {
        id: "website-development",
        slug: "website-development",
        name: "Website Development",
        categorySlug: "business-digital-services",
        categoryName: "Business & Digital Services",
        description: "Responsive business websites, e-commerce stores, hotel booking portals, and mobile-friendly web apps.",
        shortDesc: "Custom business websites & e-commerce stores",
        iconName: "Globe",
        benefits: ["Fast loading speed", "100% Mobile responsive", "SEO optimized structure", "Free domain & hosting setup"],
        commonRequirements: ["Local business website", "Hotel booking portal", "E-commerce store", "Portfolio site"]
      },
      {
        id: "digital-marketing",
        slug: "digital-marketing",
        name: "Digital Marketing",
        categorySlug: "business-digital-services",
        categoryName: "Business & Digital Services",
        description: "Google Ads, Facebook/Instagram lead ads, Google Business profile optimization, and local lead generation.",
        shortDesc: "Google & Meta ads, local lead generation",
        iconName: "TrendingUp",
        benefits: ["Targeted Araku & Vizag audience", "High conversion phone leads", "Google Maps rank improvement", "Measurable ROI"],
        commonRequirements: ["Google Maps top rank setup", "Meta lead generation ads", "Local business promotion", "WhatsApp marketing campaign"]
      },
      {
        id: "social-media-management",
        slug: "social-media-management",
        name: "Social Media Management",
        categorySlug: "business-digital-services",
        categoryName: "Business & Digital Services",
        description: "Instagram reels creation, daily Facebook post designs, caption writing, and page follower growth.",
        shortDesc: "Instagram reels, post designs & page management",
        iconName: "Share2",
        benefits: ["Eye-catching local content", "Consistent posting schedule", "Reels video editing", "Community engagement"],
        commonRequirements: ["Monthly Instagram management", "Daily promo poster creation", "Resort reel video shoot", "Brand page setup"]
      },
      {
        id: "graphic-design",
        slug: "graphic-design",
        name: "Graphic Design",
        categorySlug: "business-digital-services",
        categoryName: "Business & Digital Services",
        description: "Flex banners, brochures, flyers, business cards, menu cards, and social media banners.",
        shortDesc: "Flex banners, flyers, brochures & menu cards",
        iconName: "Palette",
        benefits: ["High-res print-ready artwork", "Creative modern layouts", "Quick 24-hour turnaround", "Unlimited design revisions"],
        commonRequirements: ["Flex signboard design", "Restaurant menu card", "Business visiting card", "Product brochure"]
      },
      {
        id: "video-editing",
        slug: "video-editing",
        name: "Video Editing",
        categorySlug: "business-digital-services",
        categoryName: "Business & Digital Services",
        description: "YouTube video editing, Instagram reels cutting, promotional ad videos, and color grading.",
        shortDesc: "Reels, YouTube video & promo ad editing",
        iconName: "Film",
        benefits: ["Engaging caption subtitles", "Dynamic sound effects & music", "4K Video rendering", "Fast delivery"],
        commonRequirements: ["Instagram Reels editing", "YouTube vlog editing", "Business advertisement video", "Event highlights edit"]
      },
      {
        id: "photography-digital",
        slug: "photography",
        name: "Photography",
        categorySlug: "business-digital-services",
        categoryName: "Business & Digital Services",
        description: "Commercial product photography, food menu photos, hotel room virtual photo tours, and shop photos.",
        shortDesc: "Product, food & hotel interior photography",
        iconName: "Camera",
        benefits: ["Professional lighting gear", "High-res images for Google Maps", "Food menu styling", "White background product shots"],
        commonRequirements: ["Hotel room photos for website", "Restaurant food menu shoot", "E-commerce product photo", "Storefront commercial shoot"]
      },
      {
        id: "printing",
        slug: "printing",
        name: "Printing",
        categorySlug: "business-digital-services",
        categoryName: "Business & Digital Services",
        description: "Flex banner printing, vinyl stickers, glow signboards, visiting cards, and letterheads.",
        shortDesc: "Flex banners, vinyl stickers & visiting cards",
        iconName: "Printer",
        benefits: ["High DPI solvent print quality", "Weather-resistant flex materials", "Bulk printing discounts", "Same-day printing"],
        commonRequirements: ["Shop front flex banner", "Visiting card 1000 pack", "Vinyl wall sticker", "Pamphlet printing"]
      },
      {
        id: "logo-design",
        slug: "logo-design",
        name: "Logo Design",
        categorySlug: "business-digital-services",
        categoryName: "Business & Digital Services",
        description: "Unique vector logo design, brand identity guidelines, icon design, and business stationery.",
        shortDesc: "Unique brand logo & vector icon design",
        iconName: "Compass",
        benefits: ["100% Original custom artwork", "Vector AI/EPS source files", "Copyright ownership transfer", "Multiple initial concepts"],
        commonRequirements: ["New business logo design", "Brand logo revamp", "App icon design", "Complete branding kit"]
      },
      {
        id: "seo",
        slug: "seo",
        name: "SEO",
        categorySlug: "business-digital-services",
        categoryName: "Business & Digital Services",
        description: "Search Engine Optimization to rank your website #1 on Google for Araku local searches.",
        shortDesc: "Google #1 ranking for Araku local searches",
        iconName: "Search",
        benefits: ["Local SEO keyword ranking", "Organic phone call leads", "Technical website audit", "Monthly rank reports"],
        commonRequirements: ["Rank website for 'Araku Hotels'", "Local SEO optimization", "Google search presence", "Backlink building"]
      },
      {
        id: "advertising",
        slug: "advertising",
        name: "Advertising",
        categorySlug: "business-digital-services",
        categoryName: "Business & Digital Services",
        description: "Auto rickshaw banner ads, local newspaper inserts, cinema slide ads, and outdoor hoardings in Araku.",
        shortDesc: "Auto ads, newspaper inserts & local hoardings",
        iconName: "Tv",
        benefits: ["Maximum local footfall reach", "High visibility hoardings", "Budget local media options", "Campaign execution proof"],
        commonRequirements: ["Auto hood banner campaign", "Local newspaper pamphlet insert", "Highway hoarding placement", "Local cable TV ad"]
      },
      {
        id: "computer-repair",
        slug: "computer-repair",
        name: "Computer Repair",
        categorySlug: "business-digital-services",
        categoryName: "Business & Digital Services",
        description: "Laptop desktop repair, SSD upgrade, Windows OS installation, virus removal, and motherboard fix.",
        shortDesc: "Laptop repair, SSD upgrade & OS install",
        iconName: "Monitor",
        benefits: ["Doorstep laptop service", "Original laptop displays/batteries", "Fast SSD speed upgrade", "Data recovery assurance"],
        commonRequirements: ["Slow laptop SSD upgrade", "Windows 11 re-installation", "Laptop screen replacement", "No display desktop fix"]
      },
      {
        id: "cctv-services",
        slug: "cctv-services",
        name: "CCTV Services",
        categorySlug: "business-digital-services",
        categoryName: "Business & Digital Services",
        description: "Commercial CCTV installation, IP camera networking, biometric attendance systems, and AMC service.",
        shortDesc: "IP Camera networks & biometric attendance",
        iconName: "Eye",
        benefits: ["High clarity 4MP IP cameras", "Fingerprint / Face attendance", "Remote multi-branch view", "Annual maintenance contract"],
        commonRequirements: ["Hotel IP camera installation", "Office biometric attendance", "Commercial CCTV repair AMC", "Long distance wireless bridge"]
      }
    ]
  },
  {
    id: "cat-10",
    slug: "education-training",
    name: "Education & Training",
    description: "Home tuitions, competitive coaching, computer skill courses and classes.",
    iconName: "GraduationCap",
    color: "text-cyan-600",
    bgColor: "bg-cyan-50 border-cyan-100",
    image: "/categories/education-training.jpg",
    services: [
      {
        id: "home-tuition",
        slug: "home-tuition",
        name: "Home Tuition",
        categorySlug: "education-training",
        categoryName: "Education & Training",
        description: "Experienced home tutors for Class 1 to 10, Intermediate MPC/BiPC, Maths, Physics, and English.",
        shortDesc: "One-on-one home tutors for school & Inter",
        iconName: "BookOpen",
        benefits: ["Personalized 1-on-1 attention", "Qualified local teachers", "Flexible evening timings", "Regular performance tests"],
        commonRequirements: ["Class 10 Maths & Science tutor", "Class 5 to 8 all subjects tutor", "Intermediate Physics home tutor", "Primary school teacher"]
      },
      {
        id: "online-tuition",
        slug: "online-tuition",
        name: "Online Tuition",
        categorySlug: "education-training",
        categoryName: "Education & Training",
        description: "Interactive Zoom / Google Meet online classes for CBSE, AP State Board, and competitive exams.",
        shortDesc: "Live Zoom classes for CBSE & AP State Board",
        iconName: "Laptop",
        benefits: ["Digital whiteboard teaching", "Recorded session access", "Study material PDF share", "Convenient home learning"],
        commonRequirements: ["Class 9 CBSE Maths online class", "English grammar online tutor", "Neet foundation online course", "Coding for kids"]
      },
      {
        id: "competitive-exam-coaching",
        slug: "competitive-exam-coaching",
        name: "Competitive Exam Coaching",
        categorySlug: "education-training",
        categoryName: "Education & Training",
        description: "Coaching for APPSC Group 1/2, Police Constable, AP DSC Teacher, Railway RRB, and SSC exams.",
        shortDesc: "APPSC, Police Constable, AP DSC & RRB coaching",
        iconName: "Target",
        benefits: ["Expert faculty guidance", "Mock online test series", "Detailed Andhra GK notes", "Doubt clearing sessions"],
        commonRequirements: ["AP DSC Teacher coaching", "AP Police Constable test batch", "APPSC Group 2 material", "RRB Railway exam preparation"]
      },
      {
        id: "computer-training",
        slug: "computer-training",
        name: "Computer Training",
        categorySlug: "education-training",
        categoryName: "Education & Training",
        description: "PDC, PGDCA, MS Office, Tally Prime with GST, Python, Web Design, and C++ courses with certification.",
        shortDesc: "MS Office, Tally GST, Python & PGDCA courses",
        iconName: "Monitor",
        benefits: ["100% Practical lab practice", "ISO certified diploma", "Job assistance guidance", "Flexible batch timings"],
        commonRequirements: ["Tally Prime GST course", "Basic computer & MS Office", "Python programming for beginners", "Graphic design course"]
      },
      {
        id: "spoken-english",
        slug: "spoken-english",
        name: "Spoken English",
        categorySlug: "education-training",
        categoryName: "Education & Training",
        description: "English fluency development, vocabulary building, public speaking, and interview preparation classes.",
        shortDesc: "Fluency building, public speaking & interview prep",
        iconName: "MessageSquare",
        benefits: ["Daily conversation practice", "Grammar foundation simplifying", "Hesitation removal drills", "Interview mock practice"],
        commonRequirements: ["30-Day Spoken English course", "Job interview preparation", "Student fluency class", "Public speaking confidence"]
      },
      {
        id: "skill-development",
        slug: "skill-development",
        name: "Skill Development",
        categorySlug: "education-training",
        categoryName: "Education & Training",
        description: "Vocational skills like tailoring, mobile phone repair, AC technician training, and electrician certification.",
        shortDesc: "Tailoring, mobile repair & AC technician training",
        iconName: "Cpu",
        benefits: ["Hands-on job oriented skill", "Tool kit guidance", "Self-employment roadmap", "Certification provided"],
        commonRequirements: ["Mobile hardware repair course", "Blouse tailoring class", "AC technician course", "Electrician practical course"]
      },
      {
        id: "professional-training",
        slug: "professional-training",
        name: "Professional Training",
        categorySlug: "education-training",
        categoryName: "Education & Training",
        description: "Digital marketing certification, data entry training, medical lab technician, and hotel management basics.",
        shortDesc: "Digital marketing, data entry & lab tech skills",
        iconName: "Briefcase",
        benefits: ["Industry expert trainers", "Live project experience", "Resume preparation", "Placement support"],
        commonRequirements: ["Digital marketing course", "Data entry operator course", "Hotel front desk training", "Basic accounting skill"]
      },
      {
        id: "music-classes",
        slug: "music-classes",
        name: "Music Classes",
        categorySlug: "education-training",
        categoryName: "Education & Training",
        description: "Vocal music, Guitar, Keyboard, Harmonium, and Classical Carnatic music lessons in Araku.",
        shortDesc: "Guitar, Keyboard & Carnatic vocal lessons",
        iconName: "Music",
        benefits: ["Individual instrument access", "Certified music tutors", "Stage performance opportunities", "Hobby & exam tracks"],
        commonRequirements: ["Acoustic Guitar classes", "Keyboard synth lessons", "Carnatic vocal music teacher", "Harmonium learning"]
      },
      {
        id: "dance-classes",
        slug: "dance-classes",
        name: "Dance Classes",
        categorySlug: "education-training",
        categoryName: "Education & Training",
        description: "Western hip-hop, Folk Dhimsa dance, Classical Kuchipudi, and wedding choreography classes.",
        shortDesc: "Western, Kuchipudi & wedding choreography",
        iconName: "User",
        benefits: ["Spacious dance studio", "Professional choreographers", "Annual dance showcase", "Fitness & fun workout"],
        commonRequirements: ["Wedding family sangeet choreography", "Kids western dance class", "Kuchipudi classical teacher", "Fitness Zumba dance"]
      },
      {
        id: "driving-schools",
        slug: "driving-schools",
        name: "Driving Schools",
        categorySlug: "education-training",
        categoryName: "Education & Training",
        description: "Four-wheeler car driving training with dual control, hill driving lessons, and RTO Learning/Permanent License assistance.",
        shortDesc: "Dual-control car driving & RTO license support",
        iconName: "Car",
        benefits: ["Dual-brake safety car", "Ghat & hill driving practice", "RTO License application help", "Doorstep pickup option"],
        commonRequirements: ["15-Day car driving course", "Hill road driving confidence", "RTO Learner's License test help", "Two-wheeler balance class"]
      }
    ]
  },
  {
    id: "cat-11",
    slug: "emergency-services",
    name: "Emergency Services",
    description: "Urgent assistance when you need help now.",
    iconName: "AlertTriangle",
    color: "text-red-600",
    bgColor: "bg-red-50 border-red-200 ring-2 ring-red-400/30",
    image: "/categories/emergency-services.jpg",
    isEmergency: true,
    badge: "Need Help Now?",
    services: [
      {
        id: "emergency-electrician",
        slug: "emergency-electrician",
        name: "Emergency Electrician",
        categorySlug: "emergency-services",
        categoryName: "Emergency Services",
        description: "24/7 Rapid response electrical short circuit fix, power failure fix, and burning wire emergency repair.",
        shortDesc: "24/7 Short circuit & burning wire emergency fix",
        iconName: "Zap",
        isEmergency: true,
        benefits: ["24/7 Immediate arrival", "Safe high voltage resolution", "MCB trip diagnosis", "Emergency night service"],
        commonRequirements: ["Total house power blackout", "Electrical burning smell", "Sparks from main switchboard", "MCB continuously tripping"]
      },
      {
        id: "emergency-plumber",
        slug: "emergency-plumber",
        name: "Emergency Plumber",
        categorySlug: "emergency-services",
        categoryName: "Emergency Services",
        description: "Urgent burst pipe repair, severe water overflow, main valve leakage, and clogged toilet unblocking.",
        shortDesc: "Burst pipe repair, overflow & severe leak fix",
        iconName: "Droplet",
        isEmergency: true,
        benefits: ["Quick arrival to stop flooding", "High pressure leak clamps", "Drain jetting", "24/7 Availability"],
        commonRequirements: ["Main water line pipe burst", "Overhead tank pipe broken", "Severe bathroom flooding", "Blocked main sewage line"]
      },
      {
        id: "roadside-assistance-emergency",
        slug: "roadside-assistance",
        name: "Roadside Assistance",
        categorySlug: "emergency-services",
        categoryName: "Emergency Services",
        description: "Night breakdown help, dead battery jumpstart, fuel delivery, and lockout help on Araku Ghats.",
        shortDesc: "Ghat road breakdown, dead battery & fuel delivery",
        iconName: "LifeBuoy",
        isEmergency: true,
        benefits: ["Fast response on Araku Ghat roads", "Emergency fuel top-up", "Battery jumpstart booster", "24/7 Dispatch"],
        commonRequirements: ["Vehicle stopped in Ghat section", "Dead battery late night", "Out of fuel in forest area", "Flat tire emergency"]
      },
      {
        id: "towing-emergency",
        slug: "towing",
        name: "Towing",
        categorySlug: "emergency-services",
        categoryName: "Emergency Services",
        description: "Immediate flatbed tow truck dispatch for accident or broken-down cars and bikes.",
        shortDesc: "Immediate flatbed towing for accidents & breakdowns",
        iconName: "Truck",
        isEmergency: true,
        benefits: ["Heavy hydraulic flatbed", "Damage-free vehicle loading", "Long distance intercity towing", "24/7 Call helpline"],
        commonRequirements: ["Accident car towing", "Engine seizure towing", "Ghat section vehicle recovery", "Highway transport"]
      },
      {
        id: "battery-assistance",
        slug: "battery-assistance",
        name: "Battery Assistance",
        categorySlug: "emergency-services",
        categoryName: "Emergency Services",
        description: "On-spot emergency battery jumpstart service for stranded cars and heavy vehicles.",
        shortDesc: "On-spot emergency car & bike jumpstart",
        iconName: "BatteryCharging",
        isEmergency: true,
        benefits: ["Heavy duty booster cables", "Voltage alternator test", "Fast arrival", "New battery replacement on spot"],
        commonRequirements: ["Car won't crank battery dead", "Left lights on overnight", "Bike battery dead start", "Commercial truck jumpstart"]
      },
      {
        id: "locksmith",
        slug: "locksmith",
        name: "Locksmith",
        categorySlug: "emergency-services",
        categoryName: "Emergency Services",
        description: "Emergency home door unlock, lost key duplication, car door lockout opening without damage.",
        shortDesc: "Home & car door lockout opening without damage",
        iconName: "Key",
        isEmergency: true,
        benefits: ["Damage-free lock opening", "Key duplication on spot", "24/7 Night dispatch", "High-security lock picks"],
        commonRequirements: ["Locked out of house key inside", "Car key locked inside boot", "Main door lock jammed", "Lost cupboard key"]
      },
      {
        id: "emergency-ac-repair",
        slug: "emergency-ac-repair",
        name: "Emergency AC Repair",
        categorySlug: "emergency-services",
        categoryName: "Emergency Services",
        description: "Emergency AC repair for commercial hotels, server rooms, and medical clinics during heatwaves.",
        shortDesc: "Urgent AC repair for hotels, clinics & server rooms",
        iconName: "Snowflake",
        isEmergency: true,
        benefits: ["Same-hour technician dispatch", "High priority for hotels/clinics", "Gas leak emergency fix", "24/7 Support"],
        commonRequirements: ["Hotel AC failure during full occupancy", "Clinic AC broken", "Server room cooling fail", "Total AC unit breakdown"]
      },
      {
        id: "emergency-home-repair",
        slug: "emergency-home-repair",
        name: "Emergency Home Repair",
        categorySlug: "emergency-services",
        categoryName: "Emergency Services",
        description: "Storm damage roof leak repair, broken glass replacement, and hazardous wall damage control.",
        shortDesc: "Storm damage roof leak & urgent structural fix",
        iconName: "ShieldAlert",
        isEmergency: true,
        benefits: ["Emergency tarpaulin sealing", "Hazard control", "Quick handyman team", "Storm response"],
        commonRequirements: ["Heavy rain roof leakage", "Broken window glass hazard", "Collapsing gate repair", "Storm damage handyman"]
      }
    ]
  },
  {
    id: "cat-12",
    slug: "business-services",
    name: "Business Services",
    description: "For shops, offices, hotels and commercial establishments.",
    iconName: "Briefcase",
    color: "text-slate-700",
    bgColor: "bg-slate-100 border-slate-200",
    image: "/categories/digital-tech.jpg",
    services: [
      {
        id: "office-cleaning",
        slug: "office-cleaning",
        name: "Office Cleaning",
        categorySlug: "business-services",
        categoryName: "Business Services",
        description: "Daily and weekly office cleaning, glass facade washing, desk sanitization, and floor scrubbing.",
        shortDesc: "Daily & weekly office cleaning & floor scrubbing",
        iconName: "Sparkles",
        benefits: ["Customized office timing", "Trained cleaning staff", "Commercial grade chemicals", "Deep floor polishing"],
        commonRequirements: ["Daily morning office sweep/mop", "Weekly glass partition clean", "Monthly deep floor scrubbing", "Restroom sanitization"]
      },
      {
        id: "cctv-business",
        slug: "cctv",
        name: "CCTV",
        categorySlug: "business-services",
        categoryName: "Business Services",
        description: "Commercial multi-camera CCTV system design, IP camera installation, and night-vision monitoring.",
        shortDesc: "Commercial IP CCTV & multi-branch surveillance",
        iconName: "Camera",
        benefits: ["High storage DVR/NVR", "Remote phone surveillance", "Motion detection alerts", "AMC maintenance"],
        commonRequirements: ["8-Camera shop setup", "Hotel lobby surveillance", "Warehouse CCTV network", "Annual CCTV maintenance"]
      },
      {
        id: "computer-repair-business",
        slug: "computer-repair",
        name: "Computer Repair",
        categorySlug: "business-services",
        categoryName: "Business Services",
        description: "Office IT support, computer networking, server maintenance, printer setup, and hardware repair.",
        shortDesc: "Office IT support, networking & server maintenance",
        iconName: "Monitor",
        benefits: ["On-call office IT engineer", "LAN network troubleshooting", "Data backup solutions", "Hardware AMC option"],
        commonRequirements: ["Office network down fix", "5-Desktop maintenance", "Shared printer setup", "Tally server setup"]
      },
      {
        id: "printer-repair",
        slug: "printer-repair",
        name: "Printer Repair",
        categorySlug: "business-services",
        categoryName: "Business Services",
        description: "LaserJet, InkTank, and POS thermal printer repair, toner cartridge refilling, and paper jam fix.",
        shortDesc: "LaserJet, InkTank & POS printer repair",
        iconName: "Printer",
        benefits: ["Doorstep cartridge refilling", "Original drum replacement", "POS billing printer fix", "All brand support"],
        commonRequirements: ["Toner cartridge refilling", "Printer paper jam error", "Fuser roller replacement", "Billing printer not printing"]
      },
      {
        id: "internet-setup",
        slug: "internet-setup",
        name: "Internet Setup",
        categorySlug: "business-services",
        categoryName: "Business Services",
        description: "Leased line internet configuration, multi-router mesh Wi-Fi for hotels, and structured office cabling.",
        shortDesc: "Commercial fiber mesh Wi-Fi & office cabling",
        iconName: "Wifi",
        benefits: ["High capacity load balancing", "Guest Wi-Fi portal setup", "Zero speed drop cabling", "Failover dual WAN"],
        commonRequirements: ["Hotel guest Wi-Fi coverage", "Office 20-node LAN cabling", "Dual internet router load balancer", "Wi-Fi access point install"]
      },
      {
        id: "electrical-work",
        slug: "electrical-work",
        name: "Electrical Work",
        categorySlug: "business-services",
        categoryName: "Business Services",
        description: "Commercial shop lighting design, generator changeover switch setup, and load balancing.",
        shortDesc: "Commercial shop lighting & generator switches",
        iconName: "Zap",
        benefits: ["Licensed commercial electricians", "Heavy load safety", "Generator automatic switch", "Minimal business disruption"],
        commonRequirements: ["Restaurant LED track light setup", "3-Phase generator changeover", "Shop main panel repair", "Signboard wiring"]
      },
      {
        id: "furniture",
        slug: "furniture",
        name: "Furniture",
        categorySlug: "business-services",
        categoryName: "Business Services",
        description: "Office workstations, executive chairs, reception desks, conference tables, and hotel room furniture.",
        shortDesc: "Office workstations, executive chairs & reception desks",
        iconName: "Briefcase",
        benefits: ["Ergonomic office seating", "Modular workstation layouts", "Durable commercial grade wood", "Bulk discount"],
        commonRequirements: ["10 Workstation setup", "Executive revolving chair", "Reception desk manufacture", "Conference hall table"]
      },
      {
        id: "sign-boards",
        slug: "sign-boards",
        name: "Sign Boards",
        categorySlug: "business-services",
        categoryName: "Business Services",
        description: "Non-lit flex signboards, ACP board fabrication, acrylic cut-out letter signboards for shops.",
        shortDesc: "ACP signboards & shop front flex boards",
        iconName: "Maximize",
        benefits: ["High-impact outdoor branding", "Durable weather-proof ACP sheet", "Vector logo accuracy", "Sturdy iron frame"],
        commonRequirements: ["Main market shop flex board", "ACP Sheet signboard", "Wayfinding directional signs", "Office door acrylic nameplate"]
      },
      {
        id: "led-boards",
        slug: "led-boards",
        name: "LED Boards",
        categorySlug: "business-services",
        categoryName: "Business Services",
        description: "3D LED letter signboards, neon light flex signs, scrolling text LED display boards for hotels and shops.",
        shortDesc: "3D LED illuminated letters & moving text displays",
        iconName: "Sparkles",
        benefits: ["Energy-efficient Samsung LEDs", "High night visibility", "Waterproof outdoor housing", "Programmable text display"],
        commonRequirements: ["3D Acrylic LED letter signboard", "Hotel illuminated entrance board", "Red scrolling LED text display", "Neon flex logo sign"]
      },
      {
        id: "printing-business",
        slug: "printing",
        name: "Printing",
        categorySlug: "business-services",
        categoryName: "Business Services",
        description: "Bulk bill books, letterheads, rubber stamps, ID cards, and promotional pamphlets for local businesses.",
        shortDesc: "Bill books, rubber stamps, ID cards & letterheads",
        iconName: "Printer",
        benefits: ["Carbonless duplicate bill books", "Self-inking rubber stamps", "PVC Laminated ID cards", "Fast printing"],
        commonRequirements: ["GST Bill book 10 books", "Self-inking company stamp", "Staff PVC ID cards", "Letterhead printing 1000"]
      },
      {
        id: "pest-control-business",
        slug: "pest-control",
        name: "Pest Control",
        categorySlug: "business-services",
        categoryName: "Business Services",
        description: "Commercial pest control for restaurants, hotels, kitchens, food godowns, and office spaces.",
        shortDesc: "Commercial kitchen, restaurant & hotel pest treatment",
        iconName: "Bug",
        benefits: ["Food safety compliant chemicals", "Odorless herbal treatment", "Monthly AMC service", "Audit compliance certificate"],
        commonRequirements: ["Restaurant kitchen cockroach control", "Hotel room bed bug treatment", "Food storage godown rodent bait", "Monthly pest AMC"]
      },
      {
        id: "security-services",
        slug: "security-services",
        name: "Security Services",
        categorySlug: "business-services",
        categoryName: "Business Services",
        description: "Uniformed security guards, event bouncers, ATM security, and night watchmen for hotels and commercial properties.",
        shortDesc: "Uniformed guards, night watchmen & event bouncers",
        iconName: "ShieldCheck",
        benefits: ["Trained & background-verified staff", "24/7 Shift rotation", "Polite visitor management", "Reliable night patrol"],
        commonRequirements: ["24/7 Hotel security guard", "Night watchman for construction site", "Event bouncers for concert", "Commercial complex guard"]
      }
    ]
  },
  {
    id: "cat-13",
    slug: "rta-services",
    name: "RTA Services",
    description: "Road Transport Authority assistance for Driving License, Vehicle RC, Fitness Certificate & Permits.",
    iconName: "FileText",
    color: "text-amber-600",
    bgColor: "bg-amber-50 border-amber-100",
    image: "/categories/rta-services.jpg",
    services: [
      {
        id: "driving-license-assistance",
        slug: "driving-license-assistance",
        name: "Driving License Assistance",
        categorySlug: "rta-services",
        categoryName: "RTA Services",
        description: "Assistance for Learner's License (LLR), Permanent Driving License slot booking, renewal, and DL address updates.",
        shortDesc: "LLR, Permanent DL slot booking & renewal",
        iconName: "FileText",
        benefits: ["Hassle-free document verification", "Fast online slot booking", "Guidance for driving test", "On-time DL delivery"],
        commonRequirements: ["Aadhaar card copy", "Age proof / Birth certificate", "Blood group certificate", "Passport size photos"]
      },
      {
        id: "vehicle-rc-transfer",
        slug: "vehicle-rc-transfer",
        name: "Vehicle RC & Ownership Transfer",
        categorySlug: "rta-services",
        categoryName: "RTA Services",
        description: "Vehicle registration certificate transfer, buyer-seller ownership change, and duplicate RC processing.",
        shortDesc: "Vehicle ownership transfer & duplicate RC",
        iconName: "Car",
        benefits: ["Legal ownership transfer", "Form 29/30 documentation", "Clearance certificate assistance", "Doorstep document pickup"],
        commonRequirements: ["Original RC book", "Insurance copy", "Valid PUC certificate", "Buyer & Seller Aadhaar"]
      },
      {
        id: "vehicle-fitness-certificate",
        slug: "vehicle-fitness-certificate",
        name: "Vehicle Fitness Certificate (FC)",
        categorySlug: "rta-services",
        categoryName: "RTA Services",
        description: "Fitness renewal for commercial auto-rickshaws, taxis, lorries, and private heavy vehicles.",
        shortDesc: "Commercial & heavy vehicle FC renewal",
        iconName: "ShieldCheck",
        benefits: ["Speedy inspection slotting", "Pre-inspection check guidance", "RTA agent assistance", "Full compliance check"],
        commonRequirements: ["Vehicle RC copy", "Road tax payment receipt", "Valid insurance policy", "Speed governor / reflective tape check"]
      },
      {
        id: "commercial-vehicle-permits",
        slug: "commercial-vehicle-permits",
        name: "Commercial Vehicle Permits",
        categorySlug: "rta-services",
        categoryName: "RTA Services",
        description: "State and National permits for goods carriers, passenger buses, taxis, and tourist cabs.",
        shortDesc: "State & National permit applications & renewals",
        iconName: "Navigation",
        benefits: ["All India Permit setup", "Tax payment assistance", "Inter-state border clearance info", "Permit renewal reminders"],
        commonRequirements: ["Valid RC & FC", "Commercial insurance", "Tax receipt", "Driver license copy"]
      }
    ]
  },
  {
    id: "cat-14",
    slug: "gst-income-tax",
    name: "GST & Income Tax",
    description: "Professional GST registration, monthly return filing, Income Tax Return (ITR), and tax advisory.",
    iconName: "Receipt",
    color: "text-emerald-700",
    bgColor: "bg-emerald-50 border-emerald-100",
    image: "/categories/rta-services.jpg",
    services: [
      {
        id: "gst-registration-filing",
        slug: "gst-registration-filing",
        name: "GST Registration & Return Filing",
        categorySlug: "gst-income-tax",
        categoryName: "GST & Income Tax",
        description: "New GST number registration for shopkeepers, contractors & businesses, GSTR-1 & GSTR-3B monthly filing.",
        shortDesc: "GST registration, GSTR-1 & GSTR-3B filing",
        iconName: "Receipt",
        benefits: ["Zero penalty timely filing", "Input tax credit (ITC) reconciliation", "CA certified filing", "Notice response guidance"],
        commonRequirements: ["PAN & Aadhaar of owner", "Rental agreement or electricity bill", "Bank passbook/cancelled cheque", "Business logo & details"]
      },
      {
        id: "income-tax-return-itr",
        slug: "income-tax-return-itr",
        name: "Income Tax Return (ITR) Filing",
        categorySlug: "gst-income-tax",
        categoryName: "GST & Income Tax",
        description: "ITR filing for salaried individuals, traders, contractors, farmers, and self-employed professionals.",
        shortDesc: "ITR-1 to ITR-4 filing for individuals & business",
        iconName: "Calculator",
        benefits: ["Maximum tax saving calculation", "Form 16 & Form 26AS matching", "Fast refund processing", "Qualified tax experts"],
        commonRequirements: ["PAN & Aadhaar", "Form 16 or salary slips", "Bank statements", "Investment proofs (80C, 80D)"]
      },
      {
        id: "business-tax-advisory",
        slug: "business-tax-advisory",
        name: "Business Tax Advisory & Audit",
        categorySlug: "gst-income-tax",
        categoryName: "GST & Income Tax",
        description: "Tax planning, balance sheet auditing, company incorporation, and municipal trade license assistance.",
        shortDesc: "Balance sheet audit, trade license & tax planning",
        iconName: "Briefcase",
        benefits: ["Expert Chartered Accountant advice", "Accurate balance sheet prep", "Compliance check", "Long-term tax optimization"],
        commonRequirements: ["Sales & purchase registers", "Bank account statements", "Previous year ITR", "Expense receipts"]
      }
    ]
  },
  {
    id: "cat-15",
    slug: "packers-movers",
    name: "Packers & Movers",
    description: "Reliable home shifting, office relocation, safe packing, loading, unloading, and intercity transport.",
    iconName: "Truck",
    color: "text-blue-700",
    bgColor: "bg-blue-50 border-blue-100",
    image: "/categories/vehicle-services.jpg",
    services: [
      {
        id: "home-shifting",
        slug: "home-shifting",
        name: "House Shifting & Relocation",
        categorySlug: "packers-movers",
        categoryName: "Packers & Movers",
        description: "Complete house packing, bubble wrap protection, heavy furniture dismantling, loading, transport, and setup.",
        shortDesc: "Complete home packing, transport & unloading",
        iconName: "Home",
        benefits: ["Zero damage guarantee", "Multi-layer bubble wrapping", "Trained loading labor", "Covered container trucks"],
        commonRequirements: ["2BHK / 3BHK household goods", "Electronics & fridge packaging", "Furniture disassembly", "Local or long distance destination"]
      },
      {
        id: "office-relocation",
        slug: "office-relocation",
        name: "Office & Shop Relocation",
        categorySlug: "packers-movers",
        categoryName: "Packers & Movers",
        description: "Commercial office furniture moving, computer network server packing, and safe store shifting.",
        shortDesc: "Office furniture, computers & store shifting",
        iconName: "Building",
        benefits: ["Minimal business downtime", "Weekend shifting availability", "IT equipment care", "Labeled box tracking"],
        commonRequirements: ["Office desks & chairs", "Computers & monitors", "Document file cabinets", "Signage & billing counters"]
      },
      {
        id: "intercity-goods-transport",
        slug: "intercity-goods-transport",
        name: "Intercity Goods Transport",
        categorySlug: "packers-movers",
        categoryName: "Packers & Movers",
        description: "Interdistrict and intercity transport for household luggage, commercial goods, and heavy boxes.",
        shortDesc: "Intercity truck logistics & luggage transport",
        iconName: "Truck",
        benefits: ["GPS tracked vehicles", "Direct door-to-door delivery", "Shared or dedicated truck choice", "Transit insurance option"],
        commonRequirements: ["Pickup location & pincode", "Drop destination", "Approximate weight/volume", "Preferred date"]
      }
    ]
  },
  {
    id: "cat-16",
    slug: "local-employment",
    name: "Local Employment",
    description: "Connecting local job seekers with employers, skilled workers, daily wagers, and staff recruitment.",
    iconName: "Users",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 border-indigo-100",
    image: "/categories/education-training.jpg",
    services: [
      {
        id: "local-job-listings",
        slug: "local-job-listings",
        name: "Local Job Placement & Openings",
        categorySlug: "local-employment",
        categoryName: "Local Employment",
        description: "Find jobs or hire staff in shops, hotels, resorts, offices, schools, and local businesses.",
        shortDesc: "Shops, hotel, office & resort job placement",
        iconName: "Briefcase",
        benefits: ["Verified local employers", "Direct phone connection", "Zero placement fees for candidates", "Immediate joining options"],
        commonRequirements: ["Updated resume / bio-data", "Qualification certificates", "Aadhaar card copy", "Work experience summary"]
      },
      {
        id: "skilled-labor-hiring",
        slug: "skilled-labor-hiring",
        name: "Skilled Labor Hiring",
        categorySlug: "local-employment",
        categoryName: "Local Employment",
        description: "Hire skilled masons, carpenters, welders, painters, electricians, and mechanics for project work.",
        shortDesc: "Contract masons, welders, painters & technicians",
        iconName: "HardHat",
        benefits: ["Experienced trade workers", "Daily or contract basis", "Reliable workforce", "Fast turnaround"],
        commonRequirements: ["Work location", "Project scope & duration", "Number of workers required", "Daily wage rate agreement"]
      },
      {
        id: "daily-wager-staffing",
        slug: "daily-wager-staffing",
        name: "Daily Wager & Construction Worker Hiring",
        categorySlug: "local-employment",
        categoryName: "Local Employment",
        description: "Supplying daily wage labor for earth moving, loading/unloading, farm work, and construction assistance.",
        shortDesc: "Daily wage labor for construction & agriculture",
        iconName: "Users",
        benefits: ["Bulk worker availability", "On-time arrival", "Hardworking local teams", "Transparent daily wages"],
        commonRequirements: ["Number of laborers", "Reporting time & site location", "Nature of manual work"]
      }
    ]
  },
  {
    id: "cat-17",
    slug: "borewells",
    name: "Borewells",
    description: "Professional borewell drilling, submersible pump installation, flushing, and deep cleaning.",
    iconName: "Drill",
    color: "text-cyan-700",
    bgColor: "bg-cyan-50 border-cyan-100",
    image: "/categories/construction.jpg",
    services: [
      {
        id: "borewell-drilling",
        slug: "borewell-drilling",
        name: "New Borewell Drilling",
        categorySlug: "borewells",
        categoryName: "Borewells",
        description: "Advanced hydraulic rig borewell drilling for agricultural fields, commercial resorts, and residential houses.",
        shortDesc: "Hydraulic rig borewell drilling up to 1000 ft",
        iconName: "Drill",
        benefits: ["High-power sensor geological survey", "Heavy casing pipe installation", "Fast drilling completion", "Competitive per-foot pricing"],
        commonRequirements: ["Site point identification", "Rig vehicle access road", "Water connection for drilling", "Depth requirement"]
      },
      {
        id: "submersible-pump-repair",
        slug: "submersible-pump-repair",
        name: "Submersible Pump Repair & Install",
        categorySlug: "borewells",
        categoryName: "Borewells",
        description: "Submersible pump lowering, motor rewinding, panel box troubleshooting, and cable replacement.",
        shortDesc: "Submersible pump motor rewinding & installation",
        iconName: "Wrench",
        benefits: ["Quick pump retrieval", "Quality copper rewinding", "Starter box repair", "Water flow testing"],
        commonRequirements: ["Borewell depth & HP details", "Current motor issue description", "Three-phase / single-phase power supply"]
      },
      {
        id: "borewell-flushing-cleaning",
        slug: "borewell-flushing-cleaning",
        name: "Borewell Flushing & Deep Cleaning",
        categorySlug: "borewells",
        categoryName: "Borewells",
        description: "High-pressure air compressor flushing to remove mud, silt, stones, and restore water yield.",
        shortDesc: "High pressure air compressor mud flushing",
        iconName: "Wind",
        benefits: ["Restores muddy water to clean flow", "Increases water yield", "Removes accumulated silt", "Prevents pump damage"],
        commonRequirements: ["Existing borewell depth", "Years since last cleaning", "Water mud level"]
      }
    ]
  },
  {
    id: "cat-18",
    slug: "construction-vehicle-rentals",
    name: "Construction Vehicle Rentals",
    description: "Masons, painters, welders, house plan & building material.",
    iconName: "HardHat",
    color: "text-amber-700",
    bgColor: "bg-amber-100 border-amber-200",
    image: "/categories/construction.jpg",
    badge: "HEAVY EQUIPMENT",
    services: [
      {
        id: "jcb",
        slug: "jcb",
        name: "JCB Rental",
        categorySlug: "construction-vehicle-rentals",
        categoryName: "Construction Vehicle Rentals",
        description: "JCB 3DX backhoe loader on hourly/daily rent for earth digging, land leveling, trenching, and foundation excavation.",
        shortDesc: "JCB 3DX Earth digger, land leveling & trenching",
        iconName: "HardHat",
        benefits: ["Experienced operator included", "Well-maintained diesel machines", "Hourly or project basis", "Prompt site arrival"],
        commonRequirements: ["Work site location", "Digging depth / leveling area", "Estimated operating hours"]
      },
      {
        id: "earth-work-machine",
        slug: "earth-work-machine",
        name: "Earth Work Machine & Excavator",
        categorySlug: "construction-vehicle-rentals",
        categoryName: "Construction Vehicle Rentals",
        description: "Heavy excavators (Hitachi / Poclain) for rock breaking, large hill cutting, pond digging, and site clearing.",
        shortDesc: "Heavy excavator & breaker for rock cutting",
        iconName: "HardHat",
        benefits: ["Heavy rock breaker attachment", "High bucket capacity", "Large excavation capability", "Dedicated site supervisor"],
        commonRequirements: ["Site terrain description", "Breaker requirement", "Work duration in days"]
      },
      {
        id: "tractor",
        slug: "tractor",
        name: "Tractor Rental",
        categorySlug: "construction-vehicle-rentals",
        categoryName: "Construction Vehicle Rentals",
        description: "Tractor with trailer for farm plowing, sand/mud transport, water tanker towing, and site clearance.",
        shortDesc: "Tractor with trailer for farm plowing & transport",
        iconName: "Tractor",
        benefits: ["Multiple attachments (rotavator, trailer)", "Rugged terrain capability", "Local experienced driver", "Affordable rates"],
        commonRequirements: ["Purpose (plowing, hauling sand, mud)", "Site location", "Number of trips / hours"]
      },
      {
        id: "tipper",
        slug: "tipper",
        name: "Tipper Truck Rental",
        categorySlug: "construction-vehicle-rentals",
        categoryName: "Construction Vehicle Rentals",
        description: "Heavy 6-wheel and 10-wheel tipper trucks for sand, gravel, stone metal, soil, and construction debris transport.",
        shortDesc: "Heavy tipper truck for sand, stone & soil transport",
        iconName: "Truck",
        benefits: ["Hydraulic quick dumping", "Large load capacity", "Fast trip turnarounds", "Reliable drivers"],
        commonRequirements: ["Material type (sand, metal, soil)", "Loading & dumping points", "Trip count requirement"]
      },
      {
        id: "vibrator",
        slug: "vibrator",
        name: "Vibrator Machine Rental",
        categorySlug: "construction-vehicle-rentals",
        categoryName: "Construction Vehicle Rentals",
        description: "Needle concrete vibrators and earth plate compactors for roof slab casting, pillar pouring, and floor compaction.",
        shortDesc: "Concrete needle vibrator & plate compactor",
        iconName: "Wrench",
        benefits: ["Petrol & electric vibrators", "Eliminates concrete air bubbles", "Smooth slab finish", "Daily rental"],
        commonRequirements: ["Needle size required", "Electric / Petrol engine preference", "Slab casting date"]
      },
      {
        id: "roller",
        slug: "roller",
        name: "Road Roller Rental",
        categorySlug: "construction-vehicle-rentals",
        categoryName: "Construction Vehicle Rentals",
        description: "Vibratory road roller and soil compactor for road work, building foundation rolling, and site leveling.",
        shortDesc: "8 to 12 Ton road roller & soil compactor",
        iconName: "HardHat",
        benefits: ["High compaction force", "Ideal for gravel & asphalt", "Experienced roller operator", "Daily / Weekly rent"],
        commonRequirements: ["Road length / site area", "Soil or gravel compaction", "Rental duration"]
      },
      {
        id: "crane",
        slug: "crane",
        name: "Crane Rental",
        categorySlug: "construction-vehicle-rentals",
        categoryName: "Construction Vehicle Rentals",
        description: "Hydraulic mobile crane and hydra crane for heavy iron beam lifting, machine unloading, and pillar erection.",
        shortDesc: "12 to 50 Ton Hydra & Mobile Crane lifting",
        iconName: "HardHat",
        benefits: ["Certified crane operators", "Heavy tonnage lifting", "Safety rigging equipment", "Precise placement"],
        commonRequirements: ["Weight of item to lift", "Height / boom reach needed", "Lifting site access"]
      },
      {
        id: "water-tanker",
        slug: "water-tanker",
        name: "Water Tanker Supply",
        categorySlug: "construction-vehicle-rentals",
        categoryName: "Construction Vehicle Rentals",
        description: "5000L to 12000L water tanker supply for construction curing, road work, borewell drilling, and commercial use.",
        shortDesc: "5,000L - 12,000L construction & bulk water supply",
        iconName: "Droplet",
        benefits: ["Prompt emergency delivery", "Clean water quality", "High pressure hose pipe", "Multiple tanker fleet"],
        commonRequirements: ["Delivery location", "Capacity required (5000L/10000L)", "Purpose (slab curing, event, commercial)"]
      }
    ]
  },
  {
    id: "cat-19",
    slug: "saloon-spa",
    name: "Event Services",
    description: "Marriage decors, DJ, photography & sound systems.",
    iconName: "Sparkles",
    color: "text-rose-600",
    bgColor: "bg-rose-50 border-rose-100",
    image: "/categories/event-services.jpg",
    services: [
      {
        id: "gents-hair-salon",
        slug: "gents-hair-salon",
        name: "Gents Salon & Haircut",
        categorySlug: "saloon-spa",
        categoryName: "Saloon & Spa",
        description: "Trendy men's haircuts, beard shaping, head massage, hair coloring, and skin cleansing facial.",
        shortDesc: "Haircut, beard styling, head massage & facial",
        iconName: "Scissors",
        benefits: ["Hygienic sanitized tools", "Experienced stylists", "Modern haircut trends", "Doorstep or parlour visit"],
        commonRequirements: ["Service desired (cut, beard, facial)", "Preferred timing", "Location preference"]
      },
      {
        id: "ladies-beauty-parlour",
        slug: "ladies-beauty-parlour",
        name: "Ladies Beauty Parlour & Facial",
        categorySlug: "saloon-spa",
        categoryName: "Saloon & Spa",
        description: "Threaded eyebrows, waxing, gold/diamond facial, pedicure, manicure, and hair straightening.",
        shortDesc: "Facials, waxing, threading, hair spa & manicure",
        iconName: "Sparkles",
        benefits: ["Branded beauty products", "Private & comfortable environment", "Certified beauticians", "Doorstep home service available"],
        commonRequirements: ["Facial type preference", "Home visit or parlour booking", "Event date if any"]
      },
      {
        id: "bridal-makeup-artist",
        slug: "bridal-makeup-artist",
        name: "Bridal & Event Makeup Artist",
        categorySlug: "saloon-spa",
        categoryName: "Saloon & Spa",
        description: "HD & Airbrush bridal makeup, saree draping, hair styling, mehendi design, and party makeup.",
        shortDesc: "HD Bridal makeup, saree draping & mehendi",
        iconName: "Sparkles",
        benefits: ["Trial session available", "Waterproof long-lasting HD makeup", "Premium cosmetic brands", "On-location wedding venue service"],
        commonRequirements: ["Wedding / Function date", "Venue location", "Number of family members needing makeup"]
      },
      {
        id: "spa-body-massage",
        slug: "spa-body-massage",
        name: "Spa & Full Body Massage",
        categorySlug: "saloon-spa",
        categoryName: "Saloon & Spa",
        description: "Relaxing full body oil massage, Ayurvedic pain-relief massage, steam bath, and stress relief spa.",
        shortDesc: "Aromatherapy, Ayurvedic body massage & spa",
        iconName: "Heart",
        benefits: ["Certified massage therapists", "Authentic herbal oils", "Pain & fatigue relief", "Peaceful ambience"],
        commonRequirements: ["Therapy duration (60/90 mins)", "Special focus area (back/feet pain)", "Slot booking"]
      }
    ]
  },
  {
    id: "cat-20",
    slug: "food-grocery-delivery",
    name: "Food & Catering",
    description: "Event catering, Tiffin services & food orders.",
    iconName: "ShoppingBag",
    color: "text-orange-600",
    bgColor: "bg-orange-50 border-orange-100",
    image: "/categories/food-catering.jpg",
    services: [
      {
        id: "local-grocery-delivery",
        slug: "local-grocery-delivery",
        name: "Home Grocery Delivery",
        categorySlug: "food-grocery-delivery",
        categoryName: "Food, Grocery & Parcel Delivery",
        description: "Order rice, pulses, spices, packaged snacks, milk, and home essentials delivered straight to your door.",
        shortDesc: "Daily provisions, packaged food & dairy delivery",
        iconName: "ShoppingBag",
        benefits: ["Fresh stock from trusted local stores", "Fast same-day delivery", "Bill receipt provided", "No minimum order requirement"],
        commonRequirements: ["Item list via WhatsApp text or photo", "Delivery address", "Preferred delivery time"]
      },
      {
        id: "restaurant-food-parcel",
        slug: "restaurant-food-parcel",
        name: "Restaurant Food Parcel Delivery",
        categorySlug: "food-grocery-delivery",
        categoryName: "Food, Grocery & Parcel Delivery",
        description: "Hot food delivery from your favorite local restaurants, biryani points, tiffin centers, and bakeries.",
        shortDesc: "Hot biryani, tiffins & restaurant meals delivery",
        iconName: "ShoppingBag",
        benefits: ["Insulated thermal bag transport", "Hygienic packing", "Fast delivery", "All top local eateries supported"],
        commonRequirements: ["Restaurant name & dishes", "Quantity", "Exact delivery address & landmark"]
      },
      {
        id: "parcel-courier-pickup",
        slug: "parcel-courier-pickup",
        name: "Express Local Parcel Pickup & Drop",
        categorySlug: "food-grocery-delivery",
        categoryName: "Food, Grocery & Parcel Delivery",
        description: "Pick up and drop off documents, keys, forgotten items, or small packages anywhere across town.",
        shortDesc: "Pickup & drop documents, keys & packages",
        iconName: "Package",
        benefits: ["Instant rider dispatch", "Live status updates", "Safe handling of items", "Low distance-based fare"],
        commonRequirements: ["Pickup point & contact person", "Drop location & receiver phone", "Package description"]
      }
    ]
  },
  {
    id: "cat-21",
    slug: "loans-financial-services",
    name: "Loans & Financial Services",
    description: "Quick loan assistance for Personal, Home, Vehicle, Business, Agriculture, Gold, Education & Loan Against Property.",
    iconName: "Landmark",
    color: "text-emerald-800",
    bgColor: "bg-emerald-50 border-emerald-100",
    image: "/categories/real-estate.jpg",
    badge: "INSTANT APPROVAL",
    services: [
      {
        id: "personal-loan",
        slug: "personal-loan",
        name: "Personal Loan Assistance",
        categorySlug: "loans-financial-services",
        categoryName: "Loans & Financial Services",
        description: "Instant collateral-free personal loans for salaried employees and self-employed professionals with minimal documentation.",
        shortDesc: "Collateral-free instant personal loans",
        iconName: "DollarSign",
        benefits: ["Fast loan processing", "Lowest interest rate options", "Flexible repayment tenure (1 to 5 yrs)", "No hidden charges"],
        commonRequirements: ["Aadhaar & PAN card", "Last 6 months bank statement", "Salary slip / ITR copy", "Proof of address"]
      },
      {
        id: "home-loan",
        slug: "home-loan",
        name: "Home Loan & Housing Finance",
        categorySlug: "loans-financial-services",
        categoryName: "Loans & Financial Services",
        description: "Low-interest housing loans for house construction, flat purchase, plot purchase, and home expansion.",
        shortDesc: "House construction, flat & plot purchase loan",
        iconName: "Home",
        benefits: ["Up to 90% property funding", "PMAY subsidy assistance", "Long tenure up to 30 years", "Balance transfer facility"],
        commonRequirements: ["Property link documents / sale deed", "Approved house plan", "Income proof / Bank statement", "KYC documents"]
      },
      {
        id: "vehicle-auto-loan",
        slug: "vehicle-auto-loan",
        name: "Vehicle / Auto / Two-Wheeler Loan",
        categorySlug: "loans-financial-services",
        categoryName: "Loans & Financial Services",
        description: "New and used bike, car, auto-rickshaw, tractor, and commercial vehicle finance at attractive EMIs.",
        shortDesc: "Two-wheeler, car & tractor vehicle financing",
        iconName: "Car",
        benefits: ["On-road price funding", "Instant spot approval", "Low down payment", "Minimal paperwork"],
        commonRequirements: ["Vehicle quotation / RC", "Income proof", "Identity & address proof", "Bank passbook"]
      },
      {
        id: "business-msme-loan",
        slug: "business-msme-loan",
        name: "Business Loan & MSME Support",
        categorySlug: "loans-financial-services",
        categoryName: "Loans & Financial Services",
        description: "Working capital loans, Mudra loans, machinery purchase loans, and MSME business growth finance.",
        shortDesc: "Mudra loans, working capital & shop business loan",
        iconName: "Briefcase",
        benefits: ["Govt scheme Mudra loan guidance", "Without collateral options available", "High loan amount limit", "Flexible EMI"],
        commonRequirements: ["Business trade license / GST", "Bank statement 1 year", "ITR / Turnover proof", "Owner KYC"]
      },
      {
        id: "agriculture-farmer-loan",
        slug: "agriculture-farmer-loan",
        name: "Agriculture & Farmer Kisan Loan",
        categorySlug: "loans-financial-services",
        categoryName: "Loans & Financial Services",
        description: "Kisan Credit Card (KCC) assistance, crop loans, borewell finance, and farm equipment loans for farmers.",
        shortDesc: "Kisan Credit Card (KCC), crop & farm loans",
        iconName: "Landmark",
        benefits: ["Low interest rates for farmers", "Government subsidy benefits", "Crop harvest aligned repayment", "Simple land document processing"],
        commonRequirements: ["Pattadar passbook / 1B document", "Aadhaar card", "VRO certification", "Bank account details"]
      },
      {
        id: "gold-loan",
        slug: "gold-loan",
        name: "Instant Gold Loan Assistance",
        categorySlug: "loans-financial-services",
        categoryName: "Loans & Financial Services",
        description: "Instant cash against gold ornaments with maximum per-gram valuation and low monthly interest rates.",
        shortDesc: "Instant cash against gold ornaments at high value",
        iconName: "DollarSign",
        benefits: ["Same-day cash in bank", "Maximum per gram rate", "Safe bank vault storage", "Easy monthly interest repayment"],
        commonRequirements: ["Gold ornaments / jewelry", "Aadhaar card", "PAN card", "Active bank account"]
      },
      {
        id: "education-loan",
        slug: "education-loan",
        name: "Higher Education Student Loan",
        categorySlug: "loans-financial-services",
        categoryName: "Loans & Financial Services",
        description: "Financial assistance for college degrees, engineering, medical studies, and overseas education.",
        shortDesc: "College, B.Tech, Medical & overseas education loan",
        iconName: "GraduationCap",
        benefits: ["Covers college tuition fee & hostel", "Moratorium period (pay after job)", "Tax benefit under Sec 80E", "Co-applicant support"],
        commonRequirements: ["Admission offer letter", "Fee structure breakdown", "10th, 12th, Degree marks sheets", "Parents income proof"]
      },
      {
        id: "loan-against-property",
        slug: "loan-against-property",
        name: "Loan Against Property (LAP)",
        categorySlug: "loans-financial-services",
        categoryName: "Loans & Financial Services",
        description: "High-value mortgage loan against residential house, commercial building, or open plot property.",
        shortDesc: "Mortgage loan against house, building or land plot",
        iconName: "Building",
        benefits: ["High loan amounts", "Lower interest rate than personal loans", "Long repayment tenure up to 15 years", "Retain property ownership"],
        commonRequirements: ["Original property title deeds", "EC (Encumbrance Certificate)", "Approved building plan", "Income proof"]
      }
    ]
  },
  {
    id: "cat-22",
    slug: "legal-advisor-services",
    name: "Legal Advisor & Legal Services",
    description: "Professional legal consultation, property deed registration, land title verification, and court case advocacy.",
    iconName: "Scale",
    color: "text-purple-700",
    bgColor: "bg-purple-50 border-purple-100",
    image: "/categories/rta-services.jpg",
    badge: "CERTIFIED ADVOCATES",
    services: [
      {
        id: "legal-consultation",
        slug: "legal-consultation",
        name: "Legal Advisory & Advocate Consultation",
        categorySlug: "legal-advisor-services",
        categoryName: "Legal Advisor & Legal Services",
        description: "Expert legal guidance from experienced advocates for civil disputes, criminal defense, property rights, and family law.",
        shortDesc: "Expert advocate advice for civil, property & family disputes",
        iconName: "Scale",
        benefits: ["Confidential & professional advice", "Clear legal opinion", "Court procedural guidance", "Experienced senior advocates"],
        commonRequirements: ["Case background summary", "Relevant documents/notices", "Appointment scheduling"]
      },
      {
        id: "property-registration-deeds",
        slug: "property-registration-deeds",
        name: "Property Registration & Sale Deed Drafting",
        categorySlug: "legal-advisor-services",
        categoryName: "Legal Advisor & Legal Services",
        description: "Drafting of Sale Deeds, Gift Deeds, Lease Agreements, Partition Deeds, and Sub-Registrar office representation.",
        shortDesc: "Sale deed, gift deed & sub-registrar office registration",
        iconName: "FileText",
        benefits: ["Flawless legal drafting", "Stamp duty & registration fee calculation", "Sub-Registrar slot booking", "Zero land dispute drafting"],
        commonRequirements: ["Parent property title deeds", "Buyer & Seller Aadhaar/PAN", "Market value assessment", "EC certificate"]
      },
      {
        id: "land-title-verification",
        slug: "land-title-verification",
        name: "Land & House Property Title Verification",
        categorySlug: "legal-advisor-services",
        categoryName: "Legal Advisor & Legal Services",
        description: "30-year Encumbrance (EC) checking, revenue record searching, link document scrutiny, and legal search opinion report.",
        shortDesc: "30-Year property link document legal search report",
        iconName: "ShieldCheck",
        benefits: ["Prevents buying disputed land", "Thorough revenue office search", "Written advocate opinion certificate", "100% peace of mind"],
        commonRequirements: ["Property survey number / door number", "Copy of main title deed", "30-year EC search copy"]
      },
      {
        id: "court-litigation-support",
        slug: "court-litigation-support",
        name: "Court Case & Litigation Assistance",
        categorySlug: "legal-advisor-services",
        categoryName: "Legal Advisor & Legal Services",
        description: "Representation in District Courts, High Court, Consumer Forum, and Revenue Divisional Officer (RDO) courts.",
        shortDesc: "District Court, Consumer Forum & RDO court representation",
        iconName: "Scale",
        benefits: ["Dedicated courtroom representation", "Timely petition filing", "Strong evidence prep", "Injunction order support"],
        commonRequirements: ["Court summons / notice copy", "Case history", "Vakalatnama signing"]
      },
      {
        id: "agreement-affidavit-drafting",
        slug: "agreement-affidavit-drafting",
        name: "Agreement, Affidavit & Power of Attorney Drafting",
        categorySlug: "legal-advisor-services",
        categoryName: "Legal Advisor & Legal Services",
        description: "Notary public attestation, General Power of Attorney (GPA), name change affidavits, rental agreements, and business MoUs.",
        shortDesc: "Rent agreement, Notary affidavits, GPA & MoU drafting",
        iconName: "FileText",
        benefits: ["Stamp paper printing", "Notary seal attestation", "Legally binding clauses", "Same-day document delivery"],
        commonRequirements: ["Party identity details", "Agreement terms & conditions", "Stamp paper value selection"]
      }
    ]
  }
];

// Helper functions for easy lookup
export function getAllServices(): ServiceItem[] {
  const all: ServiceItem[] = [];
  CATEGORIES.forEach(cat => {
    all.push(...cat.services);
  });
  return all;
}

export function getCategoryBySlug(slug: string): CategoryItem | undefined {
  return CATEGORIES.find(c => c.slug.toLowerCase() === slug.toLowerCase());
}

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  const all = getAllServices();
  return all.find(s => s.slug.toLowerCase() === slug.toLowerCase());
}
