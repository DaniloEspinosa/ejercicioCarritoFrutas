/*
Hay que programar un carrito de compra de fruta.

El cliente eligirá que fruta quiere haciendo click sobre la imagen.
Un mensaje emergente le preguntará qué cantidad quiere.

Esta información se mostrará a la derecha, bajo "Total carrito", 
en <p id="carrito"></p>, de esta forma:
 Kiwi 2 kg x 4,20€/kg = 8,40 €

El total se actualizará con cada compra
 Total Compra: 8,40€
 
Se dará la opción de añadir o no más productos que se mostrarán
a continuación de los anteriores, y se sumará todo en el total. 
Por ejemplo:  
 Kiwi 2 kg x 4, 20€/kg = 8, 40€
 Pomelo 1 kg x 2,50€/kg = 2,50€
 Total Compra: 10,90€

Puedes modificar el código facilitado si ello te ayuda con el ejercicio,
pero deberás justificarlo.

Recuerda la importancia comentar con detalle el código.

 Lo importante es el cálculo, no los estilos css
 */

// Array que almacenara los totales de los productos a comprar
let totalesProductos = []

// funcion que estara asociada al onclick
function agregarProducto(producto, precio, unidad) {
    let cantidad = prompt(`¿Qué cantidad de ${producto} desea comprar?`)

    // Validación para evitar que se ingresen valores vacíos y que no sean números
    if (cantidad.trim() == "" || isNaN(cantidad.trim())) {
        alert("Valor introducido incorrecto, por favor ingresa un número válido")
        return
    }
    // Valor total del item seleccionado
    let total = Number(cantidad * precio).toFixed(2)
    // Agrego al documento la linea con la descripción del producto seleccionado
    // Creo un id en base al momento en el que se agrega el producto a la lista
    // Asocio una función al ícono de borrar el producto vinculada con el id
    document.getElementById("carrito").innerHTML += `<p id="${new Date().getTime()}"><i class="fa-solid fa-trash-can borrar" onclick="borrarTarea(${new Date().getTime()})"></i> ${producto} ${cantidad} x ${precio}/${unidad} = ${total}€</p>`
    // Voy agregando los totales al array de totales
    totalesProductos.push(Number(total))
    // Actualizo el precio final del carrito sumando los valores del array de totales
    document.getElementById("preuFinal").innerText = `${sumar(totalesProductos).toFixed(2)}€`
}

// Función para sumar los totales
function sumar(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += Number(array[i])
    }
    return total
}

// Función para borrar el producto de la lista de productos agregados
function borrarTarea(id) {
    // Declaro una variable que contendra el valor del producto que quiero eliminar
    let resta = document.getElementById(id).innerText
    resta = resta.replace("€", "").split(' = ')
    // Agregar el valor pero en negativo al array de totales de productos
    totalesProductos.push(-Number(resta[1]))
    // Borrar el producto agregado en la lista de productos
    document.getElementById(id).innerHTML = ""
    // Actualizo el precio final del carrito sumando los valores del array de totales
        document.getElementById("preuFinal").innerText = `${sumar(totalesProductos).toFixed(2)}€`
}

