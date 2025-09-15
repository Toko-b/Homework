class Specimen {
    constructor(id, type) {
        this.id = id;
        this.type = type;
    }
    getLabel() {
        return `id: ${this.id}, type: ${this.type}`;
    }
}

class MutantSpecimen extends Specimen {
    constructor(id, type, mutationLevel) {
        super(id, type);
        this.mutationLevel = mutationLevel;
    }
    getLabel() {
        return `id: ${this.id}, type: ${this.type}, mutation Level: ${this.mutationLevel}`;
    }

    static mostMutated(arr) {
        return Math.max(arr.mutationLevel);
    }
}

class Vehicle {
    constructor(model, speed) {
        this.model = model;
        this.speed = speed;
    }
    getInfo() {
        return `model: ${this.model}, speed: ${this.speed}`;
    }
    static compareSpeed(v1, v2) {
        if (v1 > v2) {
            return v1;
        } else if (v2 > v1) {
            return v2;
        } else {
            return `same speed`;
        }
    }
}

class ElectricVehicle extends Vehicle {
    constructor(model, speed, batteryLife) {
        super(model, speed);
        this.batteryLife = batteryLife;
    }
    getInfo() {
        return `model: ${this.model}, speed: ${this.speed}, battery Life: ${this.batteryLife}`;
    }
}

class Agent {
    constructor(name, version) {
        this.name = name;
        this.version = version;
    }
    getStatus() {
        return `name: ${this.name}, version: ${this.version}`
    }

    static latestVersion(a1, a2) {
        if (a1 > a2) {
            return a1;
        } else if (a2 > a1) {
            return a2;
        } else {
            return `same version`;
        }
    }
}

class FieldAgent extends Agent {
    constructor(name, version, location) {
        super(name, version);
        this.location = location;
    }
    getStatus() {
        return `name: ${this.name}, version: ${this.version}, location: ${this.location}`;
    }
}

class Sequence {
    constructor(code, length){
        this.code = code;
        this.length = length;
    }
    getSummary(){
        return `code: ${this.code}, length: ${this.length}`;
    }
   static  filterByLength(arr, min){
        return arr.filter(item = item.length > min);
   }
}

class MutatedSequence extends Sequence{
    constructor(code, length, mutationType){
        super(code, length);
        this.mutationType = mutationType;
    }
    getSummary(){
        return `code: ${this.code}, length: ${this.length}, mutationType: ${this.mutationType}`;
    }
}

class Satellite {
    constructor(id, orbitType){
        this.id = id;
        this.orbitType = orbitType;
    }
    getDetails(){
        return `id: ${this.id}, orbit type: ${this.orbitType}`;
    }

    static countByOrbit(arr, type){
        return arr.filter(sat => sat.orbitType === type).length;
    }
}

class MilitarySatellite extends Satellite{
    constructor(id, orbitType, encryptionLevel){
        super(id, orbitType);
        this.encryptionLevel = encryptionLevel;
    }
    getDetails(){
        return `id: ${this.id}, orbit type: ${this.orbitType}, encryption level: ${this.encryptionLevel}`;
    }
}

class Piece{
    constructor(shape, color){
        this.shape = shape;
        this.color = color;
    }
    getInfo(){
        return `shape: ${this.shape}, color: ${this.color}`
    }
}

class RarePiece extends Piece{
    constructor(shape, color, rarityScore){
        super(shape, color);
        this.rarityScore = rarityScore;
    }
    getInfo(){
        return `shape: ${this.shape}, color: ${this.color}, rarity score: ${this.rarityScore}`
    }
}

class Vision{
    constructor(type, intensity){
        this.type = type;
        this.intensity = intensity;
    }
    getDetails(){
        return `type: ${this.type}, intesity: ${this.intensity}`;
    }
}

class FutureVision extends Vision{
    constructor(type, intensity, timestamp){
        super(type, intensity);
        this.timestamp = timestamp;
    }
    getDetails(){
        return `type: ${this.type}, intesity: ${this.intensity}, time stamp: ${this.timestamp}`;
    }
}