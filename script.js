function getWinner() {
    let player = "x"
    counter = ""
    let box1 = document.getElementById("box1")
    box2 = document.getElementById("box2")
    box3 = document.getElementById("box3")
    box4 = document.getElementById("box4")
    box5 = document.getElementById("box5")
    box6 = document.getElementById("box6")
    box7 = document.getElementById("box7")
    box8 = document.getElementById("box8")
    box9 = document.getElementById("box9")

    for (i = 1; i < 10; i++) {
        box = $("#box" + i)
        box.one('click', oneClick)
    }
    function oneClick() {
        this.innerHTML = player
        if (player === "x") {
            player = "o"
        }
        else if (player === "o") {
            player = "x"
        }
        this.removeEventListener("click", oneClick)
        // get all possibilities

        if (box1.innerHTML !== " " && box1.innerHTML === box2.innerHTML && box2.innerHTML === box3.innerHTML) {
            console.log("win");
        } else if (box4.innerHTML !== " " && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) {
            console.log("win");
        } else if (box7.innerHTML !== " " && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) {
            console.log("win");
        } else if (box1.innerHTML !== " " && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) {
            console.log("win");
        } else if (box1.innerHTML !== " " && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) {
            console.log("win");
        } else if (box2.innerHTML !== " " && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) {
            console.log("win");
        } else if (box3.innerHTML !== " " && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) {
            console.log("win");
        } else if (box1.innerHTML !== " " && box1.innerHTML === box4.innerHTML && box1.innerHTML === box9.innerHTML) {
            console.log("win");
        } else if (box3.innerHTML !== " " && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) {
            console.log("win");
        }
    }
$("#resetButton").click(function() {
    location.reload()
})
}

$(() => {
    getWinner()
})
