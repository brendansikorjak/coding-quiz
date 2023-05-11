var question = document.getElementById("header")
var removeDescription = document.getElementById("description")

var message = document.getElementById("correct-incorrect")
var startBTN = document.getElementById("start-btn")
var countdown = document.getElementById("timer-num")

var choices = document.getElementById("choices")

// starts the game
function startGame() {
    addEventListener("click", () => {
        startBTN.remove()
    })
    q1()

    // timer
    var timeLeft = 31;
    var timeInterval = setInterval(function () {
        timeLeft--;
        countdown.textContent = timeLeft + " seconds remaining"
        if (timeLeft <= 0) {
            clearInterval(timeInterval)
            countdown.textContent = ""
            timeLeft = 0
            gameOver()
        }
    }, 1000);

    // displays final score
    function gameOver() {
        if (timeLeft <= 0) {
            question.textContent = "Game Over"
            clearInterval(timeInterval)
            countdown.textContent = ""
            timeLeft = 0
            removeDescription.textContent = "Your final score is: " + timeLeft
        } else {
            question.textContent = "Game Over"
            clearInterval(timeInterval)
            countdown.textContent = ""
            removeDescription.textContent = "Your final score is: " + timeLeft
        }
    }

    // correct/incorrect message
    function correct() {
        message.textContent = "Correct"
        console.log("correct")
    }

    function incorrect() {
        message.textContent = "Incorrect"
        timeLeft = timeLeft - 10
        console.log("incorrect")
    }

    // questions
    function q1() {
        question.textContent = "What number does Jacob Trouba wear?"
        removeDescription.textContent = ""

        // question 1 choices
        var c1q1 = document.createElement("button")
        choices.appendChild(c1q1)
        c1q1.textContent = "8"

        c1q1.addEventListener("click", function () {
            console.log("you picked 8")
            correct()
            q2()
            c1q1.remove()
            c2q1.remove()
            c3q1.remove()
            c4q1.remove()
        })

        var c2q1 = document.createElement("button")
        choices.appendChild(c2q1)
        c2q1.textContent = "9"

        c2q1.addEventListener("click", function () {
            console.log("you picked 9")
            incorrect()
            q2()
            c1q1.remove()
            c2q1.remove()
            c3q1.remove()
            c4q1.remove()
        })

        var c3q1 = document.createElement("button")
        choices.appendChild(c3q1)
        c3q1.textContent = "7"

        c3q1.addEventListener("click", function () {
            console.log("you picked 7")
            incorrect()
            q2()
            c1q1.remove()
            c2q1.remove()
            c3q1.remove()
            c4q1.remove()
        })

        var c4q1 = document.createElement("button")
        choices.appendChild(c4q1)
        c4q1.textContent = "5"

        c4q1.addEventListener("click", function () {
            console.log("you picked 5")
            incorrect()
            q2()
            c1q1.remove()
            c2q1.remove()
            c3q1.remove()
            c4q1.remove()
        })

    }

    function q2() {
        question.textContent = "What number does Igor Shesterkin wear?"
        removeDescription.textContent = ""

        // question 2 choices
        var c1q2 = document.createElement("button")
        choices.appendChild(c1q2)
        c1q2.textContent = "30"

        c1q2.addEventListener("click", function () {
            console.log("you picked 30")
            incorrect()
            q3()
            c1q2.remove()
            c2q2.remove()
            c3q2.remove()
            c4q2.remove()
        })

        var c2q2 = document.createElement("button")
        choices.appendChild(c2q2)
        c2q2.textContent = "31"

        c2q2.addEventListener("click", function () {
            console.log("you picked 31")
            correct()
            q3()
            c1q2.remove()
            c2q2.remove()
            c3q2.remove()
            c4q2.remove()
        })

        var c3q2 = document.createElement("button")
        choices.appendChild(c3q2)
        c3q2.textContent = "32"

        c3q2.addEventListener("click", function () {
            console.log("you picked 32")
            incorrect()
            q3()
            c1q2.remove()
            c2q2.remove()
            c3q2.remove()
            c4q2.remove()
        })

        var c4q2 = document.createElement("button")
        choices.appendChild(c4q2)
        c4q2.textContent = "35"

        c4q2.addEventListener("click", function () {
            console.log("you picked 35")
            incorrect()
            q3()
            c1q2.remove()
            c2q2.remove()
            c3q2.remove()
            c4q2.remove()
        })

    }

    function q3() {
        question.textContent = "What number does Patrick Kane wear?"
        removeDescription.textContent = ""

        // question 3 choices
        var c1q3 = document.createElement("button")
        choices.appendChild(c1q3)
        c1q3.textContent = "91"

        c1q3.addEventListener("click", function () {
            console.log("you picked 91")
            incorrect()
            q4()
            c1q3.remove()
            c2q3.remove()
            c3q3.remove()
            c4q3.remove()
        })

        var c2q3 = document.createElement("button")
        choices.appendChild(c2q3)
        c2q3.textContent = "10"

        c2q3.addEventListener("click", function () {
            console.log("you picked 10")
            incorrect()
            q4()
            c1q3.remove()
            c2q3.remove()
            c3q3.remove()
            c4q3.remove()
        })

        var c3q3 = document.createElement("button")
        choices.appendChild(c3q3)
        c3q3.textContent = "93"

        c3q3.addEventListener("click", function () {
            console.log("you picked 93")
            incorrect()
            q4()
            c1q3.remove()
            c2q3.remove()
            c3q3.remove()
            c4q3.remove()
        })

        var c4q3 = document.createElement("button")
        choices.appendChild(c4q3)
        c4q3.textContent = "88"

        c4q3.addEventListener("click", function () {
            console.log("you picked 88")
            correct()
            q4()
            c1q3.remove()
            c2q3.remove()
            c3q3.remove()
            c4q3.remove()
        })
    }

    function q4() {
        question.textContent = "What number does Adam Fox wear?"
        removeDescription.textContent = ""

        // question 4 choices
        var c1q4 = document.createElement("button")
        choices.appendChild(c1q4)
        c1q4.textContent = "2"

        c1q4.addEventListener("click", function () {
            console.log("you picked 2")
            incorrect()
            q5()
            c1q4.remove()
            c2q4.remove()
            c3q4.remove()
            c4q4.remove()
        })

        var c2q4 = document.createElement("button")
        choices.appendChild(c2q4)
        c2q4.textContent = "3"

        c2q4.addEventListener("click", function () {
            console.log("you picked 3")
            incorrect()
            q5()
            c1q4.remove()
            c2q4.remove()
            c3q4.remove()
            c4q4.remove()
        })

        var c3q4 = document.createElement("button")
        choices.appendChild(c3q4)
        c3q4.textContent = "23"

        c3q4.addEventListener("click", function () {
            console.log("you picked 23")
            correct()
            q5()
            c1q4.remove()
            c2q4.remove()
            c3q4.remove()
            c4q4.remove()
        })

        var c4q4 = document.createElement("button")
        choices.appendChild(c4q4)
        c4q4.textContent = "24"

        c4q4.addEventListener("click", function () {
            console.log("you picked 24")
            incorrect()
            q5()
            c1q4.remove()
            c2q4.remove()
            c3q4.remove()
            c4q4.remove()
        })
    }

    function q5() {
        question.textContent = "What number does Mika Zibanejad wear?"
        removeDescription.textContent = ""

        // question 5 choices
        var c1q5 = document.createElement("button")
        choices.appendChild(c1q5)
        c1q5.textContent = "91"

        c1q5.addEventListener("click", function () {
            console.log("you picked 91")
            incorrect()
            gameOver()
            c1q5.remove()
            c2q5.remove()
            c3q5.remove()
            c4q5.remove()
        })

        var c2q5 = document.createElement("button")
        choices.appendChild(c2q5)
        c2q5.textContent = "92"

        c2q5.addEventListener("click", function () {
            console.log("you picked 92")
            incorrect()
            gameOver()
            c1q5.remove()
            c2q5.remove()
            c3q5.remove()
            c4q5.remove()
        })

        var c3q5 = document.createElement("button")
        choices.appendChild(c3q5)
        c3q5.textContent = "93"

        c3q5.addEventListener("click", function () {
            console.log("you picked 93")
            correct()
            gameOver()
            c1q5.remove()
            c2q5.remove()
            c3q5.remove()
            c4q5.remove()
        })

        var c4q5 = document.createElement("button")
        choices.appendChild(c4q5)
        c4q5.textContent = "94"

        c4q5.addEventListener("click", function () {
            console.log("you picked 94")
            incorrect()
            gameOver()
            c1q5.remove()
            c2q5.remove()
            c3q5.remove()
            c4q5.remove()
        })
    }
}