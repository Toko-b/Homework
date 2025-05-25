function Person(name, age, profession){
    this.name = name;
    this.age = age;
    this.profession = profession;
    this.introduce = function() {
        console.log(`Hello my name is ${name} im ${age} years old and my proffesion is ${profession}`);
    }
}

let p1 = new Person("Giorgi", 12, "basketballer");

p1.introduce();

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function() {
        return `${title} by ${author}, which was released in ${year}.`;
    }
}

let book1 = new Book("The Count of Monte Cristo", "Alexandre Dumas", 1846);
let book2 = new Book("The Adventures of Sherlock Holmes", "Arthur Conan Doyle", 1892);
let book3 = new Book("Metro 2033", " Dmitry Glukhovsky", 2002);

console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book3.getSummary());

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
    this.changePassword = function(newPassword){
        password = newPassword;
    }
    this.getDetails = function(){
        return `username: ${username}. email: ${email}`;
    }
}

let user1 = new User("Giorgi", "giomagarivar@gmail.com", "giogiogio");
