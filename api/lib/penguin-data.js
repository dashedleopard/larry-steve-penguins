// Centralized data store for Larry & Steve penguin bot

// Helper function for random selection
const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// Day-of-week greetings (without hardcoded emojis)
const dailyMessages = {
  0: "Happy Sunday from Larry & Steve! Time for a lazy penguin day!",
  1: "Happy Monday from Larry & Steve! Starting the week with a waddle!",
  2: "Happy Tuesday from Larry & Steve! Keep swimming strong!",
  3: "Happy Wednesday from Larry & Steve! Halfway through the week!",
  4: "Happy Thursday from Larry & Steve! Almost to the weekend!",
  5: "Happy Friday from Larry & Steve! Time to celebrate!",
  6: "Happy Saturday from Larry & Steve! Weekend waddles!"
};

// Penguin wisdom quotes — 62 quotes, indexed by day of month (1-31)
// plus extras drawn randomly when dayOfMonth exceeds 31 or for variety
const penguinWisdom = {
  1: "A penguin never slips on ice, but always learns from a stumble.",
  2: "The coldest waters teach the warmest lessons.",
  3: "Huddle together when times are tough.",
  4: "Sometimes the best path is a slide, not a walk.",
  5: "Every fish in the sea starts as a single splash.",
  6: "Stand tall, even when you're just 3 feet high.",
  7: "The best view comes after the deepest dive.",
  8: "Waddle at your own pace, the ice isn't going anywhere.",
  9: "A smooth pebble finds its way to the perfect nest.",
  10: "Share your catch, and the colony thrives.",
  11: "Even emperor penguins started as eggs.",
  12: "The fluffiest feathers keep the warmest hearts.",
  13: "When the wind blows, turn your back and wait it out.",
  14: "Every sunset on ice promises a new frozen dawn.",
  15: "Belly slides are faster than worrying about dignity.",
  16: "The loudest call finds the right mate.",
  17: "Ice doesn't melt from a single warm thought.",
  18: "Porpoise with purpose through the waves.",
  19: "Yesterday's fish is today's energy.",
  20: "The colony is only as strong as its smallest chick.",
  21: "Patience catches more fish than panic.",
  22: "Molt gracefully, growth looks messy.",
  23: "Even in a blizzard, your family knows your call.",
  24: "Tuxedos are always in style, no matter the occasion.",
  25: "The ice cracks, but penguins adapt.",
  26: "Dive deep, but always know your way up.",
  27: "A full belly and good company make any day great.",
  28: "Keep your flippers close and your fish closer.",
  29: "The aurora guides, but instinct leads.",
  30: "March proudly, even if the march is long.",
  31: "Tomorrow brings fresh ice and new adventures."
};

// 60 penguin facts for daily variety
const penguinFacts = [
  "Emperor penguins can dive over 1,800 feet deep!",
  "Penguins can swim up to 22 mph underwater!",
  "A group of penguins is called a 'waddle' on land!",
  "Penguins spend up to 75% of their life in water!",
  "Emperor penguins can hold their breath for 22 minutes!",
  "The smallest penguin is only 16 inches tall!",
  "Penguins have excellent hearing underwater!",
  "A penguin's black and white coloring is camouflage!",
  "Penguins can drink salt water safely!",
  "Emperor penguin dads incubate eggs for 2 months!",
  "Penguins molt all their feathers at once!",
  "Some penguins can leap 6 feet out of the water!",
  "Penguins have been around for 60 million years!",
  "A penguin's tail helps them balance when waddling!",
  "Gentoo penguins are the fastest swimming penguins!",
  "Penguins can recognize each other's unique calls!",
  "Yellow-eyed penguins are among the rarest species!",
  "Penguins have a gland that filters salt from water!",
  "Macaroni penguins have funky yellow head feathers!",
  "Penguins can't taste sweet or savory flavors!",
  "Adelie penguins build nests from stones and pebbles!",
  "Some penguins travel 600 miles to their colonies!",
  "Penguin feathers are waterproof and windproof!",
  "King penguins don't build nests at all!",
  "Penguins have more feathers than most birds!",
  "Little blue penguins are also called fairy penguins!",
  "Rockhopper penguins hop over rocky terrain!",
  "Chinstrap penguins are named for their facial marking!",
  "Penguins can see better underwater than in air!",
  "African penguins can live up to 20 years!",
  // 30 new facts
  "Emperor penguins huddle in groups of up to 5,000!",
  "Penguins have about 100 feathers per square inch!",
  "The oldest known penguin fossil is 62 million years old!",
  "Galapagos penguins live near the equator!",
  "Penguins' knees are hidden inside their bodies!",
  "A penguin's heartbeat slows to 20 bpm while diving!",
  "King penguin chicks take over a year to fledge!",
  "Penguins can sleep standing up on the ice!",
  "Emperor penguins survive temperatures of -76°F!",
  "Penguin colonies are called rookeries!",
  "Adelie penguins can march 30 miles over ice to feed!",
  "Penguins swallow pebbles to help with buoyancy!",
  "The largest ever penguin was 6.8 feet tall!",
  "Magellanic penguins migrate 3,000 miles each year!",
  "Penguins' black backs help absorb heat from the sun!",
  "Some penguins toboggan on their bellies to move faster!",
  "Penguin couples often bow to each other as a greeting!",
  "Fairy penguins weigh only about 2 pounds!",
  "Penguins can jump up to 9 feet to land on ice shelves!",
  "A penguin's tongue has rear-facing spines to grip fish!",
  "Snares penguins are found on only one island in the world!",
  "Penguins are one of the few birds with solid bones!",
  "Chinstrap penguins get only 4 seconds of sleep at a time!",
  "Emperor penguins can fast for up to 4 months straight!",
  "Penguins have a third eyelid to protect their eyes underwater!",
  "King penguins have the longest breeding cycle of any bird!",
  "Penguin chicks huddle in groups called crèches!",
  "Penguins preen for hours to stay waterproof!",
  "Rockhopper penguins can climb steep rocky cliffs!",
  "Penguins communicate through body language and flipper waving!"
];

// 30 penguin jokes for interactive replies
const penguinJokes = [
  "Why don't penguins like talking to strangers? They find it hard to break the ice! 🐧",
  "What do penguins wear to the beach? A beak-ini! 👙",
  "How does a penguin build its house? Igloos it together! 🏠",
  "What's a penguin's favorite relative? Aunt Arctica! ❄️",
  "Why don't penguins fly? They're not into the cheep seats! ✈️",
  "What do you call a penguin in the desert? Lost! 🌵",
  "How do penguins drink? Out of beak-ers! 🥤",
  "What's black, white, and red all over? A sunburned penguin! ☀️",
  "Why are penguins good race drivers? They're always in pole position! 🏎️",
  "What do penguins sing on birthdays? Freeze a jolly good fellow! 🎂",
  "Where do penguins go to the movies? The dive-in! 🎬",
  "What's a penguin's favorite salad? Iceberg lettuce! 🥗",
  "Why did the penguin cross the road? To go with the floe! 🚶",
  "What do you call fifty penguins in the Arctic? Really lost! 🧭",
  "How do penguins pass exams? They just wing it! 📝",
  // 15 new jokes
  "What do penguins eat for lunch? Ice-burgers! 🍔",
  "Why did the penguin get promoted? He was outstanding in his field of ice! 🏆",
  "What's a penguin's favorite pasta? Penguine! 🍝",
  "How do penguins make a decision? Flipper coin toss! 🪙",
  "What do you call a happy penguin? A pen-grin! 😁",
  "Why do penguins carry fish in their beaks? Because they don't have pockets! 🐟",
  "What's a penguin's favorite candy? Ice Pops! 🍭",
  "Why was the penguin a great musician? He had perfect pitch! 🎵",
  "What do penguins do in their spare time? Chill out! 🧊",
  "What's a penguin's favorite social media? Insta-glam on ice! 📱",
  "Why do penguins always win arguments? They have strong points! 🎯",
  "What's a penguin's favorite dance? The ice-olated shuffle! 💃",
  "Why did the penguin bring a ladder? To reach the high notes! 🎤",
  "What did the ocean say to the penguin? Nothing, it just waved! 🌊",
  "How do penguins stay in shape? They do ice-ometric exercises! 💪"
];

// Curated penguin image URLs for MMS (public domain / freely licensed)
const penguinImages = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Emperor_Penguin_Manchot_empereur.jpg/800px-Emperor_Penguin_Manchot_empereur.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg/800px-Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Manchot_papou_-_Gentoo_Penguin.jpg/800px-Manchot_papou_-_Gentoo_Penguin.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Chinstrap_Penguin_%28Pygoscelis_antarcticus%29_-_Pair_at_Aitcho_Island.jpg/800px-Chinstrap_Penguin_%28Pygoscelis_antarcticus%29_-_Pair_at_Aitcho_Island.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Penguins_walking_-Moltke_Harbour%2C_South_Georgia%2C_British_overseas_territory%2C_UK-8.jpg/800px-Penguins_walking_-Moltke_Harbour%2C_South_Georgia%2C_British_overseas_territory%2C_UK-8.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Penguins_Edinburgh_Zoo_2004_SMC.jpg/800px-Penguins_Edinburgh_Zoo_2004_SMC.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Rockhopper_Penguin_in_Edinburgh_Zoo_2004_SMC.jpg/800px-Rockhopper_Penguin_in_Edinburgh_Zoo_2004_SMC.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Falkland_Islands_Penguins_36.jpg/800px-Falkland_Islands_Penguins_36.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/South_Shetland-2016-Deception_Island%E2%80%93Chinstrap_penguin_%28Pygoscelis_antarcticus%29_04.jpg/800px-South_Shetland-2016-Deception_Island%E2%80%93Chinstrap_penguin_%28Pygoscelis_antarcticus%29_04.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Penguins_Falklands.jpg/800px-Penguins_Falklands.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Camara_lridge_-_Manchots_royaux_%282%29.jpg/800px-Camara_lridge_-_Manchots_royaux_%282%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Manchot_Adelie_-_Adelie_Penguin.jpg/800px-Manchot_Adelie_-_Adelie_Penguin.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/King_Penguins.jpg/800px-King_Penguins.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Penguin_in_Antarctica_jumping_out_of_the_water.jpg/800px-Penguin_in_Antarctica_jumping_out_of_the_water.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Manchot_royal_-_King_Penguin.jpg/800px-Manchot_royal_-_King_Penguin.jpg"
];

module.exports = {
  dailyMessages,
  penguinWisdom,
  penguinFacts,
  penguinJokes,
  penguinImages,
  getRandomItem
};
