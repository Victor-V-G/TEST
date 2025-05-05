
/*FUNCION VALIDAR ENLAZADA AL BOTON CON  onclick="validar()"  esto significa que al dar click
en el boton, se ejecutara este script*/
function validar(){
    /*SEGMENTO DE LA CELDA NOMBRE*/
    let eNombre = document.getElementById("nombre") /*RECUPERA EL ELEMENTO MEDIANTE LA ID NOMBRE, ALMACENANDOLO EN eNombre */
    let vNombre = eNombre.value.trim()
    let eErrorNombre = document.getElementById("errorNombre")
    if(vNombre.length==0 ){
        console.log("Debes completar este campo") /*SIRVE PARA MOSTRAR UN MENSAJE EN LA CONSOLA (NAVEGADOR) */
        alert("Debes completar este campo") /*SIRVE PARA MOSTRAR UNA ALERTA (VENTANA EMERGENTE) */
    }
    else if(vNombre.length > 3){
        console.log("Cumple") /*SIRVE PARA MOSTRAR UN MENSAJE EN LA CONSOLA (NAVEGADOR) */
        eErrorNombre.innerText = "" /*SIRVE PARA OCULTAR EL MENSAJE DE ERROR*/
        eNombre.style.backgroundColor = "green" /*ESTABLECE EL COLOR DE FONDO DE LA CELDA COMO VERDE SI ESTA PASA LA VALIDACION */
        eNombre.style.color = "white" /*ESTABLECE EL COLOR DE LA LETRA DENTRO DE LA CELDA DE COLOR BLANCO */
    }
    else{
        console.log("Error, pocos caracteres.") /*SIRVE PARA MOSTRAR UN MENSAJE EN LA CONSOLA (NAVEGADOR) */
        alert("Debes ingresar al menos 3 caracteres") /*SIRVE PARA MOSTRAR UNA ALERTA (VENTANA EMERGENTE) */
        eErrorNombre.innerText = "Debes ingresar 3 caracteres como minimo" /*SIRVE PARA MOSTRAR UN MENSAJE DE ERROR*/
        eNombre.style.backgroundColor = "red" /*ESTABLECE EL COLOR DE FONDO DE LA CELDA COMO ROJO SI ESTA NO PASA LA VALIDACION */
        eNombre.style.color = "white" /*ESTABLECE EL COLOR DE LA LETRA DENTRO DE LA CELDA DE COLOR BLANCO */
    }

    /*SEGMENTO DE LA CELDA APELLIDO*/
    let eApellido = document.getElementById("apellido")
    let vApellido = eApellido.value
    let eErrorApellido = document.getElementById("errorApellido")
    if(vApellido.length==0 ){
        console.log("Debes completar este campo")
        alert("Debes completar este campo")
    }
    else if(vApellido.length > 3){
        console.log("Cumple")
        eErrorApellido.innerText = ""
        eApellido.style.backgroundColor = "green"
        eApellido.style.color = "white"
    }
    else{
        console.log("Error, Pocos caracteres")
        alert("Debes ingresar al menos 3 caracteres")
        eErrorApellido.innerText = "Debes ingresar 3 caracteres como minimo"
        eApellido.style.backgroundColor = "red"
        eApellido.style.color = "white"
    }

}