const map1 = new Map([['ცხოველი', 'მგელი'],['ცხოველი', "ლომი"],['ფრინველი', 'არწივი'],['ძუძუმწოვარი', 'დელფინი'],['ამფიბია', 'გომბეშო']]);

console.log(map1.size);

for(let i of map1.entries()){
    console.log(i);
}

console.log(map1.has("ნუკრი"));

let set = new Set([1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]);

console.log(set);