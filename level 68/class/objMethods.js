let academy = {
    name: "harvard",
    courses: {
        course1: "CS50's Introduction to Programming with Python",
        course2: "Negotiating Salary",
        course3: "CS50's Introduction to Cybersecurity",
        course4: "Human Anatomy: Musculoskeletal Cases",
        course5: "Strengthening Community Health Worker Programs"
    },
    socialLink: "https://www.vpal.harvard.edu",
    reviewes: {
        review1: {
            name: "George",
            status: "Parent",
            review: 10
        },
        review2: {
            name: "Nick",
            status: "Child",
            review: 9.4
        },
        review3: {
            name: "Lebron",
            status: "Parent",
            review: 10
        }
    }
}

let academymembers = {
    member: "Patrica"
}

console.log(Object.entries(academy));

console.log(Object.keys(academy));

console.log(Object.values(academy));

console.log(Object.hasOwn(academy, "teachers"));

let assignedAcademy = Object.assign(academy, academymembers);

Object.freeze(assignedAcademy);

console.log(Object.isFrozen(assignedAcademy));