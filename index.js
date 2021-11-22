/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

console.log("users: ", window.users);
console.log("todos: ", window.todos);

function checkingUserLetterInput (userInputLetterParameter) {

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

function checkingUserIdNumberInput (userInputIdParameter) {
    
    if ( Number.isNaN(userInputIdParameter) || (userInputIdParameter > 10 || userInputIdParameter < 1) ) {
    alert("Please user enter a number not a string dont enter big values or negative")
    userInputIdParameter = Number(prompt("Please enter again this time a number 1-10 : "))

        if (Number.isNaN(userInputIdParameter)) {
            alert("Sorry User we terminate the program you are trolling us.")
            throw new Error("This user is trolling entering numbers in place of string")
        }
    }

}

function sayingHiToUserMatching (userLetterInputFilterParameter) {
    for (let element of userLetterInputFilterParameter) {
        console.log(`Hi : ${element.name} \n`)
    }
}

function userNumberInputMatch (userNumberInputFilterParameter) {
    
    let counterCompleted = 0
    let counterNotCompleted = 0
    for (let element of userNumberInputFilterParameter) {
        if (element.completed === false) {
            counterCompleted++
            console.log(`user id : ${element.userId} \n  and the todoId : ${element.id} \n status : ${element.completed} \n`)
        }
        else {
            counterNotCompleted++
        }
    }

    if(counterCompleted === 0) {
        // message empty. Nothing was found
        console.log(`Everything was not completed so : ${counterCompleted} of completed items \n and number of unclompleted items is : ${counterNotCompleted}`)
    }

    else {
        console.log(`Number of completed todos is : ${counterCompleted} \n wheares uncompleted were ${counterNotCompleted}`)
    }

}

let userInputLetter = prompt("Hi User, please enter a letter : ")
checkingUserLetterInput(userInputLetter)

let userIdInput = Number(prompt("Enter User id in number from 1-10 :"))
checkingUserIdNumberInput(userIdInput)

let userLetterInputFilter = users.filter(function(user) {
        return user.name.includes(userInputLetter)
})
console.log(userLetterInputFilter)

let userNumberInputFilter = todos.filter(function(todo) {
        return todo.userId === userIdInput
})
console.log(userNumberInputFilter)

// let functionCatcher = sayingHiToUserMatching(userLetterInputFilter)
// let intervalHiUser = setInterval(functionCatcher, 20000)

sayingHiToUserMatching(userLetterInputFilter)
userNumberInputMatch(userNumberInputFilter)