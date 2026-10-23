export type WordEntry = {
  word: string;
  hint: string;
};

export type CategoryId = "celebrities" | "randomObjects" | "foodAndDrinks";

// ---------------------------------------------------------------------------
// 1. CELEBRITIES & PERSONALITIES
// ---------------------------------------------------------------------------
export const celebrities: WordEntry[] = [
  // TikTok & Social Media Stars
  { word: "Peller", hint: "Broken English" },
  { word: "Smart BM", hint: "Brag" },
  { word: "Seun Pizzle", hint: "Tiktok Live" },
  { word: "Sabiboy", hint: "Gay allegations" },
  { word: "Kenzy", hint: "Gay allegations" },
  { word: "Jarvis", hint: "AI Robot" },
  { word: "Purple Speedy", hint: "Dance" },
  { word: "Crispdal", hint: "Dancer" },
  { word: "Sabinus", hint: "Funny" },
  { word: "Brainjotter", hint: "Book" },
  { word: "Broda Shaggi", hint: "Agbero" },
  { word: "Taaooma", hint: "Funny" },
  { word: "Mr Macaroni", hint: "Twist" },
  { word: "Lasisi Elenu", hint: "Wide Mouth" },
  { word: "Sydney Talker", hint: "Towel" },
  { word: "Cute Abiola", hint: "Lawyer" },
  { word: "VeryDarkMan", hint: "Brave" },
  { word: "Bobrisky", hint: "She male" },
  { word: "Enioluwa", hint: "Foodie" },
  { word: "KieKie", hint: "Energy" },
  { word: "Officer Woos", hint: "Stammer" },
  { word: "Shank Comics", hint: "Geng" },
  { word: "Nasboi", hint: "Comedy singer" },
  { word: "Layi Wasabi", hint: "Lawyer" },
  { word: "Kiriku", hint: "Abeg No Vex" },
  { word: "Lord Lamba", hint: "Lies" },
  { word: "Tunde Ednut", hint: "Nuts" },
  { word: "Poco Lee", hint: "Everywhere" },
  { word: "Yhemolee", hint: "Nightlife" },
  { word: "Cubana Chiefpriest", hint: "Water" },
  { word: "Obi Cubana", hint: "Cuban" },
  { word: "E-Money", hint: "Corolla" },
  { word: "Kolu", hint: "Small" },

  // Musicians & Icons
  { word: "Davido", hint: "Goliath" },
  { word: "Wizkid", hint: "Steeze" },
  { word: "Burna Boy", hint: "Cars" },
  { word: "Olamide", hint: "Humble" },
  { word: "Asake", hint: "Forgive" },
  { word: "Rema", hint: "Singer" },
  { word: "Tiwa Savage", hint: "Old baddie" },
  { word: "Ayra Starr", hint: "Sabi" },
  { word: "Shallipopi", hint: "Planet" },
  { word: "Portable", hint: "Trouble" },
  { word: "Don Jazzy", hint: "Big" },
  { word: "Kizz Daniel", hint: "Singer" },
  { word: "Fireboy", hint: "Water" },
  { word: "2Baba", hint: "Bald" },
  { word: "P-Square", hint: "Twins" },
  { word: "Seyi Vibez", hint: "Fuji" },
  { word: "Odumodublvck", hint: "Rice" },
  { word: "BNXN", hint: "Singer" },
  { word: "Zlatan", hint: "Clothe" },
  { word: "Tekno", hint: "Phone" },
  { word: "Simi", hint: "Baby Voice" },
  { word: "Adekunle Gold", hint: "Singer" },
  { word: "Falz", hint: "Grammar" },
  { word: "Tems", hint: "Body" },
  { word: "Omah Lay", hint: "Sad" },
  { word: "Young Jonn", hint: "Produce" },
  { word: "Naira Marley", hint: "Dogs" },
  { word: "Bella Shmurda", hint: "High" },
  { word: "Mohbad", hint: "Good" },
  { word: "Wande Coal", hint: "Black" },
  { word: "Banky W", hint: "Cap" },
  { word: "Mercy Chinwo", hint: "Gospel" },
  { word: "Nathaniel Bassey", hint: "Gospel" },
  { word: "Phyno", hint: "Dialect" },
  { word: "Flavour", hint: "Guitar" },
  { word: "Yemi Alade", hint: "Hair" },
  { word: "Patoranking", hint: "Dreadlocks" },
  { word: "Ruger", hint: "Drum" },
  { word: "CKay", hint: "Love" },
  { word: "Oxlade", hint: "Whistle" },
  { word: "Fela Kuti", hint: "Legend" },
  { word: "King Sunny Ade", hint: "Juju" },

  // Nollywood & Movie Icons
  { word: "Funke Akindele", hint: "Big" },
  { word: "Mercy Johnson", hint: "Dark" },
  { word: "Mr Ibu", hint: "Meme" },
  { word: "Kanayo O Kanayo", hint: "Sacrifice" },
  { word: "Pete Edochie", hint: "Old" },
  { word: "Odunlade Adekola", hint: "Tall" },
  { word: "Lateef Adedimeji", hint: "Cry" },
  { word: "Femi Adebayo", hint: "Screen" },
  { word: "Kunle Afolayan", hint: "Produce" },
  { word: "Timini Egbuson", hint: "Movie" },
  { word: "Charles Okocha", hint: "Light" },
  { word: "Aki and Pawpaw", hint: "Two" },
  { word: "Genevieve Nnaji", hint: "Classic" },
  { word: "Omotola Jalade", hint: "Queen" },
  { word: "RMD", hint: "Ageless" },

  // Politicians & Public Figures
  { word: "Tinubu", hint: "Big" },
  { word: "Peter Obi", hint: "Glasses" },
  { word: "Atiku", hint: "School" },
  { word: "Wike", hint: "Land" },
  { word: "Dino Melaye", hint: "Cars" },
  { word: "Goodluck Jonathan", hint: "Hat" },
  { word: "Buhari", hint: "Former" },
  { word: "Obasanjo", hint: "Old" },
  { word: "Dangote", hint: "Poor" },
  { word: "Otedola", hint: "DJ" },
  { word: "Tony Elumelu", hint: "Money" },

  // Athletes
  { word: "Victor Osimhen", hint: "Face Mask" },
  { word: "Asisat Oshoala", hint: "Sport" },
  { word: "Jay Jay Okocha", hint: "Repeat" },
  { word: "Israel Adesanya", hint: "Arrow" },
  { word: "Anthony Joshua", hint: "Car Crash" },
];

// ---------------------------------------------------------------------------
// 2. RANDOM OBJECTS, VEHICLES & CONCEPTS
// ---------------------------------------------------------------------------
export const randomObjects: WordEntry[] = [
  // Transport & Streets
  { word: "Danfo", hint: "Yellow" },
  { word: "Okada", hint: "Transportation" },
  { word: "Keke Napep", hint: "Tri" },
  { word: "Agbero", hint: "Trouble" },
  { word: "BRT", hint: "Blue" },
  { word: "Molue", hint: "Old" },
  { word: "Korope", hint: "Mini" },
  { word: "Third Mainland Bridge", hint: "Long" },
  { word: "Mechanic", hint: "Work" },
  { word: "Vulcanizer", hint: "Tyre" },

  // Power, Tech & Appliances
  { word: "Generator", hint: "Loud" },
  { word: "Changeover", hint: "Switch" },
  { word: "Power Bank", hint: "Portable" },
  { word: "Recharge Card", hint: "Scratch" },
  { word: "Extension Box", hint: "Charge" },
  { word: "Inverter", hint: "Light" },
  { word: "DSTV", hint: "Antenna" },
  { word: "Standing Fan", hint: "Blade" },
  { word: "Ceiling Fan", hint: "Blade" },
  { word: "Air Conditioner", hint: "Cold" },
  { word: "Gas Cylinder", hint: "Cook" },
  { word: "Stabilizer", hint: "Refrigerator" },
  { word: "Prepaid Meter", hint: "Token" },
  { word: "Solar Panel", hint: "Rooftop" },
  { word: "Torchlight", hint: "Night" },

  // Slang & Concepts
  { word: "Sapa", hint: "Shege" },
  { word: "Japa", hint: "Run" },
  { word: "Aza", hint: "Send" },
  { word: "Urgent 2k", hint: "Broke" },
  { word: "Yahoo", hint: "Format" },
  { word: "Opay", hint: "Green" },
  { word: "Palmpay", hint: "Purple" },
  { word: "POS Machine", hint: "Road" },
  { word: "Crypto", hint: "Money" },
  { word: "Owanbe", hint: "Party" },

  // Everyday & Household Items
  { word: "Ankara", hint: "Colorful" },
  { word: "Gele", hint: "Party" },
  { word: "Agbada", hint: "Big" },
  { word: "Ghana Must Go", hint: "Run" },
  { word: "Kerosene Stove", hint: "Old" },
  { word: "Chewing Stick", hint: "Old School" },
  { word: "Bucket", hint: "Storage" },
  { word: "Broom", hint: "Dirt" },
  { word: "Nylon Bag", hint: "Shop" },
  { word: "Pure Water", hint: "Tear" },
  { word: "Matches", hint: "Gas" },
  { word: "Barbing Salon", hint: "Cut" },
  { word: "Tailor", hint: "Texture" },
  { word: "Buka", hint: "Library" },
  { word: "Police Checkpoint", hint: "Bribe" },
  { word: "Souvenir", hint: "Gift" },
  { word: "Canopy", hint: "Event" },
  { word: "Mosquito Net", hint: "Sleep" },
  { word: "Insecticide", hint: "Kill" },
  { word: "Aboniki", hint: "Mentholated" },
  { word: "Robb", hint: "Mentholated" },
  { word: "Panadol", hint: "Problem" },
  { word: "Agbo", hint: "Local" },
  { word: "Ogogoro", hint: "Local" },
  { word: "Ludo", hint: "Probability" },
  { word: "Talking Drum", hint: "Local" },
  { word: "Keg", hint: "Yellow" },
  { word: "Water Tank", hint: "Store" },
  { word: "Borehole", hint: "Water" },
  { word: "Electric Fence", hint: "Security Wire" },
  { word: "Gutter", hint: "Drainage" },
  { word: "Transformer", hint: "NEPA" },
  { word: "Barricade", hint: "Police" },
  { word: "Lighter", hint: "Smoke" },
  { word: "Wheelbarrow", hint: "Carry" },
  { word: "Okrika", hint: "Second hand" },
  { word: "Filling Station", hint: "Fuel" },
  { word: "Lantern", hint: "Old" },
  { word: "Aso-Ebi", hint: "Coordinated" },

  // School & Campus Life
  { word: "Prep", hint: "Read" },
  { word: "Provisions", hint: "Hostel" },
  { word: "Cutlass", hint: "Farm" },
  { word: "WAEC", hint: "University" },
  { word: "JAMB", hint: "Fail" },
  { word: "ASUU", hint: "Home" },
  { word: "Corper", hint: "Uniform" },
  { word: "Carryover", hint: "Redo" },
  { word: "School Fees", hint: "Panic" },
  { word: "Lesson Teacher", hint: "Extra" },
];

// ---------------------------------------------------------------------------
// 3. FOOD, DRINKS & SNACKS
// ---------------------------------------------------------------------------
export const foodAndDrinks: WordEntry[] = [
  // Staples & Street Eats
  { word: "Garri", hint: "Sapa" },
  { word: "Jollof Rice", hint: "Party" },
  { word: "Fried Rice", hint: "Green Peas" },
  { word: "Ofada Rice", hint: "Local" },
  { word: "Suya", hint: "Night" },
  { word: "Kilishi", hint: "Aboki" },
  { word: "Puff-Puff", hint: "Fat" },
  { word: "Akara", hint: "Cake" },
  { word: "Moin-Moin", hint: "Egg" },
  { word: "Boli", hint: "Road" },
  { word: "Gala", hint: "Sausage" },
  { word: "Plantain Chips", hint: "Snack" },
  { word: "Chin Chin", hint: "Snacks" },
  { word: "Pepper Soup", hint: "Spicy" },
  { word: "Asun", hint: "Pepper" },
  { word: "Shawarma", hint: "Sausage" },
  { word: "Amala", hint: "Ewedu" },
  { word: "Pounded Yam", hint: "Pound" },
  { word: "Eba", hint: "Swallow" },
  { word: "Semovita", hint: "White" },
  { word: "Fufu", hint: "White" },
  { word: "Egusi Soup", hint: "Yellow" },
  { word: "Ewedu Soup", hint: "Slimy" },
  { word: "Gbegiri Soup", hint: "Yellow" },
  { word: "Ogbono Soup", hint: "Draw Soup" },
  { word: "Okra Soup", hint: "Slimy" },
  { word: "Edikang Ikong", hint: "Vegetable" },
  { word: "Efo Riro", hint: "Vegetable" },
  { word: "Kpomo", hint: "Soft or hard" },
  { word: "Shaki", hint: "Hard" },
  { word: "Beans", hint: "Bread" },
  { word: "Meat Pie", hint: "Pastry" },
  { word: "Egg Roll", hint: "Ball" },
  { word: "Tuwo Shinkafa", hint: "North" },
  { word: "Abacha", hint: "East" },
  { word: "Nkwobi", hint: "Palm oil" },
  { word: "Banga Soup", hint: "Delta" },
  { word: "Coconut Rice", hint: "White" },
  { word: "Cow Leg", hint: "Soft" },

  // Beverages & Drinks
  { word: "Zobo", hint: "Cold" },
  { word: "Kunu", hint: "Hausa" },
  { word: "Palm Wine", hint: "Local settings" },
  { word: "Lacasera", hint: "Gala" },
  { word: "Maltina", hint: "Blood" },
  { word: "Orijin", hint: "Agbero" },
  { word: "Fearless Drink", hint: "Energy" },
  { word: "Chapman", hint: "Red" },
  { word: "FanIce", hint: "Hot sun" },
  { word: "Burukutu", hint: "Local drink" },
  { word: "Tio Tio", hint: "Drink" },

  // Local Ingredients & Staples
  { word: "Agbalumo", hint: "Season" },
  { word: "Groundnut", hint: "Pimples" },
  { word: "Palm Oil", hint: "Fry" },
  { word: "Indomie", hint: "Twists" },
  { word: "Bread", hint: "Hot hot" },
  { word: "Peak Milk", hint: "Cow" },
  { word: "Milo", hint: "Clap" },
  { word: "Golden Morn", hint: "Baby" },
  { word: "Pap", hint: "Saturday" },
  { word: "Sardine", hint: "Tin" },
  { word: "Biscuit", hint: "Break time" },
  { word: "Eba and Egusi", hint: "Combo" },
];

export const wordBanks: Record<CategoryId, WordEntry[]> = {
  celebrities,
  randomObjects,
  foodAndDrinks,
};

export const categoryDetails: Record<
  CategoryId,
  { label: string; shortLabel: string }
> = {
  celebrities: {
    label: "Nigerian Celebrities",
    shortLabel: "Celebrities",
  },
  randomObjects: {
    label: "Random Objects",
    shortLabel: "Objects",
  },
  foodAndDrinks: {
    label: "Food & Drinks",
    shortLabel: "Food",
  },
};

export function validateWordBanks() {
  return Object.values(wordBanks).every(
    (entries) =>
      entries.length > 0 &&
      entries.every(
        ({ word, hint }) =>
          word.trim().length > 0 && hint.trim().length > 0,
      ),
  );
}
