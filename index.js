const textArea = document.querySelector(".texto");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
    const textArea = document.querySelector(".texto");
    const mensaje = document.querySelector(".mensaje");
    const btnCopiar = document.getElementById("btn-copiar");
    const imagen = document.getElementById("muñeco");
    const tituloMensaje = document.querySelector(".mensaje-encriptado h2");
    const parrafoMensaje = document.querySelector(".mensaje-encriptado p");

    // Verifica si el textarea está vacío
    if (textArea.value.trim() === "") {
        swal("Debe ingresar alguna letra.");
        return; // Sale de la función si el textarea está vacío
    }

    // Realiza la encriptación si el textarea no está vacío
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";

    // Oculta la imagen
    if (imagen) {
        imagen.style.display = "none";
    }

    // Elimina h2 y p dentro del div con class "mensaje-encriptado"
    if (tituloMensaje) {
        tituloMensaje.style.display = "none";
    }
    if (parrafoMensaje) {
        parrafoMensaje.style.display = "none";
    }

    // Muestra el botón Copiar
    if (btnCopiar) {
        btnCopiar.style.display = "block"; // Muestra el botón
    }
}

function copiarTexto() {
    const mensaje = document.querySelector(".mensaje");
    mensaje.select();
    mensaje.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copia el texto al portapapeles
    document.execCommand("copy");

    // (Opcional) Muestra una alerta o mensaje de confirmación
    swal("Texto copiado: " + mensaje.value);
}


function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}


function btnDesencriptar() {
    const textArea = document.querySelector(".texto");
    const mensaje = document.querySelector(".mensaje");

    // Verifica si el textarea está vacío
    if (textArea.value.trim() === "") {
        swal("Debe ingresar alguna letra.");
        return; // Sale de la función si el textarea está vacío
    }

    // Aquí puedes añadir la lógica para desencriptar el texto
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";

    // Muestra el botón Copiar
    const btnCopiar = document.getElementById("btn-copiar");
    if (btnCopiar) {
        btnCopiar.style.display = "block"; // Muestra el botón
    }
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

    }
    return stringDesencriptada;
}