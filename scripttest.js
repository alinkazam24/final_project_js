// let name1 = "Vladislav";
// let name2 = "Alina";
// let name3 = "vitali";

const subName = ['Vladislav', 'Alina', 'Vitali', 'Igor', 'Irina', 'Oleg', 'Anna'];


// document.body.innerHTML += `hello ${name1}<br>`;
// document.body.innerHTML += `hello ${name2}<br>`;
// document.body.innerHTML += `hello ${name3}<br>`;


function greetName(name){
    document.body.innerHTML += `hello ${name}<br>`;
}



subName.forEach((name)=>{
    greetName(name);
});
