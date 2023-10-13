
//Assignment 1

// function grade(grade1){
//     if (grade1 >= 80){
//         console.log("You did a good job")
//     }
//     else if (grade1 >= 70){
//         console.log("Keep trying")
//     }
//     else if (grade1 >= 60){
//         console.log("ehhhh")
//     }
//     else if (grade1 >= 55){
//         console.log("Not too good")
//     }
//     else {
//         console.log("Bad grade but you'll get em next time")
//     }
    
// }

// grade(67)

//Assignment 2

// function multiple(number){
//     for(let i = 1; i <= number; i++){
//         if (i % 10 === 0){
//             console.log(i)
//         }
//     }
// }

// multiple(101)

//Assignment 3

// function quarter(bill, price){
// let i = 0
// let quarters = 0
// while (i < bill - price){
//     quarters += 4
//     i++
// }
// console.log(quarters)}
// quarter(10,4)

//Assignment 4

// function denominations(change){
//     let twenty = 0
//     let ten = 0
//     let five = 0
//     let one = 0

//     twenty = change / 20
//     change = change % 20

//     ten = change / 10
//     change = change % 10

//     five = change/5
//     change = change % 5

//     one = change

//     console.log("Twenty: " + parseInt(twenty) + " Ten: " + parseInt(ten) + " Five: " + parseInt(five) + " One: " + parseInt(one))

// }
// denominations(101)

//Assignment 5

for(let i =1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
    }
    else if (i % 3 == 0){
        console.log("Fizz")
    }
    else if (i % 5 == 0 && i % 3 != 0){
        console.log("Buzz")
    }
    else {
        console.log(i)
    }
}