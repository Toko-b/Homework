let university = {
    name: "Georgian National University SEU",
    departments: 4,
    website: "https://www.seu.edu.ge",
    ratings: {
        rating1: {
            name: "Giorgi",
            status: "student",
            review: 8.6
        },
        rating2: {
            name: "Lile",
            status: "student",
            review: 9
        },
        rating2: {
            name: "Nika",
            status: "student",
            review: 8.7
        }
    }
}

let allStudents = {
    studentsCount: 10000
}

console.log(Object.entries(university));

console.log(Object.hasOwn(university, "scholarship"));

let assignedUniversity = Object.assign(university, allStudents);

Object.freeze(assignedUniversity);

assignedUniversity.departments = 6;

console.log(Object.isFrozen(assignedUniversity));

let sportClub = {
    clubName: "Paris saint-german",
    sportType: "FootBall",
    foundedYear: 1970,
    achievements: {
        UCL: 1,
        frenchChampion: 13,
        CupWinners: 1,
        frenchCup: 16,
        frenchLeague: 9,
        French2ndtierchampion: 1,
        IntertotoCup: 1,
        FrenchSupercup: 13
    }
}

let stadium = {
    stadiumCapacity: 47929
}

console.log(Object.keys(sportClub));
console.log(Object.values(sportClub));

console.log(Object.hasOwn(sportClub, "Sponsor"));
let assignedSportClub = Object.assign(sportClub, stadium);

Object.freeze(assignedSportClub);

assignedSportClub.foundedYear = 1960;
console.log(Object.isFrozen(assignedSportClub));

let hotel = {
    name: "The Biltmore Hotel Tbilisi",
    rating: 4.6,
    location: "29 Shota Rustaveli Ave, Tbilisi 0108",
    guestreviews: {
        review1: {
            user: "akaki2017",
            review: 5
        },
        review2: {
            user: "QatarHatter",
            review: 5
        },
        review3: {
            user: "ademkocabas",
            review: 3
        }
    }
}

let hotelRooms = {
    roomsCount: 214
}


console.log(Object.entries(hotel));
console.log(Object.hasOwn(hotel, "spa"));

let assignedHotel = Object.assign(hotel, hotelRooms);

Object.freeze(assignedHotel);

assignedHotel.roomsCount = 215;
console.log(Object.isFrozen(assignedHotel));

let cinema = {
    cinemaName: "Cavea",
    currentMoviesCount: 4,
    location: "RQ9C+3XG, kato melqdzis str, Tbilisi",
    guestreviews: {
        review1: {
            user: "Mansi Buddh",
            review: 5
        },
        review2: {
            user: "ilia lomaia",
            review: 4
        },
        review3: {
            user: "Harikrishna Menon",
            review: 4
        }
    }
}

let cimenaTickets = {
    ticketPrice: 20
}


console.log(Object.entries(cinema));
console.log(Object.hasOwn(cinema, "vipSeats"));

let assignedCinema = Object.assign(cinema, cimenaTickets);

Object.freeze(assignedCinema);

assignedCinema.ticketPrice = 25;
console.log(Object.isFrozen(assignedCinema));