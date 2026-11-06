// Central content for the Magnitude Transformers website.
// Source: https://www.webscafe.in/magnitudetransformer/

export const IMG = (name) => `/assets/img/mt/${name}`

export const company = {
    name: "Magnitude Transformers",
    tagline: "Power of Empowering",
    phone: "+91 99860 74458",
    phoneHref: "tel:+919986074458",
    helpline: "+91 81478 49515",
    helplineHref: "tel:+918147849515",
    office: "080 4122 7804",
    officeHref: "tel:+918041227804",
    email: "magnitudetransformer@gmail.com",
    emailHref: "mailto:magnitudetransformer@gmail.com",
    whatsappHref: "https://wa.me/919986074458",
    address: "#480 B/2, IV Phase, Peenya Industrial Area, Bangalore - 560058",
    mapHref: "https://www.google.com/maps/search/?api=1&query=Peenya+Industrial+Area+Bangalore+560058",
    mapEmbed: "https://www.google.com/maps?q=Peenya+Industrial+Area+Phase+4+Bangalore+560058&output=embed",
    hours: "Mon – Sat: 9:30 AM – 6:30 PM",
    logo: IMG("magnitude-official-logo.png"),
    logoWhite: IMG("magnitude-official-logo-white.png"),
    footerText: "ISO certified manufacturer of ISI-licensed, BEE star-rated power and distribution transformers, approved under BIS standards for utilities, industries and multi-storey buildings.",
}

export const products = [
    {
        slug: "oil-filled-distribution-transformer",
        menu: "Oil Filled Distribution Transformer",
        short: "Oil Filled Distribution",
        icon: "fa-oil-can",
        cardText: "Three-phase, oil-immersed transformers up to 5000 kVA for reliable power distribution.",
        hero: IMG("mt-transformer-station.jpg"),
        title: "Oil Filled Distribution Transformer",
        quick: [["Capacity", "Up to 5000 kVA"], ["Voltage Class", "11 kV"], ["Phase", "3-Phase, 50 Hz"]],
        intro: [
            "Oil type transformers are mostly used in electrical substations and power distribution. Their windings and magnetic circuits are immersed in oil, which provides both insulation and cooling for reliable, long-life operation.",
            "ISI licensed, BEE star rated and BIS approved, our transformers are built in an ISO certified facility and are cost-effective without compromising on performance.",
        ],
        specs: [["Capacity", "Up to 5000 kVA"], ["Phases", "3 Phase"], ["Frequency", "50 Hz"], ["Voltage Range", "11 kV"], ["Tapping", "+5% to -5% on HV side in steps of 2.5%"]],
        features: [
            ["fa-network-wired", "Distribution Networks", "Dependable step-down power for utility and private distribution networks."],
            ["fa-industry", "Small-Scale Industry", "Stable supply for manufacturing units, workshops and industrial estates."],
            ["fa-leaf", "Renewable Energy", "Grid connection for renewable energy generation projects."],
        ],
        listTitle: "Optional Features",
        lists: [{
            title: null, items: [
                "Designed for outdoor or indoor installation and all environmental conditions",
                "Sharp exterior points removed to prevent injury",
                "Stainless steel (grade 316 / 304) bolts, nuts, washers, studs and lifting lugs",
                "Suitable for loading as per AS 2374",
                "Not pressurised, contains no gases other than air",
                "Surfaces designed to prevent water collection",
            ]
        }],
        features2: [
            ["fa-cloud-sun-rain", "Indoor / Outdoor", "Engineered to withstand all environmental conditions."],
            ["fa-shield-halved", "IP 23 to IP 33", "Enclosure rating to suit your site requirement."],
            ["fa-screwdriver-wrench", "Stainless Hardware", "Corrosion-proof SS 316 / 304 fasteners and lugs."],
        ],
        gallery: ["mt-transformer-station.jpg", "mt-twin-transformers.jpg", "mt-hero-transformer.jpg", "mt-substation.jpg"],
    },
    {
        slug: "dry-type-transformers",
        menu: "Dry Type Transformers",
        short: "Dry Type Transformers",
        icon: "fa-fire-extinguisher",
        cardText: "Fire-resistant, low-maintenance units from 63 kVA to 2000 kVA built to international standards.",
        hero: IMG("mt-industrial-machine.jpg"),
        title: "Dry Type Transformers",
        quick: [["Range", "63 – 2000 kVA"], ["Voltage Class", "11000 V / 433 V"], ["Cooling", "Air Cooled"]],
        intro: [
            "Our dry type transformers are used across industries for their durability, corrosion resistance and high tolerance, and can be built to client requirements and international standards.",
            "Their fire-resistant, self-quenching design allows installation close to the load centre, and low maintenance makes them ideal for hotels, complexes and multi-storey buildings.",
        ],
        specs: [["Product Range", "63 kVA to 2000 kVA, with or without OLTC"], ["Voltage Class", "11000 V / 433 V"], ["Cooling", "Air cooled"], ["Frequency", "50 Hz"], ["Vector Group", "As per customer requirement"]],
        features: [
            ["fa-fire-flame-curved", "Fire Resistant", "Self-quenching design that is safe for indoor installations."],
            ["fa-building", "Low Maintenance", "No oil handling, ideal for commercial and residential buildings."],
            ["fa-location-crosshairs", "Near Load Centre", "Install close to the load to reduce cable losses."],
        ],
        listTitle: "Optional & Basic Features",
        lists: [
            {
                title: "Optional (SLV-4890)", items: [
                    "Off-circuit link board",
                    "On-load tap changer with drive mechanism and remote tap changing cubicle",
                    "ANAN and ANAF cooling types",
                    "Special paint treatments",
                    "Digital winding temperature scanner with alarm and trip contacts",
                ]
            },
            {
                title: "Basic (SLV-4908)", items: [
                    "Steel welded enclosure on skid-mounted base",
                    "Tap link board",
                    "Free air breathing with cooling mesh and louvers",
                    "HV and LV cable boxes with steel or aluminium gland plates",
                ]
            },
        ],
        features2: [
            ["fa-satellite-dish", "SCADA Compatible", "Remote health monitoring for smart facilities."],
            ["fa-temperature-high", "Class F & H", "High temperature insulation classes available."],
            ["fa-shield-halved", "IP 23 to IP 33", "Enclosures matched to your installation needs."],
        ],
        gallery: ["mt-industrial-machine.jpg", "mt-control-panel.jpg", "mt-switchgear.jpg", "mt-factory-hall.jpg"],
    },
    {
        slug: "solar-duty-transformers",
        menu: "Solar Duty Transformers",
        short: "Solar Duty Transformers",
        icon: "fa-solar-panel",
        cardText: "Medium-voltage transformers up to 20 MVA designed for solar power plants and inverters.",
        hero: IMG("mt-solar-field.jpg"),
        title: "Solar Duty Transformers",
        quick: [["Rating", "Up to 20 MVA"], ["Voltage Class", "Up to 33 kV"], ["Inverters", "Up to 6"]],
        intro: [
            "As one of the industry's emerging manufacturers, we supply a wide range of solar power transformers suited to medium voltage applications, from 2500 kVA units up to 20 MVA.",
            "Solar generation is one of the fastest-growing renewable energy sources, and our transformers are designed to handle inverter-fed loads reliably.",
        ],
        specs: [["Rating", "Up to 20 MVA"], ["Voltage Class", "Up to 33 kV"], ["No. of Inverters", "Up to 6 inverters"], ["Frequency", "50 / 60 Hz"], ["Vector Group", "As required"], ["Winding Material", "Cu / Al"]],
        features: [
            ["fa-seedling", "Clean Energy", "Reduced dependence on fossil fuels for power generation."],
            ["fa-earth-asia", "Lower Impact", "Limited environmental impact compared to other forms of electricity production."],
            ["fa-sun", "Peak Matching", "Peak time output matched with peak time demand, such as summer."],
        ],
        listTitle: "Optional Features",
        lists: [{ title: null, items: ["Resistance to corrosion", "High tensile strength", "Sturdy construction", "Model number: SLV-4908"] }],
        features2: [
            ["fa-shield-virus", "Corrosion Resistant", "Built for long life in open solar fields."],
            ["fa-dumbbell", "High Tensile Strength", "Robust mechanical design for demanding sites."],
            ["fa-cubes", "Modular & Scalable", "Supports modular plant expansion."],
        ],
        gallery: ["mt-solar-field.jpg", "mt-solar-farm.jpg", "mt-substation.jpg", "mt-hv-structure.jpg"],
    },
    {
        slug: "custom-designed-transformer",
        menu: "Custom Designed Transformer",
        short: "Custom Designed",
        icon: "fa-pen-ruler",
        cardText: "Furnace duty, rectifier duty, isolation and special transformers built to your specification.",
        hero: IMG("mt-electrical-equipment.jpg"),
        title: "Custom Designed Transformer",
        quick: [["Core", "Core-type"], ["Size", "Customizable"], ["Cooling", "Dry Type, Air Cooled"]],
        intro: [
            "We offer a wide variety of transformers for different industries, including power transmission, three-phase and voltage converter transformers, and build customised units to your exact requirements.",
            "Our design engineers use advanced engineering software to develop special transformers for complex applications.",
        ],
        specs: [["Core", "Core-type"], ["Size", "Customizable"], ["Usage", "Transportation & industrial"], ["Cooling", "Dry type, air cooled"]],
        features: [
            ["fa-fire", "Furnace Duty", "Feed electric furnaces that melt and refine materials, delivering high secondary current and wide voltage regulation."],
            ["fa-wave-square", "Rectifier Duty", "Step high voltage down to a lower level for AC to DC conversion in rectifiers."],
            ["fa-plug-circle-xmark", "Isolation", "Separate equipment from the power line ground, eliminating ground loops and suppressing high frequency noise."],
        ],
        listTitle: "Built Around Your Application",
        listText: "Tell us your load profile, voltage and site constraints. We design, manufacture and test special-purpose transformers that fit your process precisely.",
        lists: [],
        features2: [
            ["fa-tower-broadcast", "Power Transmission", "Units engineered for efficient power transfer."],
            ["fa-diagram-project", "Three-Phase", "Balanced three-phase designs for industrial loads."],
            ["fa-right-left", "Voltage Converter", "Step-up and step-down converters to your spec."],
        ],
        gallery: ["mt-electrical-equipment.jpg", "mt-welding.jpg", "mt-precision-measure.jpg", "mt-factory-machines.jpg"],
    },
]

export const nav = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Products", href: null, children: products.map(p => ({ label: p.menu, href: `/${p.slug}`, icon: p.icon, text: p.cardText })) },
    { label: "Services", href: "/services" },
    { label: "Careers", href: "/careers" },
    { label: "Clientele", href: "/clientele" },
    { label: "Gallery", href: "/gallery", children: [
        { label: "Photo Gallery", href: "/gallery", icon: "fa-images", text: "Manufacturing, testing & installations." },
        { label: "Video Gallery", href: "/video-gallery", icon: "fa-circle-play", text: "A closer look at Magnitude." },
    ] },
    { label: "Contact Us", href: "/contact-us" },
]

export const quickLinks = [
    ["Home", "/"], ["About Us", "/about-us"], ["Services", "/services"], ["Careers", "/careers"],
    ["Clientele", "/clientele"], ["Gallery", "/gallery"], ["Contact Us", "/contact-us"],
]

export const heroFeatures = [
    ["fa-bolt", "Highly Stable Transformers", "Robust designs with assured performance and long service life across utilities, industries and power projects."],
    ["fa-hand-sparkles", "Handcrafted to Perfection", "Every unit is built by skilled technicians and inspected at each stage, from raw material to final testing."],
    ["fa-microchip", "Unparalleled Technical Expertise", "In-house design engineers and a dedicated service team support you before, during and after installation."],
]

export const services = [
    ["fa-screwdriver-wrench", "Services & Repairs", "Transformers are built for long lifespans, but factory paint wears out early. We repair and repaint to restore protection and extend service life."],
    ["fa-calendar-check", "Annual Maintenance", "A dedicated maintenance team for small and medium enterprises, offering time-bound service at short notice to minimise downtime."],
    ["fa-truck-ramp-box", "Transformer Rentals", "A reliable rental fleet of power distribution equipment in Bangalore for temporary power needs, testing and plant failure situations."],
    ["fa-file-signature", "Transformer AMC Services", "Annual maintenance contracts carried out by agile personnel according to each client's requirements and schedule."],
    ["fa-gauge-high", "Testing & Calibration", "Routine and special testing, calibration and trading of lab and testing equipment to keep your assets compliant."],
    ["fa-filter", "Oil Filtration & Commissioning", "Transformer oil filtration, commissioning support and dry type transformer maintenance guidance on site."],
]

export const productRange = [
    { tag: "Distribution · Oil Cooled", title: "Up to 5 MVA", img: "mt-twin-transformers.jpg", items: ["Rating: 25 – 5000 kVA", "Voltage class: 11 kV", "3-phase, 50 Hz, OCTC / OLTC", "BEE star rated options"] },
    { tag: "Power · Oil Cooled", title: "Up to 8 MVA", img: "mt-hero-transformer.jpg", featured: true, items: ["Rating: 3000 – 8000 kVA", "Voltage class: 66 kV", "Heat run tested in-house", "Cu / Al windings"] },
    { tag: "Distribution · Dry Type", title: "Up to 3 MVA", img: "mt-industrial-machine.jpg", items: ["Rating: 50 – 3000 kVA", "Voltage class: 11 kV", "Air cooled, Class F & H insulation", "Ideal for buildings & hotels"] },
]

// Numbers from the live Clientele page text; "Years" derived from founding year 2007.
export const stats = [
    { value: 1250, suffix: "+", label: "Happy Clients" },
    { value: 1585, suffix: "+", label: "Projects Delivered" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
    { value: new Date().getFullYear() - 2007, suffix: "+", label: "Years of Excellence" },
]

export const team = [
    { tag: "Design", title: "Design Engineers", img: "positive-electrician-repairing-wires-in-flat-XUD8FWE.jpg" },
    { tag: "Quality", title: "Quality Inspectors", img: "electrician-holding-clipboard-and-smiling-by-elect-JZP244K.jpg" },
    { tag: "Production", title: "Skilled Technicians", img: "portrait-of-a-builder-in-uniform-on-the-roof-5ARKWLR.jpg" },
]

export const faqs = [
    ["What range of transformers do you manufacture?", "We design and manufacture transformers from 25 kVA up to 5 MVA, including oil filled distribution, dry type, solar duty, furnace and custom-designed special transformers, with power transformers up to 8000 kVA in the 66 kV class."],
    ["Are your transformers certified?", "Yes. Magnitude is an ISO certified company. Our transformers are ISI marked, BIS approved and star rated by the Bureau of Energy Efficiency (BEE), and are designed to IS, IEC and other international standards."],
    ["Can you build a transformer to our specific requirements?", "Absolutely. Our design engineers use advanced engineering software to create custom designs for furnace duty, rectifier duty, isolation and other special applications."],
    ["Do you offer maintenance and repair services?", "We provide repairs and repainting, time-bound annual maintenance contracts (AMC), commissioning support, oil filtration, testing and calibration."],
    ["Do you rent transformers?", "Yes. We maintain a rental fleet of power distribution equipment in Bangalore for temporary power needs, testing and plant failure situations."],
]

export const galleryAll = [
    ["mt-twin-transformers.jpg", "Twin transformers"],
    ["mt-transformer-station.jpg", "Transformer station"],
    ["mt-factory-hall.jpg", "Factory hall"],
    ["mt-panel-testing.jpg", "Panel testing"],
    ["mt-substation.jpg", "Substation"],
    ["mt-welding.jpg", "Tank welding"],
    ["mt-insulators.jpg", "Insulators"],
    ["mt-precision-measure.jpg", "Precision measurement"],
    ["mt-solar-farm.jpg", "Solar farm"],
    ["mt-control-panel.jpg", "Control panel"],
    ["mt-hero-transformer.jpg", "Power transformer"],
    ["mt-factory-machines.jpg", "Factory machines"],
]

export const galleryHome = galleryAll.filter(([f]) =>
    ["mt-twin-transformers.jpg", "mt-factory-hall.jpg", "mt-substation.jpg", "mt-panel-testing.jpg", "mt-insulators.jpg", "mt-solar-farm.jpg"].includes(f))

export const standards = ["ISO 9001:2015", "ISI Marked", "BEE Star Rated", "BIS Approved", "IEC", "IS", "CBIP", "REC", "BS", "NEMA", "ANSI"]

export const industries = [
    ["fa-tower-cell", "Power Utilities", "Distribution transformers for state electricity boards and utility networks."],
    ["fa-industry", "Industrial Plants", "Reliable power for manufacturing, process industries and workshops."],
    ["fa-building", "Multi-Storey Buildings", "Dry type and oil filled units for residential and commercial towers."],
    ["fa-hotel", "Hotels & Complexes", "Low-maintenance, fire-safe dry type transformers near the load centre."],
    ["fa-solar-panel", "Solar & Renewable", "Solar duty transformers up to 20 MVA for renewable power plants."],
    ["fa-helmet-safety", "Infrastructure Projects", "Turnkey supply, installation and commissioning for EPC contractors."],
]

export const jobs = [
    ["fa-bullhorn", "Marketing Professionals", "Passionate about sales and building long-term relationships with utilities and industrial clients."],
    ["fa-clipboard-check", "QA & Production Engineer", "Oversee manufacturing, inspection and testing to deliver transformers that meet every standard."],
    ["fa-fire-burner", "Welders & Helpers", "Skilled hands for tank fabrication, assembly and finishing on our production floor."],
    ["fa-user-tie", "Office Admin Assistant", "Keep our office running smoothly with coordination, documentation and front desk support."],
    ["fa-calculator", "Accountants", "Manage accounts, billing and compliance for a fast-growing manufacturing business."],
    ["fa-paper-plane", "Don't see your role?", "We are always happy to hear from talented people. Send us your resume anyway."],
]

// Add YouTube video IDs here to populate the Video Gallery, e.g. { id: "dQw4w9WgXcQ", title: "Factory drone tour" }
export const videos = []

export const quoteFields = {
    transformerType: ["Oil Filled Transformer", "Dry Type Transformer"],
    winding: ["Aluminium", "Copper"],
    tapChanger: ["Off Circuit Tap Changer", "On Load Tap Changer", "No Tap Changer"],
    primaryVoltage: ["3.3 KV", "6.6 KV", "11 KV", "33 KV", "Others (specify in message)"],
    secondaryVoltage: ["240 V", "415 V", "433 V", "3.3 KV", "6.6 KV", "Others (specify in message)"],
    starRating: ["Star 1 (old 4 star)", "Star 2 (old 5 star)", "Others (specify in message)"],
    application: ["Industry", "Residential / Commercial", "Others (specify in message)"],
    finalization: ["Within a Week", "Within 15 Days", "Within 30 Days", "Between 30-60 Days", "Above 60 Days"],
}

export const enquiryTypes = ["Product Enquiry", "Services & Repairs", "Annual Maintenance (AMC)", "Transformer Rentals", "Careers", "Other"]
