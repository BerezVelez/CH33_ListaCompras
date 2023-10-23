// El código va aquí -> 
let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");
let btnAgregar = document.getElementById("btnAgregar");
//Se validan cuando de click en los botones: Agregar
let alertValidaciones = document.getElementById("alertValidaciones");

function validarCantidad(){
    if (txtNumber.value.length==0){
        return false;
    }//if length
    return true;
}//validarCantidad function

btnAgregar.addEventListener("click", function(event){
    event.preventDefault(); //para que no haga nada si no es necesario?
    if (txtNombre.value.length<3){
        alertValidaciones.innerHTML="El campo <strong>Nombre</strong> es requerido <br/>"
        alertValidaciones.style.display="block"; //Lo muestra en Bloque
    }//If txtNombre <3

    if (! validarCantidad()){
        alertValidaciones.innerHTML+="El campo <strong>Cantidad</strong> es requerido"
        alertValidaciones.style.display="block"; //Lo muestra en Bloque
    }//validarCantidad
});//EvenListener