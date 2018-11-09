// creating the function for a winner
function getWinner() {
    let player = "x"
    let playerOneScore = 0
    let playerTwoScore = 0

    // setting variable for the different boxes
    let box1 = document.getElementById("box1")
    let box2 = document.getElementById("box2")
    let box3 = document.getElementById("box3")
    let box4 = document.getElementById("box4")
    let box5 = document.getElementById("box5")
    let box6 = document.getElementById("box6")
    let  box7 = document.getElementById("box7")
    let box8 = document.getElementById("box8")
    let box9 = document.getElementById("box9")

    // for clicking the different boxes
    for (i = 1; i < 10; i++) {
         //this creates a jQuery object using the id of "box" and puts into the variable of box
        box = $("#box" + i)
       // this adds the click event to the box
        box.on('click', oneClick)
    }

    // creating the function for clicking the boxes only ONE time as X or O
    function oneClick() {
        this.innerHTML = player
        if (player === "x") {
            player = "o"
        }

        else if (player === "o") {
            player = "x"
        }
        $(this).off("click")
       
        // get all possibilities

        if (box1.innerHTML !== " " && box1.innerHTML === box2.innerHTML && box2.innerHTML === box3.innerHTML) {
            if (player !== "x") {
                alert("x wins");
                // playerOneScore++
                // $("#playerOne").html("Player One: " + playerOneScore)
                for (i = 1; i < 10; i++) {
                    box = $("#box" + i)
                    box.off("click")
                }

            } else {
                alert("o wins")
                // playerTwoScore++
                // $("#playerTwo").html("Player Two: " + playerTwoScore)
                for (i = 1; i < 10; i++) {
                    box = $("#box" + i)
                    box.off("click")
                }
            }
        } else if (box4.innerHTML !== " " && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) {
            if (player !== "x") {
                alert("x wins");
                // playerOneScore++
                // $("#playerOne").html("Player One: " + playerOneScore)
                for (i = 1; i < 10; i++) {
                    box = $("#box" + i)
                    box.off("click")
                }
            } else {
                alert("o wins")
                playerTwoScore++
                $("#playerTwo").html("Player Two: " + playerTwoScore)
                for (i = 1; i < 10; i++) {
                    box = $("#box" + i)
                    box.off("click")
                }
            }
        } else if (box7.innerHTML !== " " && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) {
            if (player !== "x") {
                alert("x wins");
                // playerOneScore++
                // $("#playerOne").html("Player One: " + playerOneScore)
                for (i = 1; i < 10; i++) {
                    box = $("#box" + i)
                    box.off("click")
                }
            } else {
                alert("o wins")
                // playerTwoScore++
                // $("#playerTwo").html("Player Two: " + playerTwoScore)
                for (i = 1; i < 10; i++) {
                    box = $("#box" + i)
                    box.off("click")
                }
            }
        } else if (box1.innerHTML !== " " && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) {
            if (player !== "x") {
                alert("x wins");
                // playerOneScore++
                // $("#playerOne").html("Player One: " + playerOneScore)
                for (i = 1; i < 10; i++) {
                    box = $("#box" + i)
                    box.off("click")
                }
            } else {
                alert("o wins")
                // playerTwoScore++
                // $("#playerTwo").html("Player Two: " + playerTwoScore)
                for (i = 1; i < 10; i++) {
                    box = $("#box" + i)
                    box.off("click")
                }
            }
        } else if (box1.innerHTML !== " " && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) {
            if (player !== "x") {
                alert("x wins");
                // playerOneScore++
                // $("#playerOne").html("Player One: " + playerOneScore)
                for (i = 1; i < 10; i++) {
                    box = $("#box" + i)
                    box.off("click")
                }
            } else {
                alert("o wins")
                // playerTwoScore++
                // $("#playerTwo").html("Player Two: " + playerTwoScore)
                for (i = 1; i < 10; i++) {
                    box = $("#box" + i)
                    box.off("click")
                }
            }

        } else if (box2.innerHTML !== " " && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) {
            if (player !== "x") {
                alert("x wins");
                // playerOneScore++
                // $("#playerOne").html("Player One: " + playerOneScore)
                for (i = 1; i < 10; i++) {
                    box = $("#box" + i)
                    box.off("click")
                }
            } else {
                alert("o wins")
                // playerTwoScore++
                // $("#playerTwo").html("Player Two: " + playerTwoScore)
                for (i = 1; i < 10; i++) {
                    box = $("#box" + i)
                    box.off("click")
                }
            }

        } else if (box3.innerHTML !== " " && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) {
            if (player !== "x") {
                alert("x wins");
                // playerOneScore++
                // $("#playerOne").html("Player One: " + playerOneScore)
                for (i = 1; i < 10; i++) {
                    box = $("#box" + i)
                    box.off("click")
                }
            } else {
                alert("o wins")
                // playerTwoScore++
                // $("#playerTwo").html("Player Two: " + playerTwoScore)
                for (i = 1; i < 10; i++) {
                    box = $("#box" + i)
                    box.off("click")
                }
            }

        } else if (box1.innerHTML !== " " && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) {
            if (player !== "x") {
                alert("x wins");
                // playerOneScore++
                // $("#playerOne").html("Player One: " + playerOneScore)
                for (i = 1; i < 10; i++) {
                    box = $("#box" + i)
                    box.off("click")
                }
            } else {
                alert("o wins")
                // playerTwoScore++
                // $("#playerTwo").html("Player Two: " + playerTwoScore)
                for (i = 1; i < 10; i++) {
                    box = $("#box" + i)
                    box.off("click")
                }
            }

        } else if (box3.innerHTML !== " " && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) {
            if (player !== "x") {
                alert("x wins");
                // playerOneScore++
                // $("#playerOne").html("Player One: " + playerOneScore)
                for (i = 1; i < 10; i++) {
                    box = $("#box" + i)
                    box.off("click")
                }
            } else {
                alert("o wins")
                // playerTwoScore++
                // $("#playerTwo").html("Player Two: " + playerTwoScore)
                for (i = 1; i < 10; i++) {
                    box = $("#box" + i)
                    box.off("click")
                }
            }
        } if (box1.innerHTML !== " " && box2.innerHTML !== " " && box3.innerHTML !== " " && box4.innerHTML !== " "
            && box5.innerHTML !== " " && box6.innerHTML !== " " && box7.innerHTML !== " " && box8.innerHTML !== " " && box9.innerHTML !== " ") {
            alert("Tie")
            
            }
        }
    }

    // reset button function
       $("#resetButton").click(function () {
        //   box1 = $("#box1").html() 
        //   box2 = $("#box2").html() 
        //   box3 = $("#box3").html() 
        //   box4 = $("#box4").html() 
        //   box5 = $("#box5").html() 
        //   box6 = $("#box6").html() 
        //   box7 = $("#box7").html() 
        //   box8 = $("#box8").html() 
        //   box9 = $("#box9").html() 
          location.reload()
    });

// creating Player One and Player Two

// Calling the winner function
$(() => {
    getWinner()
})
