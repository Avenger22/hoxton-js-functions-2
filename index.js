/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

console.log("users: ", window.users);
console.log("todos: ", window.todos);

function checkingUserInput (userInputLetterParameter) {
    let stringToArray = userInputLetterParameter.split("")
    if ( Number(userInputLetterParameter) || stringToArray.length >= 2 ) {

        alert("Please enter again this time enter a character not a number, or a multi letters, or empty or maybe you entered more than one letter, or empty : ")
        console.log("Please enter again this time enter a character not a number, or empty, or 2 or more letters ! : ")
        userInputLetter = prompt("Hi User, please enter a letter : ")

        if ( Number(userInputLetter) || stringToArray.length >= 2 ) {
            alert("You are troller !")
            throw new Error("Troll he doesnt follow the instuctions!")
        }

    }
}

function checkingUserIdInput (userInputIdParameter) {
    
    if (Number.isNaN(userInputIdParameter)) {
    alert("Please user enter a number not a string")
    userInputIdParameter = Number(prompt("Please enter again this time a number : "))

        if (Number.isNaN(userInputIdParameter)) {
            alert("Sorry User we terminate the program you are trolling us.")
            throw new Error("This user is trolling entering numbers in place of string")
        }
    }

}

let userInputLetter = prompt("Hi User, please enter a letter : ")
checkingUserInput(userInputLetter)

const userWhoContainsLetterInput = users.filter (
    function (userInputLetter) {
        let messageDisplay = ``
        for (const element of users) {
            if (element.name.includes(userInputLetter)) {
                messageDisplay += `Hi user : ${element.name} \n`
            }

            // else {
            //     console.log("It has no match for the letter")
            //     alert("It has no match")
            // }
        }
        console.log(messageDisplay)
        alert(messageDisplay)
    }
)

let userIdInput = Number(prompt("Enter User id in number :"))
checkingUserIdInput(userIdInput)

const userToDoWhoHasId = todos.filter(
    function (userIdInput) {
        let messageDisplay = ``
        for (const element of todos) {
            if (element.userId === userIdInput && element.completed === false) {
                messageDisplay += `Hi user with todo title: ${element.title} 
                \n and todo id : ${element.id} 
                \n and the status : ${element.completed}`
            }
            console.log(messageDisplay)
            alert(messageDisplay)
        }
    }
)



