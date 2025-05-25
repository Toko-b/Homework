let me = {
    name: 'Tornike',
    lastName: 'Buskivadze',
    age: '13',
    hobby:{
        hobby1: 'Coding',
        hobby2: 'Swimming',
        hobby3: 'exercising',
    },
    
    info: function() {
        return `Hello my name is ${this.name}, my last name is ${this.lastName}, im ${this.age}, my hobbies are ${this.hobby.hobby1}, ${this.hobby.hobby2} and ${this.hobby.hobby3}.`;
    }
}

console.log(me.info());