/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

console.log("users: ", window.users);
console.log("todos: ", window.todos);

function checkingUserLetterInput(userInputLetterParameter) {
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

function checkingUserIdNumberInput(userInputIdParameter) {
    if ( Number.isNaN(userInputIdParameter) || (userInputIdParameter > 10 || userInputIdParameter < 1) ) {
    alert("Please user enter a number not a string dont enter big values or negative")
    userInputIdParameter = Number(prompt("Please enter again this time a number 1-10 : "))

        if (Number.isNaN(userInputIdParameter)) {
            alert("Sorry User we terminate the program you are trolling us.")
            throw new Error("This user is trolling entering numbers in place of string")
        }
    }
}

function checkingUserProperty(userInputPropertyParameter) {
    if (Number(userInputPropertyParameter)) {
        console.log("Enter a string not a number")
        alert("Enter a name not number")
        if (Number(userInputPropertyParameter)) {
            throw new Error("Troll")
        }
    }
}

// function checkingUserEmailInput(userInputPropertyParameter) {
//     for (let element of users) {
//         if (element.name === userInputPropertyParameter) {
//             return `Name : ${element.name} and email is : ${element.email}`
//         }
//     }

// }

function userNumberInputMatch(userNumberInputFilterParameter) {
    let counterCompleted = 0
    let counterNotCompleted = 0

    for (let element of userNumberInputFilterParameter) {
        if (element.completed === false) {
            counterCompleted++
            console.log(`user id : ${element.userId} \n and the todoId : ${element.id} \n status : ${element.completed} \n`)
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

//--------------------------------------------------------------
let userInputLetter = prompt("Hi User, please enter a letter : ")
checkingUserLetterInput(userInputLetter)

let userIdInput = Number(prompt("Enter User id in number from 1-10 :"))
checkingUserIdNumberInput(userIdInput)

let userLetterInputFilter = users.filter(function(user) {
    // return user.name.toUpperCase().includes(userInputLetter.toUpperCase())
    return user.name.includes(userInputLetter)
})
console.log(userLetterInputFilter)

let userNumberInputFilter = todos.filter(function(todo) {
    return todo.userId === userIdInput
})
console.log(userNumberInputFilter)

let userIndex = 0
// setInterval :: (function, ms: number) => id: number
if (userLetterInputFilter.length > 0) {
    const intervalId = setInterval(function () {
      const user = userLetterInputFilter[userIndex]
      console.log(`Hello, ${user.name}!`)
      userIndex += 1
      if (userIndex === userLetterInputFilter.length) clearInterval(intervalId)
    }, 2000)
  } 

  else {
    console.log('Found no users...')
  }

// let storeEmail = checkingUserEmailInput(userInputProperty)
// console.log(storeEmail)
userNumberInputMatch(userNumberInputFilter)
let userInputProperty = prompt("Enter the name and we find the email : ")
checkingUserProperty(userInputProperty)
