// PRODUCTOS
const listaProductos = [
    {name: "FIFA 22", price: 50},
    {name: "Resident Evil: Village", price: 45},
    {name: "Red Dead Redemption", price: 30},
    {name: "Batman: Arkham Knight", price: 25},
    {name: "Assassins Creed 3", price: 15},
    {name: "The Last Of Us: Part 2", price: 55},
    {name: "Lego Star Wars: Skywalker Saga", price: 70}
]

//herramientas
const suma = (a, b) => a + b
const resta = (a, b) => a - b

// FILTRADO

const mayoresDe30 = listaProductos.filter( p => p.price >= 30)
const menoresDe30 = listaProductos.filter( p => p.price <= 30)

console.log('Los juegos mayores de $30 son ', mayoresDe30)
console.log('Los juegos menores de $30 son ', menoresDe30)

// FILTRADO por ORDEN ALFABÉTICO A-Z
/* console.log('Ordenados alfabeticamente A-Z')
listaProductos.sort((a, b) => {
    if(a.name > b.name) {return 1}
    if(a.name < b.name) {return -1}
    return 0
})
console.log(listaProductos) */

// LISTADO de PRODUCTOS

listaProductos.forEach((prod) => console.log(prod))

// ELECCIÓN DEL PRODUCTO y COMPRA
let eleccionJuegos = prompt("Ingrese su opción escribiendo el numero: " + "1-FIFA 22 | 2-Resident Evil: Village | 3-Red Dead Redemption | 4- Batman: Arkham Knight | 5- Assasins Creed 3 | 6- The Last Of Us: Part 2 | 7- Lego Star Wars: Skywalker Saga | 8- Salir")

switch (eleccionJuegos) {
    case "1":
        alert("Usted ha elegido " + listaProductos[0].name)
                alert('El precio del juego es de ' + listaProductos[0].price + ' USD')
                function precioTotal(){
                    let medioPago
                    const descuento = listaProductos[0].price * 0.30
                    const interes = listaProductos[0].price * 0.15

                    while(medioPago !== "efectivo" && medioPago !== "tarjeta"){
                        medioPago = prompt("Desea abonar en efectivo o tarjeta? Con efectivo tendrá un 30% off y con tarjeta un 15% de interés")
                        if(medioPago == "efectivo"){
                            let precioFinal = resta(listaProductos[0].price, descuento)
                            alert ("Su precio final será " + precioFinal + " Muchas gracias por su compra")
                            }
                        else if(medioPago == "tarjeta"){
                            let precioExtra = suma(listaProductos[0].price, interes)
                            alert("Su precio final será $" + precioExtra + " Muchas gracias por su compra")
                        }else{
                            alert("No es válido el método de pago")
                        }
                    }
                }
                precioTotal()
        break;

    case "2":
        alert("Usted ha elegido " + listaProductos[1].name)
                alert('El precio del juego es de ' + listaProductos[1].price + ' USD')
                function precioTotal(){
                    let medioPago
                    const descuento = listaProductos[1].price * 0.30
                    const interes = listaProductos[1].price * 0.15

                    while(medioPago !== "efectivo" && medioPago !== "tarjeta"){
                        medioPago = prompt("Desea abonar en efectivo o tarjeta? Con efectivo tendrá un 30% off y con tarjeta un 15% de interés")
                        if(medioPago == "efectivo"){
                            let precioFinal = resta(listaProductos[1].price, descuento)
                            alert ("Su precio final será " + precioFinal + " Muchas gracias por su compra")
                            }
                        else if(medioPago == "tarjeta"){
                            let precioExtra = suma(listaProductos[1].price, interes)
                            alert("Su precio final será $" + precioExtra + " Muchas gracias por su compra")
                        }else{
                            alert("No es válido el método de pago")
                        }
                    }
                }
                precioTotal()
        break;
        
        case "3":
        alert("Usted ha elegido " + listaProductos[2].name)
                alert('El precio del juego es de ' + listaProductos[2].price + ' USD')
                function precioTotal(){
                    let medioPago
                    const descuento = listaProductos[2].price * 0.30
                    const interes = listaProductos[2].price * 0.15

                    while(medioPago !== "efectivo" && medioPago !== "tarjeta"){
                        medioPago = prompt("Desea abonar en efectivo o tarjeta? Con efectivo tendrá un 30% off y con tarjeta un 15% de interés")
                        if(medioPago == "efectivo"){
                            let precioFinal = resta(listaProductos[2].price, descuento)
                            alert ("Su precio final será " + precioFinal + " Muchas gracias por su compra")
                            }
                        else if(medioPago == "tarjeta"){
                            let precioExtra = suma(listaProductos[2].price, interes)
                            alert("Su precio final será $" + precioExtra + " Muchas gracias por su compra")
                        }else{
                            alert("No es válido el método de pago")
                        }
                    }
                }
                precioTotal()
        break;
         
        case "4":
        alert("Usted ha elegido " + listaProductos[3].name)
                alert('El precio del juego es de ' + listaProductos[1].price + ' USD')
                function precioTotal(){
                    let medioPago
                    const descuento = listaProductos[3].price * 0.30
                    const interes = listaProductos[3].price * 0.15

                    while(medioPago !== "efectivo" && medioPago !== "tarjeta"){
                        medioPago = prompt("Desea abonar en efectivo o tarjeta? Con efectivo tendrá un 30% off y con tarjeta un 15% de interés")
                        if(medioPago == "efectivo"){
                            let precioFinal = resta(listaProductos[3].price, descuento)
                            alert ("Su precio final será " + precioFinal + " Muchas gracias por su compra")
                            }
                        else if(medioPago == "tarjeta"){
                            let precioExtra = suma(listaProductos[3].price, interes)
                            alert("Su precio final será $" + precioExtra + " Muchas gracias por su compra")
                        }else{
                            alert("No es válido el método de pago")
                        }
                    }
                }
                precioTotal()
        break;
         
        case "5":
        alert("Usted ha elegido " + listaProductos[4].name)
                alert('El precio del juego es de ' + listaProductos[4].price + ' USD')
                function precioTotal(){
                    let medioPago
                    const descuento = listaProductos[4].price * 0.30
                    const interes = listaProductos[4].price * 0.15

                    while(medioPago !== "efectivo" && medioPago !== "tarjeta"){
                        medioPago = prompt("Desea abonar en efectivo o tarjeta? Con efectivo tendrá un 30% off y con tarjeta un 15% de interés")
                        if(medioPago == "efectivo"){
                            let precioFinal = resta(listaProductos[4].price, descuento)
                            alert ("Su precio final será " + precioFinal + " Muchas gracias por su compra")
                            }
                        else if(medioPago == "tarjeta"){
                            let precioExtra = suma(listaProductos[4].price, interes)
                            alert("Su precio final será $" + precioExtra + " Muchas gracias por su compra")
                        }else{
                            alert("No es válido el método de pago")
                        }
                    }
                }
                precioTotal()
        break;
         
        case "6":
        alert("Usted ha elegido " + listaProductos[5].name)
                alert('El precio del juego es de ' + listaProductos[1].price + ' USD')
                function precioTotal(){
                    let medioPago
                    const descuento = listaProductos[5].price * 0.30
                    const interes = listaProductos[5].price * 0.15

                    while(medioPago !== "efectivo" && medioPago !== "tarjeta"){
                        medioPago = prompt("Desea abonar en efectivo o tarjeta? Con efectivo tendrá un 30% off y con tarjeta un 15% de interés")
                        if(medioPago == "efectivo"){
                            let precioFinal = resta(listaProductos[5].price, descuento)
                            alert ("Su precio final será " + precioFinal + " Muchas gracias por su compra")
                            }
                        else if(medioPago == "tarjeta"){
                            let precioExtra = suma(listaProductos[5].price, interes)
                            alert("Su precio final será $" + precioExtra + " Muchas gracias por su compra")
                        }else{
                            alert("No es válido el método de pago")
                        }
                    }
                }
                precioTotal()
        break;
                 
        case "7":
        alert("Usted ha elegido " + listaProductos[6].name)
                alert('El precio del juego es de ' + listaProductos[1].price + ' USD')
                function precioTotal(){
                    let medioPago
                    const descuento = listaProductos[6].price * 0.30
                    const interes = listaProductos[6].price * 0.15

                    while(medioPago !== "efectivo" && medioPago !== "tarjeta"){
                        medioPago = prompt("Desea abonar en efectivo o tarjeta? Con efectivo tendrá un 30% off y con tarjeta un 15% de interés")
                        if(medioPago == "efectivo"){
                            let precioFinal = resta(listaProductos[6].price, descuento)
                            alert ("Su precio final será " + precioFinal + " Muchas gracias por su compra")
                            }
                        else if(medioPago == "tarjeta"){
                            let precioExtra = suma(listaProductos[6].price, interes)
                            alert("Su precio final será $" + precioExtra + " Muchas gracias por su compra")
                        }else{
                            alert("No es válido el método de pago")
                        }
                    }
                }
                precioTotal()
        break;
        
        case "8":
            let salir = prompt("Desea abandonar el carrito ?" + " Escriba: Y para salir").toLowerCase()
            if (salir = 'y') {}
    }
