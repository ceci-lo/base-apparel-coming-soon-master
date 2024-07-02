console.log("hola");

let email = document.getElementById("eAddress");

let boton = document.getElementById("btn");

boton.addEventListener("click", (e)=>{
    e.preventDefault();

    console.log(email.value);
});