document.getElementById("button").addEventListener("click",function (e) {
    e.preventDefault();

    let name =document.getElementById("name").value.trim();

    let email =document.getElementById("email").value.trim();

    let passwaord =document.getElementById("password").value.trim();



    if (name==="") {
        alert("name is required");
        return;
    }

    if (email==="") {
        alert("email is required");
        return;
    }

    if (passwaord==="") {
        alert("password is required");
        return;
    }

    if (!email.endsWith("@gmail.com")) {
        alert("Gmail is invalid ,Please enter a valid email addres e,g:(@example.com)");
    }

    if (passwaord.length<6) {
        alert("password is weak it must be 6 character ");
    }
    
    else{
        alert("login succes")
    }
})