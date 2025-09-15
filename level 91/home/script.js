const baseIngredients = ['water', 'herb', 'crystal'];

let cloned = [...baseIngredients];

let baseIngredientsUpdated = ["phoenix feather", ...baseIngredients];

let enhancedPotion = [...baseIngredients, ...'moon dust'.split(" "), ...'sun ray'.split(" ")];

const dna = 'A|T|G|C|A|G';

let arr = [...dna.split("|")];

const baseStats = { defense: 40, durability: 80 };
const enchantment = { durability: 100, magicResist: 25 };

let finalStats = {...baseStats, ...enchantment};

let result = {finalStats, ...'weight: 10'};

console.log(result)