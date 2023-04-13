const div = document.getElementsByTagName("div");
const avisoLegal = document.getElementById("avisoLegal");
const cookies = document.getElementById("cookies");
const privacidad = document.getElementById("privacidad");
const spanNombre = document.getElementsByClassName("nombreSpan");
const spanEmail = document.getElementsByClassName("emailSpan");

function generateAvisoLegal() {
    reset();
    avisoLegal.style.display = 'block';
    generateText();
}

function generateCookies() {
    reset();
    cookies.style.display = 'block';
    generateText();
}

function generatePrivacidad() {
    reset();
    privacidad.style.display = 'block';
    generateText();
}

function generateText() {
    const nombre = document.getElementById("nombre").value;
    for (let i = 0; i < spanNombre.length; i++) {
        spanNombre[i].innerHTML= nombre;
    }
    const email = document.getElementById("email").value;
    for (let i = 0; i < spanEmail.length; i++) {
        spanEmail[i].innerHTML= email;
    }
}

function reset(){
    for (let i = 0; i < div.length; i++) {
        div[i].style.display = 'none';
    }
}