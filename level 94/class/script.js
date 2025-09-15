function func1() {
    console.log("good teacher");
}

function func2(){
    console.log("great teacher")
}

async function func3 () {
    setTimeout(() => {
        console.log("Buski")
    }, 2000)
}

async function func4() {
    setTimeout(() => {
        console.log("truski")
    }, 1000)
}

func1()
func2()
func3()
func4()

// პირველი გამოვა ის ფუნქცია რომელის დროც არის ნაკლები ამ შემთხვევაში მეორე ასინქრონული ფუნქცია რადგას მის გამოსატანად გვჭირდება 1 წამი ხოლო პირველი ასინქრონული ფუნქციისთვის გვჭირდება 2 წამი