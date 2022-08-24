let input = document.querySelector(".input-buscador");

let boton = document.querySelector(".buscar");

input.focus();

function clear() {
    input.value = "";
}

function clearInput() {
    setTimeout(clear, 50);
}

function buscarGoogle() {
    let url = 'https://www.google.com/search?q=' + input.value;
    window.open(url, '_self');
}

function buscarYouCode() {
    let url = 'https://you.com/search?q=' + input.value + "&tbm=youcode";
    window.open(url, '_self');
    clearInput();
}



boton.onclick = () => {
    if (input.value === "") {
    }
    else {
        buscarYouCode();
    }
}


input.addEventListener( "keyup", e => {
    if (e.key === "Enter") {
        if (input.value === "") {
        }
        else {
            buscarYouCode();
        }
    }
})
