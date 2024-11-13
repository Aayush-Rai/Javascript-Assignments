


let numberOfUsers = prompt("Enter number of Users");

document.write(`<h1> Number of Users ${numberOfUsers} </h1>`);   

let userNames = [];

for(let i =0; i<Number(numberOfUsers); i++){

    let str = prompt(`Enter User ${i+1} Name`);
    userNames.push(str);

}

let index =1;

for(let user of userNames){
    document.write(`<h2> ${index}. ${user} </h2>`);
    index++;
}