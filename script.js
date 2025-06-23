//your JS code here. If required.

let btn=document.querySelector("button");

btn.addEventListener("click",function(event){

    event.preventDefault();

    let inp1=document.querySelector("#First-name");
    let inp2=document.querySelector("#Last-name");
    let inp3=document.querySelector("#First-name");
    let inp4=document.querySelector("#email");


    alert(`First Name: ${inp1.value} Last Name: ${inp2.value} Phone Number: ${inp3.value} Email ID: ${inp4.value}`);



})

