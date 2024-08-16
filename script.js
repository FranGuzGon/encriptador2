
const textArea = document.querySelector(".area__encriptacion__presentacion__texto");
const mensaje = document.querySelector(".area__visualizacion__texto__contenido");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    ocultarDiv1();
    ocultarDiv2();
    document.querySelector(".area__visualizacion__texto__boton__copiar").style.display = "block";
    mostrarTexto();

}

function encriptar(stringEncriptada){
    let codigosEncriptacion = [["e", "enter"], ["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < codigosEncriptacion.length; i++) {
        if(stringEncriptada.includes(codigosEncriptacion[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(codigosEncriptacion[i][0], codigosEncriptacion[i][1])

        }

    }
    return stringEncriptada;
}

function botonDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value ="";
    mensaje.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptada) {
    let codigosEncriptacion = [["e", "enter"], ["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < codigosEncriptacion.length; i++){
        if(stringDesencriptada.includes(codigosEncriptacion[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(codigosEncriptacion[i][1], codigosEncriptacion[i][0])
        }
    }
    return stringDesencriptada;
}

function botonCopiar() {
    copiar()
    mensaje.value = "";
    mensaje.style.backgroundImage = "none";
    
}

function copiar(){
    navigator.clipboard.writeText(mensaje.value);
    
}

function ocultarDiv1(){
    let miDiv1 = document.getElementById("div1")
    miDiv1.style.display = "none";
}

function ocultarDiv2(){
    let miDiv2 = document.getElementById("div2")
    miDiv2.style.display = "none";
}

function mostrarTexto() {
    const  mediaQuery = window.matchMedia("(max-width: 778px)");
    const  mediaQuerySmall = window.matchMedia("(max-width: 375px)");

    const  area = document.querySelector(".area")
    const  areaEncriptacion = document.querySelector(".area__encriptacion")
    const  areaEncriptacionTexto = document.querySelector(".area__encriptacion__presentacion__texto")
    const  areaVisualizacionTexto = document.querySelector(".area__visualizacion__texto");
    const  areaVisualizacionTextoContenido = document.querySelector(".area__visualizacion__texto__contenido");
    
    

    if (mediaQuery.matches) {
        area.style.height = "1269px"
        areaVisualizacionTexto.style.height = "343px"
        areaVisualizacionTextoContenido.style.display = "block";
        areaVisualizacionTextoContenido.style.height = "180px";

        if (mediaQuerySmall.matches) {
            area.style.height = "1667px"
            areaEncriptacion.style.height = "1008px"
            areaEncriptacionTexto.style.height = "624px";
            areaVisualizacionTexto.style.height = "595px";
            areaVisualizacionTextoContenido.style.height = "432px"
            
        }
    
    } else {
             areaVisualizacionTextoContenido.style.height = "781px"

    }
}
    


