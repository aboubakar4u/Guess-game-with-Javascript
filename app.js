// let counter = 0;


let rndNum = Math.floor(Math.random() * 10) + 1;
console.log(rndNum);


document.getElementById("btn").onclick = myFunc;


function myFunc() {
    let inpNum = parseInt(document.getElementById("GuessField").value, 10);
    let counter = 0;
    console.log(counter);

    while (counter < 3) {

    if (rndNum < inpNum) {
        document.getElementById("output").innerHTML = "Number too High.";
        counter += 1;
    }
    else if (rndNum > inpNum) {
        document.getElementById("output").innerHTML = "Number too Low.";
        counter += 1;
    }
    else if (rndNum === inpNum) {
        document.getElementById("output").innerHTML = "CORRECT...";
        document.getElementById("score").innerHTML = "You Win!";
        counter += 1;
    }
    }
}
