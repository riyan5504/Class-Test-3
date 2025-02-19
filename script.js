

// let age;

// age = 8;

// if(age>=60){
//     console.log("Ticket Price is $8")
// }

// else if(age>=18){
//     console.log("Ticket Price is $15")
// }

// else if(age>=5){
//     console.log("Ticket Price is $10")
// }

// else {
//     console.log("Ticket is Free")
// }

let num = [56,43,78,90,23,46,87,55,33,62];

for(let i = 0; i<=9; i++)

    if(num[i]%2 == 0){
        console.log(num[i] + " is Even Number")
    }
    else {
        console.log(num[i] + " is Odd Number")
    }

let num1 = [56,-43,78,90,-23,46,87,55,-33,62];

for(let i = 0; i<=9; i++)

    if(num1[i]>0){
        console.log(num1[i] + " is a Posetive Number")
    }

    else{
        console.log(num1[i] + " is a Negetive Number")
    }

let age = [56,3,78,5,23,46,17,55,33,62];

for(let i = 0; i<=9; i++)

    if(age[i]>=18){
        console.log('Your age is ' +age[i]+ ', You are eligible for voting')
    }

    else{
        console.log("Your age is " +age[i]+ ", You are not eligible for voting")
    }



let year = [1999,1976,2002,1768,2030,2056,2010];

for(let i = 0; i <=6; i++)

    if(year[i]%4 ==0){
        console.log(year[i] + "= this year is leap year")
    }

    else{
        console.log(year[i] + "= this year is not leap year")
    }

