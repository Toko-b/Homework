function love(p1, p2){
    alert(`${p1} and ${p2}, your love percentage is ` + Math.floor(Math.random() * 100) + '%');
}

love(prompt("enter your name"), prompt("enter your name"));