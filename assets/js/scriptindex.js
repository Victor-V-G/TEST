
/*FUNCION VALIDAR ENLAZADA AL BOTON CON  onclick="validar()"  esto significa que al dar click
en el boton, se ejecutara este script*/
function validar(){
    /*SEGMENTO DE LA CELDA NOMBRE*/
    let eNombre = document.getElementById("nombre") /*RECUPERA EL ELEMENTO MEDIANTE LA ID NOMBRE, ALMACENANDOLO EN eNombre */
    let vNombre = eNombre.value
    let eErrorNombre = document.getElementById("errorNombre")
    
    let eApellido = document.getElementById("apellido")
    let vApellido = eApellido.value
    let eErrorApellido = document.getElementById("errorApellido")

    /*SIRVE PARA LLAMAR A LA FUNCION VALIDARLARGOMINIMO */
    validarLargoMinimo(eNombre,vNombre,eErrorNombre)
    validarLargoMinimo(eApellido,vApellido,eErrorApellido)
   

}

/*OTRA MANERA PARA SIMPLIFICAR LAS FUNCIONES Y VALIDACIONES */
function validarLargoMinimo(elemento,valor,eError){
    if(valor.length==0 ){
        console.log("Debes completar este campo")
        alert("Debes completar este campo")
    }
    else if(valor.length > 3){
        console.log("Cumple")
        eError.innerText = ""
        elemento.style.backgroundColor = "green"
        elemento.style.color = "white"
    }
    else{
        console.log("Error, Pocos caracteres")
        alert("Debes ingresar al menos 3 caracteres")
        eError.innerText = "Debes ingresar 3 caracteres como minimo"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
    }
}