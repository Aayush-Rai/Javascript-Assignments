



let numberOfFields = prompt("Enter Number of Fields");

const obj1 = {};

for(let i =1; i<=numberOfFields; i++){

 let key =   prompt(`Enter Key for the field ${i}`);
 let value = prompt(`Enter Value for the field ${i}`);

 obj1[key] = value;

}


for(let key in obj1){
    document.write(`<h1>  ${key}: ${obj1[key]} </h1>`);
    document.write("\n");
}