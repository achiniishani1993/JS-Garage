let randomNumber = Math.floor(Math.random() * 50) + 1;
let total = 0;
function gameFunction() {
    console.log(randomNumber)
    ++total;
    let computergame;
    let play = document.getElementById("game").value; // read text box value
    if (play == randomNumber) {
        computergame = "Congratulations";
        alert(total);
    } else if (play > randomNumber) {
        computergame = "Too High";
    } else {
        computergame = "Too Low";
    }
    document.getElementById("Cgame").innerHTML = computergame;

}

function actFunction() {
    let checkDigits = ""
    let checkN = Number(document.getElementById("act").value);
    for (let i = 0; i <= checkN; i++) {
        if (i % 2 == 0) {
            checkDigits += i + " " + "Even" + "<br>"
        } else {
            checkDigits += i + " " + "Odd" + "<br>"
        }


    }

    document.getElementById("activity").innerHTML = checkDigits

}

function multiagainFunction() {
    let multitable = ""
    let programmetable = Number(document.getElementById("multilast").value);
    for (let a = 1; a <= 10; a++) {
        if (programmetable) {
            multitable += a * programmetable + "<br>"
        }

    }
    document.getElementById("output").innerHTML = multitable
}

function CheckgradeFunction() {
    let checkGrade = ""
    const gradeMessage = document.getElementById("Gradescore");
    gradeMessage.innerHTML = "";
    let grade = Number(document.getElementById("score").value);
    console.log(grade)
    try {
        if (isNaN(grade)) {
            console.log("not a number")
            throw "not a number";
        }
        // grade = Number(grade);
        if (grade >= 101) {
            console.log("invalid ")
            throw "invalid score";
        } else {
            if (grade <= 59) {
                checkGrade = "Your Grade is 'F'";
                console.log("first F")
            }
            else if (60 <= grade && grade <= 69) {
                checkGrade = "Your Grade is 'D'";
                console.log(" D")
            }
            else if (70 <= grade && grade <= 79) {
                checkGrade = "Your Grade is 'C'";
                console.log(" C")
            }
            else if (80 <= grade && grade <= 89) {
                checkGrade = "Your Grade is 'B'";
                console.log(" B")
            }
            else {
                checkGrade = "Your Grade is 'A'";
                console.log(" A")
            }
            document.getElementById("Gradescore").innerHTML = checkGrade
            console.log("RESULTS")
        }
    } catch (err) {
        console.log("Error " + err)
        gradeMessage.innerHTML = "Input is " + err;
    }

}
/* let money = 10000;
function atmFunction() {
    let amount = prompt("Please enter your withdrawal amount", " "); // read amount
    amount = Number(amount)
    console.log("amount is " + amount)
    while (amount % 100 !== 0 || amount === "") { // check invalid amount
        document.getElementById("machine1").innerHTML = "Invaild Amount";
        alert("Only Numbers");
        (confirm("return to enter amount"))
        amount = prompt("Please enter your withdrawal amount", " ");
        console.log("hi")
    }
    if (amount <= money) {
        money = money - amount
        document.getElementById("machine1").innerHTML = "ATM balance is" + " " + money + "<br>" + "Thank you for banking with us";
        //(confirm("return to enter amount"))
        // amount = prompt("Please enter your withdrawal amount", " ");
        console.log("bye")
    }
    else {
        document.getElementById("machine1").innerHTML = "ATM does not has enough balance";
        console.log("fuck")
    }


} */

let money = 10000;
function atmFunction1() {
    let isContinue = true;
    while (isContinue) {
        let amount = prompt("Please enter your withdrawal amount", " "); //read amount
        if (amount % 100 === 0) { // valid 100 multiply
            if (amount <= money) {
                money = money - amount
                alert("The remaining balance!" + " " + money)
                console.log("bye")
            } else {
                alert("No funds!")
            }
        } else {
            alert("invalid")
        }

        if (confirm("Do you want to do again?")) {

        } else {
            isContinue = false; // exit
        }

    }
}

function passFunction1() {

    let createpassword = document.getElementById("pasw").value;
    let length = createpassword,
        lengthset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        newPass = "";
    if (length <= 8) {
        for (let p = 0, l = lengthset.length; p < length; p++) {
            newPass += lengthset.charAt(Math.floor(Math.random() * l));
        }

    } else {
        alert("invalid number try again")
    }
    document.getElementById("outPass").innerHTML = newPass
}



function rpsFunction() {
    let choice = ["Rock", "Paper", "Scissors"];
    let computerchoiceIndex = Math.floor(Math.random() * choice.length);
    let computerchoice = choice[computerchoiceIndex]
    console.log("computerchoice " + computerchoice + " computerchoiceInde " + computerchoiceIndex)
    let gamecontinue = true;
    while (gamecontinue) {
        let userchoice = prompt("Please enter Rock, Paper or Scissors", " ");
        console.log(userchoice)
        if (userchoice === computerchoice) {
            
        } else if ((userchoice === "Rock" && computerchoice === "Scissors") || 
                  (userchoice === "Scissors" && computerchoice === "Paper") || 
                   (userchoice === "Paper" && computerchoice === "Rock"))
        {
            alert("User Winner")
             console.log(" hi")
        } else {
            alert("User looser")
        }

        if (confirm("Do you want to do again?")) {
            
        } else {
            gamecontinue = false; // exit
        }


    }
}