


function validar(){
    console.log("HI")
    let eNombre = document.getElementById("nombre")
    console.log(eNombre)
    let vNombre = eNombre.value.trim()
    console.log(vNombre)
    console.log(vNombre.lenght)
    if(vNombre.lenght==0 ){
        console.log("Debes completar este campo")
    }
    else if(vNombre.lenght > 3){
        console.log("Cumple")
    }
    else{
        console.log("Error, pocos caracteres.")
        alert("Debes ingresar al menos 3 caracteres")
    }
}