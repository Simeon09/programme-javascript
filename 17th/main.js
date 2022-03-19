// let number1 = 5
// let number2 = 10
// console.log(number2 % number1)
//  console.log(citrus)
// const fruis = ["Banana", "Orange", "Apple", "Mango"];
// fruis.splice(2, 2, "Lemon", "Kiwi");
// console.log(fruis) 
// console.log(fruis)


// let y = 4
// let z = 15
// if (y == z ){
//     console.log("Hello World!")
// }

// else if (y > z){
//     console.log("Greater")
// }

// else if (y < z){
//     console.log("Less")
// }
// else{
//     console.log("Plan B executed")
// }



// alert("Welcome to my website kindly sign up before you can login to access your dashboard")

// let username, password
// username = prompt("Enter your prefered username")
// password = prompt("Enter your prefered password")

// const data = {
//     "username": username,
//     "password": password,
// }

// alert("Signup successful, kindly proceed to login by clicking ok")
// let loginUsername = prompt("Enter username")
// let loginPassword = prompt("Enter password")

// if ((data["username"] == loginUsername) && (data["password"] == loginPassword)){
//     alert("Login Successful")
//     user.innerHTML = loginUsername
// }

// else if ((data["username"] == loginUsername) && (data["password"] != loginPassword)){
//     alert("Password Incorrect")
// }

// else if ((data["username"] != loginUsername) && (data["password"] != loginPassword)){
//     alert("Username and Password Incorrect")
// }

/*
Three friends went to eat in a resturant and the their total bill was
N10,000. Write a program with javascript to calculate how much each of 
them would pay if they are to leave 30% to their total bill.

A store is making discount on sales, write a program to ask a user how much
his or her purchase is. If the user purchase price is less than N2000 then
the user should have 10% discount on his / her purchase, if the user purchase
price is between N2000 and N5000 then the user should have 20% discount and if
the purchase if above N5000 then the user should have 30% discount.

Then your program should display the initial price, discount price and new
purchase price after removing the discount price from it.

NOTE: Ensure your display your output on the console and also the webpage.
*/ 
alert ("welcome to my small calculator")
 let Name, totalbill , tips
 Name = prompt ("Enter ur Name")
 totalbill = prompt("Enter ur total bill")
 tips  = prompt ("enter ur tips in percentage")
 divide = prompt ('enter the total number to share the money')

  var bill = parseInt(totalbill);
  var tip = parseInt(tips);
  var div = parseInt(divide);
 
 
 let grandtotal = bill + (tip/100 * bill)
 let share = grandtotal/div
 console.log(grandtotal)
 console.log(share)
 question.innerHTML = grandtotal
 division.innerHTML = share
 document.getElementById('identity').innerHTML= Name;





 alert (" welcome to discount calculator")
 
 let purchase = prompt ('Enter ur purchase price')
 let two = 2000
 let five = 5000
 
 let prize = parseInt(purchase)
 let tendiscount = (10/100  * prize)
 let twentydiscount = ( 20/100 * prize)
 let thirtydiscount = ( 30/100 * prize)
 let newprizethree = ( prize -thirtydiscount)
 let newprizetwo = (prize - twentydiscount )
 let newpriceone = ( prize - tendiscount )
 


 if (prize < two){
     console.log("you have a 10% discount")
     console.log(tendiscount)
     console.log(newpriceone)
     tell.innerHTML = "you have a 10% discount"
     book.innerHTML = purchase
     count.innerHTML = tendiscount
     New.innerHTML = newpriceone 
     document.getElementById('identit').innerHTML= Name;


 }
  else if ((prize > two ) && ( prize < five) ){
       console.log("you have 20% discount")
       console.log(twentydiscount)
       console.log (newprizetwo)
       tell.innerHTML = "you have a 20% discount"
       book.innerHTML = purchase
       count.innerHTML = twentydiscount
       New.innerHTML = newprizetwo
       document.getElementById('identit').innerHTML= Name;
  }

  else if ( prize >= five){
      console.log("you have 30% discout")
      console.log( thirtydiscount)
      console.log(newprizethree)
      tell.innerHTML = "you have a 30% discount"
      book.innerHTML = purchase
      count.innerHTML = thirtydiscount
      New.innerHTML = newprizethree
      document.getElementById('identit').innerHTML= Name;
  }


 
