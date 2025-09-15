const nebulaStock = ['stardust', 'quantum core', 'plasma orb'];
const asteroidStock = ['iron shard', 'dark crystal'];

let nebulaBackup = [...nebulaStock];
nebulaBackup.push('gravity lens');

let drops = ['meteor', 'comet', 'nova'];

let celestialDrops = [...drops];

console.log(celestialDrops);

let fullInventory = [...nebulaStock, ...asteroidStock, ...celestialDrops];

console.log(fullInventory);

// * spread - ოპერატორი გამოიყენება მასივების, ობიქეტების და სტრინგების დაშაშლელად ასევე ჩვენ შეგვიძლია დავაკოპიროთ მასივი და ობიექტი spread-ით. ასევე ჩვენ შეგვიძლია გავაერთიანოთ მასივები და ობიექტები spread ოპერატორით , rest ოპერატორით ჩვენ გარდავქმნით მნიშვნელობას მასივად ხოლო spread-ით ვშლით მნიშვნელობას. სინტაქსი ორივეს იგივე აქვს (...); 