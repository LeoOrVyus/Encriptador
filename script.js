const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizcodigo.length; i++){
        if(stringEncriptada.includes(matrizcodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1])
        }
    }

    return stringEncriptada
}


function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    

}


function desencriptar(stringDesencriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }


    }
    return stringDesencriptada
    
}

function copiar() {
    const btncopiar = document.querySelector(".copiar");

    const input = document.querySelector(".mensaje");
    btncopiar.addEventListener("click",function(){
        input.focus(); 
    document.execCommand("selectAll");
    document.execCommand("copy");
    swal("Texto copiado con éxito", " ", "success")
    }) 
}