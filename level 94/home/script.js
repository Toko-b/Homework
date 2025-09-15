function func1() {
    console.log("Hello");
}

function func2() {
    console.log("world");
}

func1();
func2();

async function asyncFunc1() {
    setTimeout(() => { console.log("First async done") }, 2000);
}

async function asyncFunc2() {
    setTimeout(() => { console.log("Second async done") }, 1000);
}

asyncFunc1();
asyncFunc2();
/*პირველი გამოვა ის ფუნქცია რომელის დროც არის ნაკლები
ამ შემთხვევაში მეორე ასინქრონული ფუნქცია რადგას მის 
გამოსატანად გვჭირდება 1 წამი ხოლო პირველი ასინქრონული ფუნქციისთვის გვჭირდება 2 წამი*/

function func3() {
    console.log("Start Program");
}

async function asyncFunc3() {
    setTimeout(() => { console.log("Third async done") }, 2000);
}

async function asyncFunc4() {
    setTimeout(() => { console.log("Fourth async done") }, 1000);
}

function func4(){
    console.log("End Program");
}

func3();
asyncFunc3();
asyncFunc4();
func4();

async function asyncFunc5() {
    setTimeout(() => { console.log("Fifth async done") }, 500);
}

async function asyncFunc6() {
    setTimeout(() => { console.log("Sixth async done") }, 1500);
}

async function asyncFunc7() {
    setTimeout(() => { console.log("Seventh async done") }, 2500);
}

function callAll(){
    asyncFunc5();
    asyncFunc6();
    asyncFunc7();
}

callAll(); // პირველი გამოვიდა მეხუთე რადგან მისი დრო იყო 500 მილიწამი მეორე გამოვიდა მეექვსე ფუნქცია რადგან მისი დრო იყო 1500 მილიწამი ხოლო ბოლო გამოვიდა მეშვიდე ფუნქცია რადგან მისი დრო იყო 2500 მილიწამი

function func5(){
    console.log("User logged in ");
}

async function asyncFunc8() {
    setTimeout(() => {
        console.log("Fetching data...");
    }, 2000)
}

async function asyncFunc9() {
    setTimeout(() => {
        console.log("Data received");
    }, 1000)
}

func5();
asyncFunc8();
asyncFunc9();